import { Injectable } from '@angular/core';
import {Http, Response, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class HttpService {
    constructor(
        private http: Http, 
        private jsonp: Jsonp  // 跨域需要用到jsonp来获取jsonp文件数据
    ) { }

        //获取本地的json数据
        getArticleList(): any {
            return this.http.get(`http://localhost:3000/personalized`);
        }

    // 获取跨域jsonp数据,出现错误
    // getArticle(): any {
    //     return this.jsonp.get(`http://localhost:3000/comment/music?id=186016&limit=1&callback=JSONP_CALLBACK`)
    //     // &的前面是地址，后面JSONP_CALLBACK为函数，即为jsonp请求成功时调用JSONP_CALLBACK函数，写法callback=JSONP_CALLBACK
    //         .map((response: Response) => { return response.json(); }
    //         , (error) => { console.error(error); })
    // }



//ajax请求，跨域
cla(){
    $.ajax({
        url: "http://localhost:3000/comment/music?id=186016&limit=1&callback=JSONP_CALLBACK",
        //跨域设置
        xhrFields: {
          withCredentials: true
        },
        success: function (data) {
          console.log(data)
        },
        error: function (err) {
          console.log(err)
        }
      })
}
}