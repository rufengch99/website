import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent, AppToDoListReadDirective, AppToDoListRemoveDirective } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultRoutingModule } from './default-routing.module';



@NgModule({
  declarations: [
    DefaultComponent,
    AppToDoListReadDirective,
    AppToDoListRemoveDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    DefaultRoutingModule
  ],
  bootstrap: [DefaultComponent]
})
export class DefaultModule { }
