import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  

  constructor(private userservice:HeroService){
       
  }
  
}
