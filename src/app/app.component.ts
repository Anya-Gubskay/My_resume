import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {Resume} from 'src/shared/entities/resume.entity';
import {ResumeService} from 'src/shared/services/resume.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild('wrapper') wrapper!: ElementRef;

	public readonly title = 'my_resume';
	public readonly titlePdf = 'anya-gubskaya-resume.pdf';

	constructor(public resumeService: ResumeService, public el: ElementRef) {}

	public trackByFn(index: number, item: Resume.Card): string {
		return item.titleData;
	}
}
