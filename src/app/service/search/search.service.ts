import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parseCookieValue } from '@angular/common/src/cookie';
import * as CryptoJS from 'crypto-js'
import * as BigInteger from 'number-crunch'
import { DataService } from '../data/data.service';
@Injectable({
  providedIn: 'root'
})
/**
 * 这个服务用来通过 访问服务器来获取歌曲
 */
export class SearchService {

  constructor(private http: HttpClient) { }
  private songDetail ='apidata/music/detail'
  private songSuggest ='apidata/music/suggest'
  private songPlayListDeatil='apidata/music/playListDetail'
  private songPlayLists= 'apidata/music/allPlayList'
 

  //获取歌曲url 
  public detail(id :string):Observable<any>{
    var text = 
    {
       'csrf_token':null,
       'ids':new Array<string>(id),
       'br':320000
    };
    var x =this.EncryptRequest(JSON.stringify(text));
    const data ={
      "params":x
    }
    return this.http.post(this.songDetail,data);
  }

  // 建议搜索方式
  public suggest(name:string):Observable<any>{
    var text ={
      'csrf_token':null,
      'hlposttag':'</span>',
      'hlpretag':'<span class="s-fc7">',
      'limit':'30',
      'offset':'0',
      's':name,
      'total':'true',
      'type':'1'
    }
    var x =this.EncryptRequest(JSON.stringify(text))
    const data={
      "params":x
    }
    return this.http.post(this.songSuggest,data);

  }
  // 获取歌单详细信息
  public playListDetail(id:String):Observable<any>{
    var text={
      'csrf_token': "2ddf80cd13670b89cb70f7e6c88d16d2",
      'id': id,
      'limit': "1000",
      'n': "1000",
      'offset': "0",
      'total': "true"
    }
    var x= this.EncryptRequest(JSON.stringify(text))
    console.log(x);
    
    const data ={
      'params':x
    }
    return this.http.post(this.songPlayListDeatil,data);
  }


  //获取所有歌单
  public getPlayLists(id:string):Observable<any>{
    var text ={
      'csrf_token': null,
      'limit': "1001",
      'offset': "0",
      'uid':id
    }
    var x= this.EncryptRequest(JSON.stringify(text))
    console.log(x);
    
    const data ={
      'params':x
    }
    return this.http.post(this.songPlayLists,data);
  }

  // aes 加密参数
  public  EncryptRequest( jsonStr:string):string{
    var secKey = CryptoJS.enc.Utf8.parse("be88887d941ea4b7");
    var nonce = CryptoJS.enc.Utf8.parse("0CoJUm6Qyw8W8jud");
    var encText = this.AesEncrypt(this.AesEncrypt(jsonStr, nonce), secKey);
    encText = encText.replace(/\+/g,"%2B");
    return encText;
  }
  private AesEncrypt(text:string,key:string):string{
    let srcs = CryptoJS.enc.Utf8.parse(text);
    const iv = CryptoJS.enc.Utf8.parse('0102030405060708'); 
    var encryptedData = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    
    return encryptedData.toString();
  }
 

}
