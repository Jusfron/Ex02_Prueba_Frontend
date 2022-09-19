import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../_services/series.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  serie: any;
  id: any;
  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute) { 
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")||"[]" );
   }

  ngOnInit(): void {
    this.getSerie();
  }

  getSerie() {
    this.seriesService.get(this.id)
    .subscribe(
      data => {
        this.serie = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
