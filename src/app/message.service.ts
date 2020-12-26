import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
mesages:string[]=[];

add(mesage:string){
  this.mesages.push(mesage);
}
clear(){
  this.mesages=[];
}

  constructor() { }
}
