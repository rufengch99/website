import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { ManagementComponent } from './management/management.component';

@NgModule({
	declarations: [ ManagementComponent ],
	imports: [ CommonModule, DeviceRoutingModule ]
})
export class DeviceModule {}
