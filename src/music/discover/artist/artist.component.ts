import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../../assets/service/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [ArtistService]
})
export class ArtistComponent implements OnInit {
  artists:any;
  constructor(private artistService: ArtistService) { }
  ngOnInit() {
    this.artistService.artist().subscribe(data=>{
      this.artists=data["artists"].slice(0, 10);
      console.log(data);
    })
  }
}