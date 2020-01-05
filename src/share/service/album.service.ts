import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService {
    url = environment.api.baseUrl;
    constructor(
        private httpClient: HttpClient,
    ) { }

    // 歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    album(page: number): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/top/album?offset=${(page - 1) * 35}&limit=35`);

    }

    thisAlbum(id: any): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/album?id=${id}`);
    }

    // 歌单评论，即每个榜单的评论,页数以1开头
    albumCommend(id: any, page: number): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/comment/album?id=${id}&offset=${(page - 1) * 20}&limit=20`);
    }
}
