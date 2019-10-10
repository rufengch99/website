import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';

@NgModule({
	declarations: [ InfrastructureComponent ],
	imports: [ CommonModule, SchoolRoutingModule ]
})
export class SchoolModule {}
