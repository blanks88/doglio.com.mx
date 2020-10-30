import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-project-preview',
    templateUrl: './project-preview.component.html',
    styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {

    @Input() project;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToProject(projectId) {
        this.router.navigate(['/project', projectId]);
    }
}
