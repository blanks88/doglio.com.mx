import {Component, OnInit, Input} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {BlogModel} from '../../models/blog.model';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
    @Input() postNum;
    public posts: BlogModel[];

    constructor(private getData: GetDataService) {

        this.getData.getBlogs().subscribe(resp => {
            this.posts = resp;
        });
    }

    ngOnInit() {
    }

}
