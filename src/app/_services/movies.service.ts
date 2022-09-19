import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../_models/movie.model';

const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
const queryUrl = '&language=en-US&page=1&include_adult=true&query=';
const movieUrl = 'https://api.themoviedb.org/3/movie/';
const key = 'e13cdab9a221830cad6d9aced7788e74';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(searchUrl+key+queryUrl+'a');
  }

  get(id: any): Observable<Movie>  {
    return this.http.get(`${movieUrl}${id}?api_key=`+key);
  }

  findByName(name: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(searchUrl+key+queryUrl+name);
  }
}
