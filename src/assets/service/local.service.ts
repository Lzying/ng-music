import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

    localTitle() {
        let musicTopList = [
            { name: "推荐", route: "/music/discover/recommend" },
            { name: "排行榜", route: "/music/discover/toplist" },
            { name: "歌单", route: "/music/discover/playlist" },
            { name: "主播电台", route: "/music/discover/toplist" },
            { name: "歌手", route: "/music/discover/artist" },
            { name: "新碟上架", route: "/music/discover/album" },
        ];
        return musicTopList;
    }
}