import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
	selector: 'app-field-errors',
	templateUrl: './field-errors.component.html',
	styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {


	@Input()
	public formField: FormControl;


	constructor () { }


}
