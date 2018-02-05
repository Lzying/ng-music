import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../assets/service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  title = 'app';
  albums:any;
  hotAlbums:any;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.album(1);
    this.hotAlbum();
  }

  album(page:number) {
    this.albumService.album(page).subscribe(data => {
      this.albums=data["albums"];
      this.totalItems=data["total"];
      this.pages = Math.ceil(data["total"] / 35);//初始化页数，用于分页,向上取整
      console.log(data);
    })
  }

  hotAlbum() {
    this.albumService.album(1).subscribe(data => {
      this.hotAlbums = data["albums"].slice(0, 10);
      console.log(this.hotAlbums);
    })
  }

   /**
      * 分页部分代码
      */
    //分页
    currentPage = 1;
    maxSize = 5;
    itemsPerPage = 35;
    totalItems: any;
    pages: any;

    pageChanged(event: any): void {
        this.album(event.page);
        console.log(event.page)
    }

}