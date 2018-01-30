import { Component, OnInit } from '@angular/core';
import { LocalService } from '../assets/service/local.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  providers: [LocalService]
})
export class MusicComponent implements OnInit {
  loginList = false;
  localTitles: any;
  constructor(private localService: LocalService) { }
  ngOnInit() {
    this.localTitles = this.localService.localTitle();
  }
}