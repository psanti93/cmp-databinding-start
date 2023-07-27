import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // use @Input to make element property accessible outside server-element component you have the option to pass in an alias 'srvElement
  // by default properites are only accessible to their individual component
  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
