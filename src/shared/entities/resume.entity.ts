import {IconProp} from '@fortawesome/fontawesome-svg-core';

export namespace Resume {
	export class Card {
		constructor(public titleData: string, public description: string, public title?: string) {}
	}

	export type TitleBlocks = Record<string, string>;

	export interface ItemInformation {
		href?: string;
		info?: string;
		alt?: string;
		text?: string;
		matIcon?: string;
		icon?: IconProp;
    hasIcon?: boolean;
	}
}
