import { Component, OnInit } from '@angular/core';
import { PlayListService } from '../../../assets/service/playlist.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
    providers: [PlayListService]
})
export class PlayListComponent implements OnInit {
    playListServices: any;
    sonSheet: any;//歌单，hot或者name
    selected: any = "hot"; //用于页面样式，判断当前所处歌单是hot还是new
    constructor(private playListService: PlayListService) { }


    ngOnInit() {
        this.total("hot", 1);
    }

    /**
     * 
     * @param sonSheet 最新或者热门；最新：new，热门：hot
     * @param page 页码
     */
    total(sonSheet: any, page: any) {
        this.playListService.total(sonSheet, page)
            .subscribe(data => {
                this.playListServices = data.playlists;
                this.totalItems = data.total;
                this.pages = Math.ceil(data.total / 35);//初始化页数，用于分页,向上取整
                this.sonSheet = sonSheet;
                //格式化播放量，大于等于100000修改为 以万为单位
                this.playListServices.forEach(item => {
                    if (item.playCount >= 100000) {
                        item.playCount = Math.floor(item.playCount / 10000) + "万";
                    } else {
                        item.playCount = Math.floor(item.playCount);//由于有些数据是小数，所以取整
                    }
                });
                // console.log(sonSheet);
                // console.log(data);
                // console.log(this.playListServices);
            })
    }


    /**
      * 分页部分代码
      */
    //分页
    currentPage = 1;
    maxSize = 5;
    itemsPerPage = 35;
    totalItems: any;
    pages: any;

    pageChanged(event: any): void {
        this.total(this.sonSheet, event.page);
        console.log(event.page)
    }

}