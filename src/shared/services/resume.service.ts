import {Injectable} from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {Resume} from '../entities/resume.entity';

@Injectable()
export class ResumeService {
	public readonly CardsWork: Resume.Card[] = [
    new Resume.Card(
      'Plata',
      'October 2023 — September 2024',
      'Plata is a high-tech financial platform that is changing the way Mexicans interact with money.',
      'Telesales team (20 people)',
      'Area of responsibility CRM system for the sales team',
  ['Develop and maintain internal applications for telephony and sales',
    'Development of common functionality for teams',
    'Analysis of problems and search for their solutions',
    'Collaborate with analysts to create specifications for new features',
  'Ensure quality control through thorough testing',
 'Train and onboard new employees in processes and roles',
  'Improve team efficiency and communication processes',
    'Assistance in design development'
  ],

      '(Angular 18, NgRx, Nx, Kibana, Playwright)',

    ),
		new Resume.Card(
      'DataMola',
			'March 2020 — February 2023',
      'DataMola is specialized in data warehouse technologies and helps in the implementation of business intelligence systems',
              'Team AMC Networks (15 people)',
      'Development of data analytics projects for AMC Networks',
      ['Maintaining existing functionality', 'Development of new functionality', 'Team lead junior developers', 'Conducting interviews'],
			'(Angular 14, NgRx, Highcharts, Nx)',

		),
		new Resume.Card(
      'SoftClub',
			'December 2019 — February 2020',
			'Software for banks and financial organizations.',
      '',
      '',
      [],
      '(Angular)',
		),
	];

	public readonly CardsEducation: Resume.Card[] = [
		new Resume.Card(
      'iTechArt Group',
			'August 2019 — November 2019',
			'Student labs. Single-page application «CargoManager».<br>(Angular)',

		),
		new Resume.Card(
      'IT Academy',
			'April 2019 — May 2019',
			'Student Web application development with JavaScript course at educational center of HTP. Single-page application «BreathtakingTest».<br>(WebPack, ECMAScript 6, HTML, CSS3, Less)',
		),
		new Resume.Card(
      'IT Academy',
			'December 2018 — January 2019',
			'Student of HTML, CSS, JavaScript course educational center of HTP. Cross-browser website «The secret of magic».<br>(HTML, CSS3, Less, ECMAScript 5)',

		),
		new Resume.Card(
      'Belarusian National Technical University',
			'2017',
			'Engineer of heat and gas supply of ventilation and air basin.',

		),
	];

	public readonly TitleBlocks: Resume.TitleBlocks = {
		skills: 'skills',
		aboutMe: 'about Me',
		work: 'work experience',
		education: 'education',
		languages: 'languages',
		interests: 'interests',
    myProjects: 'My Projects',
	};

	public readonly ListInfo: Resume.ItemInformation[] = [
		{
			href: 'tel:+375292523512',
			icon: ['fas', 'mobile-screen-button'],
			info: '+375(29)-252-35-12',
		},
    {
      matIcon: 'location_on',
      text: 'Minsk, Belarus',
      hasIcon: true,
    },
		{
			href: 'mailto:anygubskaya@gmail.ru',
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
		}
	];

  public readonly MyProjects: Resume.ItemInformation[] = [{
			href: 'https://japanese-crosswords.web.app/',
      src: './../../assets/images/logo.png',
			alt: 'Japanese Crosswords',
  }]

	public readonly ListSkills: Resume.ItemInformation[] = [
		{text: 'Angular 18', hasIcon: true},
		{text: 'RxJS', hasIcon: true},
		{text: 'NgRx', hasIcon: true},
		{text: 'SCSS', hasIcon: true},
		{text: 'Gulp', hasIcon: true},
		{text: 'Nx', hasIcon: true},
		{text: 'Node.js', hasIcon: true},
    {text: 'Kibana', hasIcon: true},
    {text: 'Playwright', hasIcon: true},
    {text: 'Tailwind CSS', hasIcon: true},
    {text: 'Elf', hasIcon: true},
		{text: 'Git', hasIcon: true},
		{text: 'MF', hasIcon: true},
		{text: 'Highcharts', hasIcon: true},
		{text: 'Figma', hasIcon: true},
	];

	public readonly ListInterests: Resume.ItemInformation[] = [
		{text: 'Music', matIcon: 'headphones', hasIcon: true},
		{text: 'Sport', matIcon: 'pool', hasIcon: true},
		{text: 'Board games', matIcon: 'casino', hasIcon: true},
		{text: 'Read books', matIcon: 'chrome_reader_mode', hasIcon: true},
	];

	public readonly ListLanguages: Resume.ItemInformation[] = [{text: 'Belarusian - Native'}, {text: 'English - B1'}];

	public readonly CardAboutMe: Resume.Card[] = [
		new Resume.Card(
      '',
			'',
			`I enjoy working in a team to create innovative solutions.
			I'm always striving for growth and improvement, never settling for the status quo.
			`
		),
	];

	public readonly PathMyPhoto = '../assets/images/my_photo.png';

	public async handleDownload(event: HTMLElement, title: string): Promise<void> {
		const contentCanvas = await html2canvas(event);
		const image = contentCanvas.toDataURL('image/jpeg');
		const pdf = new jsPDF('p', 'mm', 'A4'); // A4 size pa
		const fileWidth = pdf.internal.pageSize.getWidth();
		const pageHeight = pdf.internal.pageSize.getHeight();
		const fileHeight = (contentCanvas.height * fileWidth) / contentCanvas.width;
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
