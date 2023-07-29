import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // if ViewEncapsulation.NONE anything added to this component's css will override the other components
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
  // use @Input to make element property accessible outside server-element component you have the option to pass in an alias 'srvElement
  // NOTE: by default properites are only accessible to their individual component
  @Input('srvElement') //ability to have property be accessible for a parent component to use from the outside
  element: {
    type: string,
    name: string,
    content: string,
  };
 @Input() name: string;
  constructor() {
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ng-on-changes called')
    console.log(changes)

  }
  ngOnInit(): void {
    console.log('ng-on-init-called')

  }

 //gets called whenever there is a change called
  ngDoCheck() {
    console.log('ngdocheck called')
  }
  // only called once
  ngAfterContentInit(){
    console.log("ngAfterContent init called")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContent Checked called")

  }

  ngAfterViewInit()  {
    console.log("ngAfterView Init called")

  }


  ngAfterViewChecked(): void  {
    console.log("ngAfterView Checked called")

  }
  ngOnDestroy(): void {
     console.log("ngOnDestroy called")
  }
}
