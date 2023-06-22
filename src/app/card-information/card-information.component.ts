import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Resume} from 'src/shared/entities/resume.entity';

@Component({
	selector: 'app-card-information',
	templateUrl: './card-information.component.html',
	styleUrls: ['./card-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInformationComponent {
	@Input() card!: Resume.Card;
}
