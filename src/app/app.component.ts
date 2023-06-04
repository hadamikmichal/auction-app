import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  id = 1393;
  config: any;

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.getMediaFile(this.id).subscribe((data) => {
      this.config = data;
    });
  }
}
