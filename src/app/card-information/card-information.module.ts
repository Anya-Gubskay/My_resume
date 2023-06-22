import {NgModule} from '@angular/core';
import {CardInformationComponent} from './card-information.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	declarations: [CardInformationComponent],
	exports: [CardInformationComponent],
	imports: [BrowserAnimationsModule],
})
export class CardInformationModule {}
