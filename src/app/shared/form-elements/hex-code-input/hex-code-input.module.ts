import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexCodeInputComponent } from './hex-code-input.component';
import { FieldErrorsModule } from '../field-errors/field-errors.module';



@NgModule( {
	declarations: [ HexCodeInputComponent ],
	exports: [
		HexCodeInputComponent
	],
	imports: [
		CommonModule,
		FieldErrorsModule
	]
})
export class HexCodeInputModule { }
