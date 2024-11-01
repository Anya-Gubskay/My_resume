import {IconProp} from '@fortawesome/fontawesome-svg-core';

export namespace Resume {
	export class Card {
		constructor(public title: string, public titleData: string, public description: string, public team?: string, public areaOfResponsibility?: string, public listOfResponsibilities?: string[], public technologies?: string) {}
	}

	export type TitleBlocks = Record<string, string>;

	export interface ItemInformation {
		href?: string;
    src?: string;
		info?: string;
		alt?: string;
		text?: string;
		matIcon?: string;
		icon?: IconProp;
    hasIcon?: boolean;
	}
}
