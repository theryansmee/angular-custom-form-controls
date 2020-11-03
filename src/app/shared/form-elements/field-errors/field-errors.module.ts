import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorsComponent } from './field-errors.component';



@NgModule( {
	declarations: [ FieldErrorsComponent ],
	exports: [
		FieldErrorsComponent
	],
	imports: [
		CommonModule
	]
})
export class FieldErrorsModule { }
