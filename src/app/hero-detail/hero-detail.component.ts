import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  @Input() scode:any;
  @Input() peoples:any;
  @Input() datacode:any;
  @Output() public send=new EventEmitter();
  @Output() public peopleEvent=new EventEmitter();
 @Output() public myevent=new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

sendd(){
 this.send.emit("Im emitted by the child one!"); 
}

onClick(){
  this.peopleEvent.emit(this.peoples+" now presented here!");
}
   fire(){
     this.myevent.emit("Hey the message is Im fine!");
   }
}