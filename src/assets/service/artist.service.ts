import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class ArtistService {
    constructor(
        private http: Http,
        private httpClient: HttpClient,
    ) { }

    //歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    artist() {
        return this.httpClient.get(`http://localhost:3000/top/artists?offset=0&limit=100`)
          
    }

    songSheet() {
        return this.httpClient.get(`http://localhost:3000/top/playlist/?limit=30&order=new`)

    }

}
