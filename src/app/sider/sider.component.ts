import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search/search.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.getPlayLists()
  }

  userId;
  //我创建的歌单
  mySongList=[];
  //其他歌单
  otherSongList=[];


  //获取所有歌单信息
  getPlayLists(){
    this.userId='77113061'

    this.searchService.getPlayLists(this.userId).subscribe(
      res =>{
        res['playlist'].forEach(item => {

          console.log(item);
          
          // 分割开我创建的歌单和收藏的歌单
          if(item['userId']+''===this.userId){
            this.mySongList.push(item)
          }
          else{
            this.otherSongList.push(item);
          }
        });
        
      }
    )

  }

}
