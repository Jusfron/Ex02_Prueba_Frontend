import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Movie } from '../_models/movie.model';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  id: any;
  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")||"[]" );
   }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.moviesService.get(this.id)
    .subscribe(
      data => {
        this.movie = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
