import { Component } from '@angular/core';
import { TopnewsapiService } from '../service/topnewsapi.service';

@Component({
  selector: 'app-topheadlines',
  standalone: true,
  imports: [],
  templateUrl: './topheadlines.component.html',
  styleUrl: './topheadlines.component.css',
})
export class TopheadlinesComponent {
  constructor(private api: TopnewsapiService) {}

  ngOnInit(): void {
    this.api.tcHeadLines().subscribe((results) => {
      console.log(results);
    });
  }
}
