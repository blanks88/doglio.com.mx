import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from '../models/project.model';
import { GetDataService } from '../services/get-data.service';

@Component({
    selector: 'app-projects',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
    projectId: number;
    project: ProjectModel;

    constructor(private getData: GetDataService, private router: Router, private title: Title) {
        title.setTitle('Doglio - From dirt to Kings');
    }

    ngOnInit() {
        this.projectId = +this.router.url.split('/').slice(-1)[0];
        this.getData.getProjectById(this.projectId).subscribe((p) => {
            console.log('Function: : ', p);

            this.project = p;
        });
    }
}
