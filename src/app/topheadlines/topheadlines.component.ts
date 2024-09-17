import { Component } from '@angular/core';
import { TopnewsapiService } from '../service/topnewsapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topheadlines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topheadlines.component.html',
  styleUrl: './topheadlines.component.css',
})
export class TopheadlinesComponent {
  constructor(private api: TopnewsapiService) {}

  topHeadlinesData: any = [];

  ngOnInit(): void {
    this.api.tcHeadLines().subscribe((results) => {
      this.topHeadlinesData = results.articles;
      console.log(this.topHeadlinesData);
    });
  }
}
