import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {CardInformationModule} from './card-information/card-information.module';
import {TitleBlockModule} from './title-block/title-block.module';
import {ListInformationComponent} from './list-information/list-information.component';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faEnvelope, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {ResumeService} from 'src/shared/services/resume.service';
import {ExportPdfModule} from './export-pdf/export-pdf.module';

@NgModule({
	declarations: [AppComponent, ListInformationComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatIconModule,
		CardInformationModule,
		TitleBlockModule,
		FontAwesomeModule,
		ExportPdfModule,
	],
	providers: [ResumeService],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIcons(faGithub, faLinkedin, faTelegram, faEnvelope, faMobileScreenButton);
	}
}
