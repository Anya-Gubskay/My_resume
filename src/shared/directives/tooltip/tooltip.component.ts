import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TooltipPosition, TooltipTheme} from 'src/shared/enums/tooltip.enum';
import {TooltipSettings} from 'src/shared/interfaces/tooltip.interface';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
	public tooltip: TooltipSettings = {
		position: TooltipPosition.DEFAULT,
		theme: TooltipTheme.DEFAULT,
		title: '',
		left: 0,
		top: 0,
		visible: false,
	};
}
