import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnewsapiService } from './service/topnewsapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TopnewsapiService],
})
export class AppComponent {
  title = 'NewsApi';

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
