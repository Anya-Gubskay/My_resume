import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Resume} from 'src/shared/entities/resume.entity';

@Component({
	selector: 'app-list-information',
	templateUrl: './list-information.component.html',
	styleUrls: ['./list-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInformationComponent {
	@Input() data: Resume.ItemInformation[] = [];

	public DEFAULT_ICON: IconProp = ['fas', 'envelope'];

	public trackByFn(index: number, item: Resume.ItemInformation): string | undefined {
		return item.href ?? item.text;
	}
}
