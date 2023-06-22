import {TooltipPosition, TooltipTheme} from '../enums/tooltip.enum';

export interface TooltipSettings {
	title: string;
	position?: TooltipPosition;
	theme?: TooltipTheme;
	hideDelay?: number;
	showDelay?: number;
	left?: number;
	top?: number;
	visible?: boolean;
}
