import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class TopListService {
    constructor(
        private http: Http,
    ) { }

    musicTopList() {
        let musicTopList = [
            { name: "云音乐飙升榜", id:19723756,getid: 3, time: "每天更新", ImgUrl: "http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" },
            { name: "云音乐新歌榜", id:3779629,getid: 0, time: "每天更新", ImgUrl: "http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" },
            { name: "网易原创歌曲榜", id:2884035,getid: 2, time: "每周四更新", ImgUrl: "http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" },
            { name: "云音乐热歌榜", id:3778678,getid: 1, time: "每周四更新", ImgUrl: "http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" },
        ];
        return musicTopList;
    }




    //音乐飙升榜,
    musicTop( getid:any) {
        return this.http.get(`http://localhost:3000/top/list?idx=${getid}`)
            .map((res) => {
                return res.json();
            })
    }

    //歌单评论，即每个榜单的评论,页数以1开头
    topCommend(id:any,page:number) {
        return this.http.get(`http://localhost:3000/comment/playlist?id=${id}&offset=${(page-1)*20}&limit=20`)
            .map((res) => {
                return res.json();
            })
    }



}