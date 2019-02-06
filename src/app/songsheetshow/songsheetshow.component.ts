import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../service/search/search.service';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { switchMap, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { AudioService } from '../service/audio/audio.service';
@Component({
  selector: 'app-songsheetshow',
  templateUrl: './songsheetshow.component.html',
  styleUrls: ['./songsheetshow.component.css']
})
export class SongsheetshowComponent implements OnInit ,OnDestroy  {

  subscription: Subscription;
  songs=[];
  playListDetail:{'name':'123'};
  playsong;
  constructor(private searchService:SearchService, private route: ActivatedRoute,  private router: Router,
            private audioService:AudioService) {  }
  ngOnInit() {
    
    this.subscription =this.router.events.pipe(
      filter(event =>event instanceof NavigationEnd)
    ).subscribe(
       ()=>this.searchService.playListDetail(this.route.snapshot.paramMap.get('id')).subscribe(
         res =>{
           this.playListDetail=res['playlist'];
           this.songs=res['playlist']['tracks'];
         }
       )
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
  ngOnDestroy() {
    this.subscription.unsubscribe(); // 不要忘记处理手动订阅

}


}
