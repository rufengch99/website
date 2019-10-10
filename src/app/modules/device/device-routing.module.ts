import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
	{
		path: 'management',
		component: ManagementComponent,
		data: {
			title: 'Management',
			icon: 'icon-harddrive',
			caption: 'Device Management',
			status: true
		}
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DeviceRoutingModule {}
