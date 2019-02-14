import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { config } from '../config/config';

@Injectable()
export class PlayListService {
    url = config.api.baseUrl;

    constructor(
        private http: Http,
        private httpClient: HttpClient,
    ) { }

    // 歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    total(sonSheet: any, page: any) {
        return this.http.get(`${this.url}/top/playlist?order=${sonSheet}&offset=${(page - 1) * 20}&limit=35`)
            .map((res) => {
                return res.json();
            });
    }

    songSheet() {
        return this.httpClient.get(`${this.url}/top/playlist/?limit=30&order=new`);

    }

}
