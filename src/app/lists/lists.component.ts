import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  public id:number;
  constructor(private heroService:HeroService,private route:ActivatedRoute) { }

  public lists:Hero[]=this.heroService.getHeroes();
  ngOnInit(): void {
     
  }
}
