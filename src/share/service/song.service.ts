import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class SongService {
    url = environment.api.baseUrl;

    constructor(
        private httpClient: HttpClient,
    ) { }

    // 歌区详情

    song(id: any): Observable<any> {
        let url = `${this.url}/song/detail?ids=${id}`;
        return this.httpClient.get<any>(url);
    }

    // 歌曲评论，即每个榜单的评论,页数以1开头
    songCommend(id: any, page: number): Observable<any> {
        let url = `${this.url}/comment/music?id=${id}&offset=${(page - 1) * 20}&limit=20`;

        return this.httpClient.get<any>(url);
    }
    // 歌曲评论，即每个榜单的评论,页数以1开头
    songLyric(id: any): Observable<any> {
        let url = `${this.url}/lyric?id=${id}`;

        return this.httpClient.get<any>(url);
    }
}
