import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FieldErrorsModule } from '../field-errors/field-errors.module';



@NgModule( {
	declarations: [ InputComponent ],
	exports: [
		InputComponent
	],
	imports: [
		CommonModule,
		FieldErrorsModule
	]
})
export class InputModule { }
