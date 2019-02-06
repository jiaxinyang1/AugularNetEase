import { Component } from '@angular/core';
import { SearchService } from './service/search/search.service';
import { DataService } from './service/data/data.service';
import { of, Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mymusic';

  constructor(private searchService:SearchService,private dataService:DataService){

  }
  songName;

  searchSong(){ 
    this.dataService.changed.next(this.songName);
  }
}
