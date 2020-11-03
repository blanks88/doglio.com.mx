import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { GetDataService } from '../services/get-data.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    public projects: ProjectModel[];

    constructor(private getData: GetDataService, private title: Title) {
        title.setTitle('Doglio - Projects');
        this.getData.getProjects().subscribe((projects) => {
            this.projects = projects;
        });
    }

    ngOnInit() {}
}
