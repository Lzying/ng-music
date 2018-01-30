import { Component, OnInit } from '@angular/core';
import { TopListService } from '../../../assets/service/toplist.service'

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.scss'],
  providers: [TopListService]
})
export class TopListComponent implements OnInit {

  musicTops: any;

  musicTopLists: any;
  
  constructor(private topListService: TopListService) { }

  ngOnInit() {

    this.musicTopLists = this.topListService.musicTopList();
    this.musicTop(this.musicTopLists[0].id);

  };
  musicTop(id: any) {
    this.topListService.musicTop(id)
      .subscribe(data => {
        this.musicTops = data.playlist;
        console.log(this.musicTops);
      });
  }

}