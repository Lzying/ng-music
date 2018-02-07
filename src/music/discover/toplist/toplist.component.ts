import { Component, OnInit, Input } from '@angular/core';
import { TopListService } from '../../../assets/service/toplist.service';
import { CommendTimeService } from '../../../assets/service/commendTime.service';
import * as moment from 'moment';

@Component({
    selector: 'app-toplist',
    templateUrl: './toplist.component.html',
    styleUrls: ['./toplist.component.scss'],
    providers: [TopListService, CommendTimeService]
})
export class TopListComponent implements OnInit {

    musicTops: any; //榜单音乐列表
    topCommends: any; //评论

    musicTopLists: any; //自定义资源表,云音乐特色榜
    globalTopLists:any; //自定义资源表,全球媒体榜

    constructor(private topListService: TopListService,
        private commendTimeService: CommendTimeService) { }

    ngOnInit() {
        moment.locale('zh-cn'); //时间初始化为中文

        this.musicTopLists = this.topListService.musicTopList();//自定义资源表初始化
        this.globalTopLists = this.topListService.globalTopList();//自定义资源表初始化
        this.musicTop(this.musicTopLists[0].getid);//榜单音乐列表初始化。初始化为飙升榜
        
        
    };

    //榜单
    musicTop(getid: any) {
        this.topListService.musicTop(getid)
            .subscribe(data => {
                this.musicTops = data.playlist;
                this.totalItems = this.musicTops.commentCount;//初始化评论总数，用于分页
                this.pages = Math.ceil(this.musicTops.commentCount / 20);//初始化页数，用于分页
                this.topCommend(this.musicTops.id, 1);//评论初始化，对应的评论内容
            });
    }

    //评论
    topCommend(id: any, page: number) {
        this.topListService.topCommend(id, page)
            .subscribe(data => {
                this.topCommends = data;
                this.topCommends=this.commendTimeService.commendTime(this.topCommends,page);//格式化评论时间，需要输入页码
            });
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
        this.topCommend(this.musicTops.id, event.page);
        console.log(event.page)
    }



}