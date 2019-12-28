import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class SongService {
    url = environment.api.baseUrl;

    constructor(
        private httpClient: HttpClient,
    ) { }

    // 歌区详情

    song(id: any) {
        let url = `${this.url}/song/detail?ids=${id}`;
        return this.httpClient.get(url);
    }

    // 歌曲评论，即每个榜单的评论,页数以1开头
    songCommend(id: any, page: number) {
        let url = `${this.url}/comment/music?id=${id}&offset=${(page - 1) * 20}&limit=20`;

        return this.httpClient.get(url);
    }
    // 歌曲评论，即每个榜单的评论,页数以1开头
    songLyric(id: any) {
        let url = `${this.url}/lyric?id=${id}`;

        return this.httpClient.get(url);
    }
}
