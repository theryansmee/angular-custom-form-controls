import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputComponent } from './password-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FieldErrorsModule } from '../field-errors/field-errors.module';



@NgModule( {
	declarations: [ PasswordInputComponent ],
	exports: [
		PasswordInputComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		FieldErrorsModule
	]
})
export class PasswordInputModule { }
