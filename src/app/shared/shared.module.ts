import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
	PERFECT_SCROLLBAR_CONFIG,
	PerfectScrollbarConfigInterface,
	PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { ClickOutsideModule } from 'ng-click-outside';

import { TitleComponent } from '../layout/main/title/title.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { CardComponent } from './card/card.component';
import { CardToggleDirective } from './card/card-toggle.directive';
import { DataFilterPipe } from './elements/data-filter.pipe';
import { AccordionDirective, AccordionAnchorDirective, AccordionLinkDirective } from './accordion';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
	imports: [ CommonModule, NgbModule.forRoot(), HttpClientModule, PerfectScrollbarModule, ClickOutsideModule ],
	exports: [
		NgbModule,
		ToggleFullscreenDirective,
		AccordionDirective,
		AccordionAnchorDirective,
		AccordionLinkDirective,
		CardToggleDirective,
		HttpClientModule,
		TitleComponent,
		SpinnerComponent,
		ModalAnimationComponent,
		ModalBasicComponent,
		CardComponent,
		ClickOutsideModule,
		DataFilterPipe
	],
	declarations: [
		TitleComponent,
		SpinnerComponent,
		ToggleFullscreenDirective,
		ModalAnimationComponent,
		ModalBasicComponent,
		CardComponent,
		CardToggleDirective,
		AccordionDirective,
		AccordionAnchorDirective,
		AccordionLinkDirective,
		DataFilterPipe
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule {}
