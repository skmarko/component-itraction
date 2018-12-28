import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s-c',
  templateUrl: './s-c.component.html',
  styleUrls: ['./s-c.component.css']
})
export class SCComponent implements OnInit {
  @Input('parentData') public work; 
  @Output() public childEvent= new EventEmitter();

  constructor() { }
  fun(){
    this.childEvent.emit("Child to parent 2nd example")
  }

  ngOnInit() {
  }

}
