import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
	selector: 'app-password-input',
	templateUrl: './password-input.component.html',
	styleUrls: ['./password-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
				() => PasswordInputComponent
			),
			multi: true
		}
	]
})
export class PasswordInputComponent implements ControlValueAccessor {


	@Input()
	public parentForm: FormGroup;

	@Input()
	public fieldName: string;

	@Input()
	public label: string;

	public passwordFieldType: string = 'password';

	public value: string;

	public changed: ( value: string ) => void;

	public touched: () => void;

	public isDisabled: boolean;


	get formField (): FormControl {
		return this.parentForm?.get( this.fieldName ) as FormControl;
	}


	constructor () { }


	public writeValue ( value: string ): void {
		this.value = value;
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

	public togglePasswordVisible (): void {
		this.passwordFieldType =
			this.passwordFieldType === 'text'
				? 'password'
				: 'text';
	}

}
