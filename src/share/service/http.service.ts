import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    url = environment.api.baseUrl;
    constructor(
        private httpClient: HttpClient,
    ) { }

    // 轮播图数据，比较旧不用,
    bannerLists(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/banner`);
        // .map((res) => {
        //     return res.json();
        // });
    }

    // 获取本地的json数据，热门推荐
    personalized(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/personalized`);
        // .map((res) => {
        //     return res.json();
        // });
    }

    // 新碟上架
    topAlbum(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/top/album?offset=0&limit=30`);

    }

    // 飙升，新歌，原创
    // 音乐云飙升榜
    topList(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/top/list?idx=3`);

    }

    // 音乐云新歌榜
    topNew(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/top/list?idx=0`);

    }

    // 网易原创歌曲榜
    topOriginal(): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/top/list?idx=2`);

    }

    // 热门歌手
    topArtists() {
        return this.httpClient.get<any>(`${this.url}/top/artists?offset=0&limit=30`);

    }


    // ajax请求，跨域
    cla() {
        $.ajax({
            url: `${this.url}/personalized`,
            // 跨域设置
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
}
