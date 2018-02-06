import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../assets/service/album.service';
import * as moment from 'moment';

@Component({
    selector: 'app_album',
    templateUrl: './album_.component.html',
    styleUrls: ['./album_.component.scss'],
    providers: [AlbumService]
})
export class Album_Component implements OnInit {
    open = false;
    openClose: boolean;
    thisAlbums: any;
    album: any;
    albumTexts: any;

    constructor(private albumService: AlbumService) { }

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
     * 把文本解析出段落
     * @param text 输入文本
     */
    text(text: any): any {
        let thisText = text.split("\n");
        return thisText;
    }

}