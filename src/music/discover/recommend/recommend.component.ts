import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../assets/service/http.service';
import { log } from 'util';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  providers: [HttpService]
})
export class RecommendComponent implements OnInit {
  personalized: any;//热门推荐
  constructor(private httpservice: HttpService) { }

  ngOnInit() {
    /**
     *  ajax请求
     */
    // this.httpservice.cla();

    /**
     *  http请求
     */
    this.personalized = this.httpservice.getArticleList();



    console.log(this.personalized);
  }
}