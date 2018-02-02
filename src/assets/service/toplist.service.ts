import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class TopListService {
    constructor(
        private http: Http,
    ) { }

    // 列表内容暂时无法通过api获取到
    musicTopList() {
        let musicTopList = [
            { name: "云音乐飙升榜", getid: 3, time: "每天更新", ImgUrl: "http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" },
            { name: "云音乐新歌榜", getid: 0, time: "每天更新", ImgUrl: "http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" },
            { name: "网易原创歌曲榜", getid: 2, time: "每周四更新", ImgUrl: "http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" },
            { name: "云音乐热歌榜", getid: 1, time: "每周四更新", ImgUrl: "http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" },
        ];
        return musicTopList;
    }

    globalTopList() {
        let globalTopList = [
            { name: "云音乐电音榜", getid: 4, time: "每周五更新", ImgUrl: "http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40" },
            { name: "云音乐嘻哈榜", getid: 23, time: "每周五更新", ImgUrl: "http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40" },
            { name: "UK排行榜周榜", getid: 5, time: "每周三更新", ImgUrl: "http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=40y40" },
            { name: "KTV嗨榜", getid: 7, time: "每周五更新", ImgUrl: "http://p1.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=40y40" },
            { name: "中国TOP排行榜(港台榜)", getid: 14, time: "每周五更新", ImgUrl: "http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40" },
            { name: "中国TOP排行榜(内地榜)", getid: 15, time: "每周五更新", ImgUrl: "http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40" },
            { name: "香港电台中文歌曲龙虎榜", getid: 16, time: "每周三更新", ImgUrl: "http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40" },
            { name: "华语金曲榜", getid: 17, time: "每周五更新", ImgUrl: "http://p1.music.126.net/N2whh2Prf0l8QHmCpShrcQ==/19140298416347251.jpg" },
            { name: "中国嘻哈榜", getid: 18, time: "每周五更新", ImgUrl: "http://p1.music.126.net/_nwkQTFtOdAjFvOI8Wg7Tg==/18922595114302109.jpg" },
            { name: "美国Billboard周榜", getid: 6, time: "每周五更新", ImgUrl: "http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg" },
            { name: "iTunes榜", getid: 8, time: "每周三更新", ImgUrl: "http://p1.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg" },

            { name: "Hit FM Top榜", getid: 9, time: "每周五更新", ImgUrl: "http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg" },
            { name: "日本Oricon周榜", getid: 10, time: "每周五更新", ImgUrl: "http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg" },
            { name: "韩国Melon排行榜周榜", getid: 11, time: "每周三更新", ImgUrl: "http://p1.music.126.net/9YSGHPRdVazKSiNGl3uwpg==/5920870115713082.jpg" },
            { name: "韩国Mnet排行榜周榜", getid: 12, time: "每周五更新", ImgUrl: "http://p1.music.126.net/tSl2BF3dZi4cLMD70_fYLw==/5739450697092147.jpg" },
            { name: "法国 NRJ EuroHot 30周榜", getid: 19, time: "每周五更新", ImgUrl: "http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40" },
            { name: "Beatport全球电子舞曲榜", getid: 21, time: "每周五更新", ImgUrl: "http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg" },
            { name: "云音乐ACG音乐榜", getid: 22, time: "每周三更新", ImgUrl: "http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg" },
            { name: "台湾Hito排行榜", getid: 20, time: "每周五更新", ImgUrl: "http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg" },
        ];
        return globalTopList;
    }




    //音乐飙升榜,
    musicTop(getid: any) {
        return this.http.get(`http://localhost:3000/top/list?idx=${getid}`)
            .map((res) => {
                return res.json();
            })
    }

    //歌单评论，即每个榜单的评论,页数以1开头
    topCommend(id: any, page: number) {
        return this.http.get(`http://localhost:3000/comment/playlist?id=${id}&offset=${(page - 1) * 20}&limit=20`)
            .map((res) => {
                return res.json();
            })
    }



}