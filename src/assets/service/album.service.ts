import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AlbumService {
    constructor(
        private http: Http,
        private httpClient: HttpClient,
    ) { }

    //歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    album(page: number) {
        return this.httpClient.get(`http://localhost:3000/top/album?offset=${(page - 1) * 35}&limit=35`)

    }

    thisAlbum(id: any) {
        return this.httpClient.get(`http://localhost:3000/album?id=${id}`)
    }

    //歌单评论，即每个榜单的评论,页数以1开头
    albumCommend(id: any, page: number) {
        return this.httpClient.get(`http://localhost:3000/comment/album?id=${id}&offset=${(page - 1) * 20}&limit=20`)
    }
}
