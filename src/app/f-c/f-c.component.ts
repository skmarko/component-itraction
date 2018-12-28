import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-f-c',
  templateUrl: './f-c.component.html',
  styleUrls: ['./f-c.component.css']
})
export class FCComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
myFun(){
  this.childEvent.emit("Hello marko your child to parent datapass")
}
}
