import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-commend',
  templateUrl: './commend.component.html',
  styleUrls: ['./commend.component.scss']
})
export class CommendComponent {
 @Input('MyCommends') myCommends: any;
}