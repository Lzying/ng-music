import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommendComponent } from './commend.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        CommendComponent
    ],
    declarations: [
        CommendComponent
    ],
    providers: [
    ]
})
export class CommendModule { }
