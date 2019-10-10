import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';

const routes: Routes = [
	{
		path: 'infrastructure',
		component: InfrastructureComponent,
		data: {
			title: 'Infrastructure',
			icon: 'icon-building',
			caption: 'School Infrastructure',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class SchoolRoutingModule {}
