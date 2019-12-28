import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { environment } from '../../environments/environment';
@Injectable()
export class ArtistService {
    url = environment.api.baseUrl;
    constructor(
        private httpClient: HttpClient,
    ) { }

    // 歌单 api中的歌单 ( 网友精选碟 )，sonSheet可选为hot 和 new
    artist() {
        return this.httpClient.get(`${this.url}/top/artists?offset=0&limit=100`);
    }

    songSheet() {
        return this.httpClient.get(`${this.url}/artists?id=6452`);

    }

}
