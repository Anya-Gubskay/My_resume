import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TooltipPosition, TooltipTheme} from 'src/shared/enums/tooltip.enum';
import {TooltipSettings} from 'src/shared/interfaces/tooltip.interface';

@Component({
	selector: 'app-export-pdf',
	templateUrl: './export-pdf.component.html',
	styleUrls: ['./export-pdf.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportPdfComponent {
	@Output() handleDownload = new EventEmitter<void>();

	public readonly TOOLTIP_SETTINGS: TooltipSettings = {
		position: TooltipPosition.BELOW,
		theme: TooltipTheme.DARK,
		showDelay: 100,
		title: 'export to pdf',
	};
}
