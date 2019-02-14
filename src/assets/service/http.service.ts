import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { config } from '../config/config';

@Injectable()
export class HttpService {
    url = config.api.baseUrl;
    constructor(
        private http: Http,
    ) { }

    // 轮播图数据，比较旧不用,
    bannerLists() {
        return this.http.get(`${this.url}/banner`)
            .map((res) => {
                return res.json();
            });
    }

    // 获取本地的json数据，热门推荐
    personalized(): any {
        return this.http.get(`${this.url}/personalized`)
            .map((res) => {
                return res.json();
            });
    }

    // 新碟上架
    topAlbum(): any {
        return this.http.get(`${this.url}/top/album?offset=0&limit=30`)
            .map((res) => {
                return res.json();
            });
    }

    // 飙升，新歌，原创
    // 音乐云飙升榜
    topList(): any {
        return this.http.get(`${this.url}/top/list?idx=3`)
            .map((res) => {
                return res.json();
            });
    }

    // 音乐云新歌榜
    topNew() {
        return this.http.get(`${this.url}/top/list?idx=0`)
            .map((res) => {
                return res.json();
            });
    }

    // 网易原创歌曲榜
    topOriginal() {
        return this.http.get(`${this.url}/top/list?idx=2`)
            .map((res) => {
                return res.json();
            });
    }

    // 热门歌手
    topArtists() {
        return this.http.get(`${this.url}/top/artists?offset=0&limit=30`)
            .map((res) => {
                return res.json();
            });
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
