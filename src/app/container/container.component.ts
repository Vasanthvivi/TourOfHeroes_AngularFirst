import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
@Input() idval:any;
@Input() idname:any;
@Output() public updatevalues:any;
  constructor() { }

  ngOnInit(): void {
  }
  

}
