import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../assets/service/http.service';

@Component({
    selector: 'app-recommend',
    templateUrl: './recommend.component.html',
    styleUrls: ['./recommend.component.scss'],
    providers: [HttpService]
})
export class RecommendComponent implements OnInit {

    personalizeds: any;//热门推荐
    topAlbums0: any;//新碟上架
    topAlbums1: any;//新碟上架
    topAlbumsOne: any;
    topAlbumsTwo: any;
    topAlbumsThree: any;

    topLists: any;
    topNews: any;
    topOriginas: any;

    constructor(private httpservice: HttpService) { }

    ngOnInit() {
        /**
         *  获取数据
         */
        this.httpservice.personalized()
            .subscribe((data) => {
                this.personalizeds = data.result.slice(0, 8);

            });

        this.httpservice.topAlbum()
            .subscribe((data) => {
                this.topAlbumsOne = this.topAlbums0 = data.albums.slice(0, 5);
                this.topAlbumsTwo = this.topAlbums1 = data.albums.slice(5, 10);
            });

        this.httpservice.topList()
            .subscribe((data) => {
                this.topLists = data.playlist.tracks.slice(0, 10);
                console.log(this.topLists);
            });

        this.httpservice.topNew()
            .subscribe((data) => {
                this.topNews = data.playlist.tracks.slice(0, 10);
                console.log(this.topNews);
            });

        this.httpservice.topNew()
            .subscribe((data) => {
                this.topOriginas = data.playlist.tracks.slice(0, 10);
                console.log(this.topOriginas);
            });


    }

    topAlbumsClick() {
        this.topAlbumsOne = this.topAlbums0;
        this.topAlbumsTwo = this.topAlbums0;
        this.topAlbumsThree = this.topAlbums0;
    }
}