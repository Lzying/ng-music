import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import * as $ from 'jquery';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PlayListService {
    url = environment.api.baseUrl;

    constructor(
        private httpClient: HttpClient,
    ) { }

    // 歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    total(sonSheet: any, page: any): Observable<any> {
        let url = `${this.url}/top/playlist?order=${sonSheet}&offset=${(page - 1) * 20}&limit=35`;
        return this.httpClient.get<any>(url);
        // .map((res) => {
        //     return res.json();
        // });
    }

    songSheet(): Observable<any> {
        let url = `${this.url}/top/playlist/?limit=30&order=new`;
        return this.httpClient.get<any>(url);

    }

}
