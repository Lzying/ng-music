import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../assets/service/album.service';
import { CommendTimeService } from '../../../assets/service/commendTime.service';
import * as moment from 'moment';

@Component({
    selector: 'app_album_',
    templateUrl: './album_.component.html',
    styleUrls: ['./album_.component.scss'],
    providers: [AlbumService, CommendTimeService]
})
export class Album_Component implements OnInit {
    open = false;
    openClose: boolean;
    thisAlbums: any;//全部
    album: any;//专辑
    albumTexts: any;//简介
    songs: any;//歌单
    albumCommends: any;//评论

    constructor(
        private albumService: AlbumService,
        private commendTimeService: CommendTimeService
    ) { }

    ngOnInit() {
        this.getHref();
    }

    /**
     * 获取数据
     * @param id 输入id
     */
    thisAlbum(id: any) {
        this.albumService.thisAlbum(id).subscribe(data => {
            this.thisAlbums = data;
            this.album = data["album"];
            this.songs = data["songs"];
            this.albumCommend(this.album.id, 1);
            this.album.publishTime = moment(this.album.publishTime).format('YYYY-MM-DD');//格式化专辑出版时间
            this.albumTexts = this.text(this.album.description);//格式化专辑说明
            this.openClose = (this.albumTexts.length >= 6);//判断专辑说明是否大于六行，大于六行隐藏展开按钮
            console.log(data);
        })
    }

    /**
     * 读取地址栏，获取其中的id号，赋值给thisId
     */
    getHref() {
        let href = window.location.href;
        let thisId = href.split("id=")[1];
        console.log(thisId);
        this.thisAlbum(thisId);
    }

    /**
    * 获取评论
    */
    albumCommend(id: any, page: number) {
        this.albumService.albumCommend(id, page).subscribe(data => {
            this.albumCommends = data;
            this.totalItems = data["total"];
            this.pages = Math.ceil(this.totalItems / 20);
            this.albumCommends=this.commendTimeService.commendTime(this.albumCommends,page);//格式化评论时间，需要输入页码
            console.log(data);
        })
    }

    /**
     * 把文本解析出段落
     * @param text 输入文本
     */
    text(text: any): any {
        let thisText = text.split("\n");
        return thisText;
    }


    /**
     * 分页部分代码
     */
    //分页
    currentPage = 1;
    maxSize = 5;
    itemsPerPage = 20;
    totalItems: any;
    pages: any;
    pageChanged(event: any): void {
        this.albumCommend(this.album.id, event.page);
        console.log(event.page)
    }

}