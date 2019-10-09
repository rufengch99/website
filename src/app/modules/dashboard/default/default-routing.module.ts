import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: {
      title: 'HOME',
      icon: 'icon-home',
      caption: 'taiden education home',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
