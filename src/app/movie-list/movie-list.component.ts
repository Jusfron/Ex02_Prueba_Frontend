import { Component, OnInit } from '@angular/core';
import { Movie } from '../_models/movie.model';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any;
  search = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.listMovies();
  }

  listMovies () {
    this.moviesService.getAll()
      .subscribe(
        result => {
          this.movies = result;
          console.log("Result: ");
          console.log(result);
        },
        error => {
          console.log("Error: ");
          console.log(error);
        });
  }

  searchName(): void {
    var inputValue = (<HTMLInputElement>document.getElementById("search-input")).value;
    this.moviesService.findByName(inputValue)
      .subscribe (
      results => {
        this.movies = results;
        console.log("Results: ");
        console.log(results);
      }, 
      error => {
        console.log("Error: ");
        console.log(error);
      });
  }

}
