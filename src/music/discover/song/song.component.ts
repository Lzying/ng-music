import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../assets/service/song.service';
import { CommendTimeService } from '../../../assets/service/commendTime.service';
import * as moment from 'moment';

@Component({
    selector: 'app_song',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.scss'],
    providers: [SongService, CommendTimeService]
})
export class SongComponent implements OnInit {
    open = false;
    openClose: boolean;
    thisSong:any;
    songs: any;//全部
    songsCommends: any;//评论

    constructor(
        private SongService: SongService,
        private commendTimeService: CommendTimeService
    ) { }

    ngOnInit() {
        this.getHref();
    }

    /**
     * 获取数据
     * @param id 输入id
     */
    song(id: any) {
        this.SongService.song(id).subscribe(data => {
            this.thisSong = data;
            this.songs = data["songs"][0];
            console.log(data);
            console.log(this.songs);
        })
    }

    /**
     * 读取地址栏，获取其中的id号，赋值给thisId
     */
    getHref() {
        let href = window.location.href;
        let thisId = href.split("id=")[1];
        console.log(thisId);
        this.song(thisId);
    }

    /**
    * 获取评论
    */
    songCommend(id: any, page: number) {
        this.SongService.songCommend(id, page).subscribe(data => {
            this.songsCommends = data;
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
    // currentPage = 1;
    // maxSize = 5;
    // itemsPerPage = 20;
    // totalItems: any;
    // pages: any;
    // pageChanged(event: any): void {
    //     this.songCommend(this.songs.id, event.page);
    //     console.log(event.page)
    // }

}