import { Component, OnInit, Input } from '@angular/core';
import { TopListService } from '../../../assets/service/toplist.service';
import * as moment from 'moment';

@Component({
    selector: 'app-toplist',
    templateUrl: './toplist.component.html',
    styleUrls: ['./toplist.component.scss'],
    providers: [TopListService]
})
export class TopListComponent implements OnInit {

    musicTops: any; //榜单音乐列表
    topCommends: any; //评论

    musicTopLists: any; //自定义资源表

    constructor(private topListService: TopListService) { }

    ngOnInit() {
        moment.locale('zh-cn'); //时间初始化为中文

        this.musicTopLists = this.topListService.musicTopList();//自定义资源表初始化
        this.musicTop(this.musicTopLists[0].getid);//榜单音乐列表初始化
        this.topCommend(this.musicTopLists[0].id, 1);//评论初始化
    };

    //榜单
    musicTop(getid: any) {
        this.topListService.musicTop(getid)
            .subscribe(data => {
                this.musicTops = data.playlist;
                console.log(data);
                this.totalItems = this.musicTops.commentCount;//初始化评论总数
                this.pages = Math.ceil(this.musicTops.commentCount / 20)
            });

    }

    //评论
    topCommend(id: any, page: number) {
        this.topListService.topCommend(id, page)
            .subscribe(data => {
                this.topCommends = data;

                /**初始化精彩评论的时间
                 * 只有第一页有精彩评论
                 * 当天显示 时：分
                 * 否则显示日期 月：日：时：分
                 */
                if (page == 1) {
                    this.topCommends.hotComments.forEach(item => {
                        if (moment(item.time).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')) {
                            item.time = moment(item.time).format('HH:mm')
                        } else {
                            item.time = moment(item.time).format('MMM Do HH:mm')
                        }
                    })
                }

                /**初始化最新评论的时间
                 * 一小时内显示 多少分钟前
                 * 如果今天显示 时分
                 * 如果今年显示 月日时分
                 * 否则显示年月日
                 */
                this.topCommends.comments.forEach(item => {
                    if (moment(item.time).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')) {
                        if (moment(item.time).format('YYYYMMDD HH:mm:ss') >= moment().subtract(1, 'hours').format('YYYYMMDD HH:mm:ss')) {
                            item.time = moment(item.time).fromNow();
                        } else {
                            item.time = moment(item.time).format('HH:mm');
                        }
                    } else if (moment(item.time).format('YYYY') == moment().format('YYYY')) {
                        item.time = moment(item.time).format('MMM Do HH:mm');
                    } else {
                        item.time = moment(item.time).format('LL');
                    }
                    // item.time = moment(item.time).fromNow();距离现在多长
                })
                console.log(this.topCommends)
            });
    }


    /**
     * 分页部分代码
     */
    //分页
    currentPage = 1;
    maxSize = 7;
    itemsPerPage = 20;
    totalItems: any;
    pages: any;
    pageChanged(event: any): void {
        this.topCommend(19723756, event.page);
        console.log(event.page)
    }



}