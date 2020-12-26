import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {Heroes} from '../mock-heroes';
import { AppData } from '../AppData';
import { Router } from '@angular/router';
import { Datas } from '../Datas';
import {HeroService} from '../hero.service';
import { User } from '../user';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
users:User[];
public mydata:number=12341234;
public emittedsaver:any;
public secretcode=1234;
public datas=new Datas("Jane",1);
public messages=" ";
public people:any;
public mesages="";
public heroes : Hero[];
public myarr:Array<any>=["jane","jade","elena",true,1,2,3];
public selectedHero : Hero;
public whatpeople=" ";
public deptid:number;
   constructor(private heroService: HeroService,private router:Router) { }
  ngOnInit(): void {
    this.getHeroes();
    console.log("Oninit!");
    this.heroService.getusers().subscribe(users =>{
      this.users=users;
    })
  }
  onSelect(hero:Hero):void{
   this.selectedHero = hero;
   this.deptid=hero.id;
  //  console.log(this.deptid);
   this.router.navigate(['/detail',this.deptid]);
   console.log("Heroes Routed to: "+this.deptid);
  }
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
  onClick(element:any):void{
    this.people=element;
  }
  data=new AppData('');
  onpeoplechange(val:any){
  }
}