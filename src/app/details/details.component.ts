import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable, of} from 'rxjs';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import {Heroes} from '../mock-heroes';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public id:any;
public nid:any;
public hd:number | null;
public hero:any;
public heroes:typeof Heroes;
  constructor(private router:ActivatedRoute, private route:Router, private heroService:HeroService,private location:Location) { }
  ngOnInit(): void {
 this.router.paramMap.subscribe((params: ParamMap) => {
    this.id=params.get('id');
   console.log(this.id);
   this.getHero();
  
  });
  }
  back(): void {
    this.location.back();
  }
  goback(){
     this.nid=--this.id;
    //this.id=+this.router.snapshot.paramMap.get('id');
    this.route.navigate(['/detail',this.nid]);
  }
  gonext(){
       this.nid=++this.id;
   // this.id=+this.router.snapshot.paramMap.get('id');
    this.route.navigate(['/detail',this.nid]);
  }
 

 getHero(): void {
     this.hd = parseInt(this.router.snapshot.paramMap.get("id"));
    this.heroService.getHero(this.hd)
      .subscribe(hero => this.hero = hero);
  }
}
