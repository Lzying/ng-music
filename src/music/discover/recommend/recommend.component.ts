import { Component,OnInit } from '@angular/core';
import { HttpService } from '../../../assets/service/http.service';
import { log } from 'util';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  providers: [HttpService]
})
export class RecommendComponent implements OnInit{
  http:any;
  constructor(private httpservice: HttpService) { }

  ngOnInit() {
      this.httpservice.getArticle()
          .subscribe(data => this.http = data);
      console.log(this.http);
  }
}