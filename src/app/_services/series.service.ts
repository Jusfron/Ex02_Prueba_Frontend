import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../_models/serie.model';

const searchUrl = 'https://api.themoviedb.org/3/search/tv?api_key='
const queryUrl = '&language=en-US&page=1&include_adult=true&query=';
const tvUrl = 'https://api.themoviedb.org/3/tv/';
const key = 'e13cdab9a221830cad6d9aced7788e74';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Serie[]> {
    return this.http.get<Serie[]>(searchUrl+key+queryUrl+'a');
  }

  get(id: any): Observable<Serie>  {
    return this.http.get(`${tvUrl}${id}?api_key=`+key);
  }

  findByName(name: any): Observable<Serie[]> {
    return this.http.get<Serie[]>(searchUrl+key+queryUrl+name);
  }
}
