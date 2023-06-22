import {
	ChangeDetectorRef,
	ComponentRef,
	Directive,
	ElementRef,
	HostListener,
	Input,
	ViewContainerRef,
} from '@angular/core';
import {TooltipPosition} from 'src/shared/enums/tooltip.enum';
import {TooltipComponent} from './tooltip.component';
import {TooltipSettings} from 'src/shared/interfaces/tooltip.interface';

@Directive({
	selector: '[tooltip]',
})
export class TooltipDirective {
	@Input() tooltip: TooltipSettings | null = null;

	private componentRef: ComponentRef<any> | null = null;
	private showTimeout?: number;
	private hideTimeout?: number;

	constructor(
		private elementRef: ElementRef,
		private viewContainerRef: ViewContainerRef,
		private cd: ChangeDetectorRef
	) {}

	@HostListener('mouseenter')
	onMouseEnter(): void {
		this.initializeTooltip();
	}

	@HostListener('mouseleave')
	onMouseLeave(): void {
		this.setHideTooltipTimeout();
	}

	private initializeTooltip() {
		if (this.componentRef === null) {
			window.clearInterval(this.tooltip?.hideDelay);

			this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);
			this.setTooltipComponentProperties();

			document.body.appendChild(this.componentRef.location.nativeElement);
			this.showTimeout = window.setTimeout(() => this.showTooltip(), this.tooltip?.showDelay);
		}
	}

	private setTooltipComponentProperties() {
		if (this.componentRef !== null) {
			this.componentRef.instance.tooltip.title = this.tooltip?.title;
			this.componentRef.instance.tooltip.position = this.tooltip?.position;
			this.componentRef.instance.tooltip.theme = this.tooltip?.theme;

			const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();

			switch (this.tooltip?.position) {
				case TooltipPosition.BELOW: {
					this.componentRef.instance.tooltip.left = Math.round((right - left) / 2 + left);
					this.componentRef.instance.tooltip.top = Math.round(bottom);
					break;
				}
				case TooltipPosition.ABOVE: {
					this.componentRef.instance.tooltip.left = Math.round((right - left) / 2 + left);
					this.componentRef.instance.tooltip.top = Math.round(top);
					break;
				}
				case TooltipPosition.RIGHT: {
					this.componentRef.instance.left = Math.round(right);
					this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
					break;
				}
				case TooltipPosition.LEFT: {
					this.componentRef.instance.tooltip.left = Math.round(left);
					this.componentRef.instance.tooltip.top = Math.round(top + (bottom - top) / 2);
					break;
				}
				default: {
					break;
				}
			}
		}
	}

	private showTooltip() {
		if (this.componentRef !== null) {
			this.componentRef.instance.tooltip.visible = true;
			this.cd.markForCheck();
		}
	}

	private setHideTooltipTimeout() {
		this.hideTimeout = window.setTimeout(() => this.destroy(), this.tooltip?.hideDelay);
	}

	ngOnDestroy(): void {
		this.destroy();
	}

	destroy(): void {
		if (this.componentRef !== null) {
			window.clearInterval(this.showTimeout);
			window.clearInterval(this.tooltip?.hideDelay);
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}
}
