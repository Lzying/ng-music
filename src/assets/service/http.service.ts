import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(
        private jsonp: Jsonp  // 跨域需要用到jsonp来获取jsonp文件数据
    ) { }

    // 获取跨域jsonp数据
    getArticle(): any {
        return this.jsonp.get(`http://localhost:3000/comment/music?id=186016&limit=1&callback=JSONP_CALLBACK`)
        // &的前面是地址，后面JSONP_CALLBACK为函数，即为jsonp请求成功时调用JSONP_CALLBACK函数，写法callback=JSONP_CALLBACK
            .map((response: Response) => { return response.json(); }
            , (error) => { console.error(error); })
    }
}