import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class AlbumService {
    constructor(
        private http: Http,
        private httpClient: HttpClient,
    ) { }

    //歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    album(page:number) {
        return this.httpClient.get(`http://localhost:3000/top/album?offset=${(page-1)*35}&limit=35`)
          
    }


}
