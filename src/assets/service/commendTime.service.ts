import { Injectable } from '@angular/core';
import * as moment from 'moment';


/**另起格式化时间服务，增加代码的复用性
 * 
 * 初始化精彩评论的时间
 * 需要输入页码page，主要用于区分是否存在精彩评论，只有第一页有精彩评论
*/
@Injectable()
export class CommendTimeService {
    commendTime(commend: any, page: any): any {

        moment.locale('zh-cn'); //时间初始化为中文
        /**初始化精彩评论的时间
          * 只有第一页有精彩评论
          * 当天显示 时：分
          * 否则显示日期 月：日：时：分
          */
        if (page == 1) {
            commend.hotComments.forEach(item => {
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
         * moment()不输入时间为当地时间
         */
        commend.comments.forEach(item => {
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
        });

        return commend;
    }
}