import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Heroes} from './mock-heroes';
import {Hero} from './hero';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

userurl:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
 
getusers():Observable<User[]>{
     return this.http.get<User[]>(this.userurl);
}
getHero(id: number): Observable<Hero | undefined> {
    
    return of(Heroes.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
  return of(Heroes);
}
}
