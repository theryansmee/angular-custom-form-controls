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


	constructor () { }


	ngOnInit (): void {
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
			console.log( registrationRequest );
		}
	}

}
