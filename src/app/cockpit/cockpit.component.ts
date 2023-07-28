import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // make properties be events via event emitter, and using output to make property listenable to parent component from outside
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}> ();
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();



  // newServerName='';
  // newServerContent='';

  constructor() { }

  ngOnInit(): void {
  }
  //when a button is clicked it will emit an event to the app component
  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(nameInput.value)
   this.serverCreated.emit({serverName: nameInput.value, serverContent: contentInput.value})
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: contentInput.value })
  }
}
