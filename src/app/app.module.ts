import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { InputModule } from './shared/form-elements/input/input.module';
import { PasswordInputModule } from './shared/form-elements/password-input/password-input.module';
import { HexCodeInputModule } from './shared/form-elements/hex-code-input/hex-code-input.module';


@NgModule({
	declarations: [
		AppComponent,
		RegistrationFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		InputModule,
		PasswordInputModule,
		HexCodeInputModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor ( library: FaIconLibrary ) {
		library.addIconPacks( far );
	}
}
