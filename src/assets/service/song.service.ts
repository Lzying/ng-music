import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { config } from '../config/config';


@Injectable()
export class SongService {
    url = config.api.baseUrl;

    constructor(
        private http: Http,
        private httpClient: HttpClient,
    ) { }

    // 歌区详情

    song(id: any) {
        return this.httpClient.get(`${this.url}/song/detail?ids=${id}`);
    }

    // 歌曲评论，即每个榜单的评论,页数以1开头
    songCommend(id: any, page: number) {
        return this.httpClient.get(`${this.url}/comment/music?id=${id}&offset=${(page - 1) * 20}&limit=20`);
    }
    // 歌曲评论，即每个榜单的评论,页数以1开头
    songLyric(id: any) {
        return this.httpClient.get(`${this.url}/lyric?id=${id}`);
    }
}
