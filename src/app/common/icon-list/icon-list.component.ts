import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-icon-list',
    templateUrl: './icon-list.component.html',
    styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
    @Input() icons;
    @Input() size;

    constructor() {
    }

    ngOnInit() {
    }

}
