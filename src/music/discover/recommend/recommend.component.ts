import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../assets/service/http.service';

@Component({
    selector: 'app-recommend',
    templateUrl: './recommend.component.html',
    styleUrls: ['./recommend.component.scss'],
    providers: [HttpService]
})
export class RecommendComponent implements OnInit {

    bannerLists: any;// 轮播图数据，比较旧不用,暂时在网易直接找地址来用
    personalizeds: any;//热门推荐
    topAlbums0: any;//新碟上架
    topAlbums1: any;//新碟上架
    topAlbumsOne: any;
    topAlbumsTwo: any;
    topAlbumsThree: any;

    topLists: any;
    topNews: any;
    topOriginas: any;
    topArtists: any;

    constructor(private httpservice: HttpService) { }

    ngOnInit() {
        /**
         *  轮播图
         *  轮播图数据，比较旧不用
         */
        this.httpservice.bannerLists()
            .subscribe((data) => {
                this.bannerLists = data.banners;
            });

        /**
         *  热门推荐
         */
        this.httpservice.personalized()
            .subscribe((data) => {
                this.personalizeds = data.result.slice(0, 8);
                //格式化播放量，大于等于100000修改为 以万为单位
                this.personalizeds.forEach(item => {
                    if (item.playCount >= 100000) {
                        item.playCount = Math.floor(item.playCount / 10000) + "万";
                    }else{
                        item.playCount = Math.floor(item.playCount);//由于有些数据是小数，所以取整
                    }

                });
                console.log(this.personalizeds);
            });


        /**
        *  新碟上架
        */
        this.httpservice.topAlbum()
            .subscribe((data) => {
                this.topAlbumsOne = this.topAlbums0 = data.albums.slice(0, 5);
                this.topAlbumsTwo = this.topAlbums1 = data.albums.slice(5, 10);
            });

        /**
        *  音乐云飙升榜
        */
        this.httpservice.topList()
            .subscribe((data) => {
                this.topLists = data.playlist.tracks.slice(0, 10);
            });
        /**
        *  音乐云新歌榜
        */
        this.httpservice.topNew()
            .subscribe((data) => {
                this.topNews = data.playlist.tracks.slice(0, 10);
            });
        /**
        *  网易原创歌曲榜
        */
        this.httpservice.topOriginal()
            .subscribe((data) => {
                this.topOriginas = data.playlist.tracks.slice(0, 10);
            });

        /**
        *  热门歌手
        */
        this.httpservice.topArtists().subscribe((data) => {
            this.topArtists = data.artists.slice(0, 5);
        });

    }

    topAlbumsClick() {
        this.topAlbumsOne = this.topAlbums0;
        this.topAlbumsTwo = this.topAlbums0;
        this.topAlbumsThree = this.topAlbums0;
    }
}