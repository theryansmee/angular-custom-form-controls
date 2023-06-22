import { Component, forwardRef, Inject, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';


@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
				() => InputComponent
			),
			multi: true
		}
	]
})
export class InputComponent implements OnInit, ControlValueAccessor {

	public control: FormControl | undefined;

	// @Input()
	// public parentForm: FormGroup;

	@Input()
	public fieldName: string;

	@Input()
	public label: string;

	public value: string;

	public changed: ( value: string ) => void;

	public touched: () => void;

	public isDisabled: boolean;


	// get formField (): FormControl {
	// 	return this.parentForm?.get( this.fieldName ) as FormControl;
	// }


	constructor (@Inject(Injector) private injector: Injector) { }

	ngOnInit(): void {
		this.setupControl();
	}

	private setupControl(): void {
		try {
			const formControl = this.injector.get(NgControl);

			switch(formControl.constructor) {
				case FormControlName:
					this.control = this.injector.get(FormGroupDirective).getControl(formControl as FormControlName);
					break;
				default:
					this.control = (formControl as FormControlDirective).form as FormControl;
					break;
			}
		} catch (err) {
			this.control = new FormControl('');
		}

	}

	public writeValue ( value: string ): void {
		this.control ? this.control.setValue(value) : this.control = new FormControl(value);
	}

	public onChange ( event: Event ): void {
		const value: string =
			( <HTMLInputElement>event.target ).value;

		this.changed( value );
	}

	public registerOnChange ( fn: any ): void {
		this.changed = fn;
	}

	public registerOnTouched ( fn: any ): void {
		this.touched = fn;
	}

	public setDisabledState ( isDisabled: boolean ): void {
		this.isDisabled = isDisabled;
	}


}
