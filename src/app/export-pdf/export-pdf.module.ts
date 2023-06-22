import {NgModule} from '@angular/core';
import {ExportPdfComponent} from './export-pdf.component';
import {MatIconModule} from '@angular/material/icon';
import {TooltipDirectiveModule} from 'src/shared/directives/tooltip/tooltip.module';

@NgModule({
	declarations: [ExportPdfComponent],
	exports: [ExportPdfComponent],
	imports: [MatIconModule, TooltipDirectiveModule],
})
export class ExportPdfModule {}
