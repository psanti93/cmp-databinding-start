import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // make properties be events via event emitter, and using output to make property listenable from outside
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}> ();
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();


  newServerName='';
  newServerContent='';

  constructor() { }

  ngOnInit(): void {
  }
  //when a button is clicked it will emit an event to the app component
  onAddServer() {
   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }
}
