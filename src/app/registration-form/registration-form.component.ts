import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { RegistrationRequestModel } from './registration-request.model';





@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {


	public registrationFrom: FormGroup;

	public passwordFieldType: string = 'text';

	get nameField (): FormControl {
		return this.registrationFrom.get( 'name' ) as FormControl;
	}

	get emailField (): FormControl {
		return this.registrationFrom.get( 'email' ) as FormControl;
	}

	get passwordField (): FormControl {
		return this.registrationFrom.get( 'password' ) as FormControl;
	}


	constructor() { }


	ngOnInit(): void {
		this.generateRegistrationForm();
	}


	public generateRegistrationForm (): void {
		this.registrationFrom =
			new FormGroup( {
				name: new FormControl(
					'',
					{
						validators: [
							Validators.required,
							UniversalValidators.noEmptyString
						]
					}
				),
				email: new FormControl(
					'',
					{
						validators: [
							Validators.required,
							EmailValidators.normal
						]
					}
				),
				password: new FormControl(
					'',
					{
						validators: [
							Validators.required,
							UniversalValidators.noWhitespace
						]
					}
				),
				favouriteHexCode: new FormControl( '' )
			});
	}

	public submitRegistrationForm (): void {
		if ( this.registrationFrom.valid ) {
			const registrationRequest: RegistrationRequestModel = {
				...this.registrationFrom.value
			};

			// Success 🎉
			console.log( { registrationRequest } );
		}
	}

	public togglePasswordVisible (): void {
		this.passwordFieldType =
			this.passwordFieldType === 'text'
				? 'password'
				: 'text';
	}

}
