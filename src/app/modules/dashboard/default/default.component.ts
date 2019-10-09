import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import {Directive} from '@angular/core';

@Directive({
  selector: '[appToDoListRead]',
})
export class AppToDoListReadDirective {
  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement).classList.toggle('done-task');
  }
}

@Directive({
  selector: '[appToDoListRemove]',
})
export class AppToDoListRemoveDirective {
  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement.parentElement).classList.add('d-none');
  }
}
