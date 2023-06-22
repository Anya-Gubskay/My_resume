import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-title-block',
	templateUrl: './title-block.component.html',
	styleUrls: ['./title-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBlockComponent {
	@Input() title = '';
}
