import { Component, OnInit } from '@angular/core';
import { AudioService } from '../service/audio/audio.service';
import { SearchService } from '../service/search/search.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  playState = 'play-circle';
  constructor(private audioService: AudioService,
    private searchService: SearchService) { }

  ngOnInit() {
  }


  // 更改播放暂停图标
  changePlayState( ) {
    if (this.playState === 'play-circle') {
      this.audioService.Play();
      this.playState = 'pause-circle';
    } else if (this.playState === 'pause-circle') {
      this.audioService.Pause();
      this.playState = 'play-circle';
    }

  }
  next(){
    this.audioService.Next();
  }
 
}
