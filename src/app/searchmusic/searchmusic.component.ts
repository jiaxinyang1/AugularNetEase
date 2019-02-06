import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search/search.service';
import { AudioService } from '../service/audio/audio.service';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-searchmusic',
  templateUrl: './searchmusic.component.html',
  styleUrls: ['./searchmusic.component.css']
})
export class SearchmusicComponent implements OnInit {

  songs =new Array();
  constructor(private searchService:SearchService,
    private audioService:AudioService,private dataService:DataService) { }
  playsong;
  ngOnInit() {
    this.searchSong();
  }
 


  
  searchSong(){
    this.dataService.changed.subscribe(
      res =>{
        this.searchService.suggest(<string>res).subscribe(
          songs =>{
            console.log(songs);
            
            this.songs=songs['result']['songs'];
          }
        )
      }
    )
  }
  
  play(id){
    this.searchService.detail(id+'').subscribe(
      res =>{
        this.playsong =res['data'][0]['url'];      
        this.audioService.Add({Url: this.playsong, Title: 'sakura'})
        this.audioService.Pause();
      }
    )
  }
}
