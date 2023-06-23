import {Injectable} from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {Resume} from '../entities/resume.entity';

@Injectable()
export class ResumeService {
	public readonly CardsWork: Resume.Card[] = [
		new Resume.Card(
			'March 2020 — February 2023',
			'Development of a graphic interface for data analytics projects.</br>(Angular 14, NgRx, Highcharts, Nx)',
			'DataMola'
		),
		new Resume.Card(
			'December 2019 — February 2020',
			'Software for banks and financial organizations.<br>(Angular)',
			'SoftClub'
		),
	];

	public readonly CardsEducation: Resume.Card[] = [
		new Resume.Card(
			'August 2019 — November 2019',
			'Student labs. Single-page application «CargoManager».<br>(Angular)',
			'iTechArt Group'
		),
		new Resume.Card(
			'April 2019 — May 2019',
			'Student Web application development with JavaScript course at educational center of HTP. Single-page application «BreathtakingTest».<br>(WebPack, ECMAScript 6, HTML, CSS3, Less)',
			'IT Academy'
		),
		new Resume.Card(
			'December 2018 — January 2019',
			'Student of HTML, CSS, JavaScript course educational center of HTP. Cross-browser website «The secret of magic».<br>(HTML, CSS3, Less, ECMAScript 5)',
			'IT Academy'
		),
		new Resume.Card(
			'2017',
			'Engineer of heat and gas supply of ventilation and air basin.',
			'Belarusian National Technical University'
		),
	];

	public readonly TitleBlocks: Resume.TitleBlocks = {
		skills: 'skills',
		aboutMe: 'about Me',
		work: 'work experience',
		education: 'education',
		languages: 'languages',
		interests: 'interests',
	};

	public readonly ListInfo: Resume.ItemInformation[] = [
		{
			href: 'tel:+375292523512',
			icon: ['fas', 'mobile-screen-button'],
			info: '375-(29)-252-35-12',
		},
		{
			href: 'mailto:anyagubskaya@gmail.ru',
			icon: ['fas', 'envelope'],
			info: 'anyagubskaya@gmail.ru',
		},
		{
			href: 'https://t.me/anya_smile',
			icon: ['fab', 'telegram'],
			info: 'https://t.me/anya_smile',
			alt: 'Telegram',
		},
		{
			href: 'https://www.linkedin.com/in/anyagubskaya',
			icon: ['fab', 'linkedin'],
			info: 'https://www.linkedin.com/in/anyagubskaya',
			alt: 'Linkedin',
		},
		{
			href: 'https://github.com/Anya-Gubskay',
			icon: ['fab', 'github'],
			info: 'https://github.com/Anya-Gubskay',
			alt: 'GitHub',
		},
	];

	public readonly ListSkills: Resume.ItemInformation[] = [
		{text: 'Angular 14'},
    {text: 'RxJS'},
		{text: 'NgRx'},
		{text: 'Webpack'},
    {text: 'Gulp'},
		{text: 'Nx'},
		{text: 'Node.js'},
		{text: 'Git'},
		{text: 'MF'},
		{text: 'Highcharts'},
    {text: 'SCSS'},
	];

	public readonly ListInterests: Resume.ItemInformation[] = [
		{text: 'Music', matIcon: 'headphones'},
		{text: 'Sport', matIcon: 'pool'},
		{text: 'Board games', matIcon: 'casino'},
		{text: 'Read books', matIcon: 'chrome_reader_mode'},
	];

	public readonly ListLanguages: Resume.ItemInformation[] = [{text: 'Belorussian - Native'}, {text: 'English - A2'}];

	public readonly CardAboutMe: Resume.Card[] = [
		new Resume.Card(
			'My Birthday - 26.08.1994',
			'I like to work in a team and create interesting feature together. I try not to stand still and always move forward in everything.'
		),
	];

	public readonly PathMyPhoto = '../assets/images/my_photo.png';

	public async handleDownload(event: HTMLElement, title: string): Promise<void> {
		const contentCanvas = await html2canvas(event);
		const image = contentCanvas.toDataURL('image/jpeg');
		const pdf = new jsPDF('p', 'mm', 'A4'); // A4 size pa
		let fileWidth = pdf.internal.pageSize.getWidth();
		const pageHeight = pdf.internal.pageSize.getHeight();
		let fileHeight = (contentCanvas.height * fileWidth) / contentCanvas.width;
		let heightLeft = fileHeight - pageHeight;
		let position = 0;

		pdf.addImage(image, 'JPEG', 0, position, fileWidth, fileHeight, '', 'FAST');
		while (heightLeft >= 0) {
			position -= pageHeight;
			pdf.addPage();
			pdf.addImage(image, 'PNG', 0, position, fileWidth, fileHeight, '', 'FAST');
			heightLeft -= pageHeight;
		}
		pdf.save(title);
	}
}
