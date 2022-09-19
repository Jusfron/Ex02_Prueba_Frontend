import { Component, OnInit } from '@angular/core';
import { Serie } from '../_models/serie.model';
import { SeriesService } from '../_services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }

  series: any;
  search = '';

  ngOnInit(): void {
    this.listSeries();
  }

  listSeries() {
    this.seriesService.getAll()
      .subscribe(
        result => {
          this.series = result;
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
    this.seriesService.findByName(inputValue)
      .subscribe (
      results => {
        this.series = results;
        console.log("Results: ");
        console.log(results);
      }, 
      error => {
        console.log("Error: ");
        console.log(error);
      });
  }

}
