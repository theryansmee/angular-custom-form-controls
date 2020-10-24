import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';


@NgModule({
	declarations: [
		AppComponent,
		RegistrationFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor ( library: FaIconLibrary ) {
		library.addIconPacks( far );
	}
}
