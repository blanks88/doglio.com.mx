import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogModel} from '../models/blog.model';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/internal/operators';
import {ProjectModel} from '../models/project.model';
import {TestimonialModel} from '../models/testimonial.model';
import {PeopleModel} from '../models/people.model';

@Injectable({
    providedIn: 'root'
})
export class GetDataService {

    constructor(private http: HttpClient) {
    }

    getBlogs(): Observable<BlogModel[]> {
        return this.http.get<BlogModel[]>('/assets/data/blogs.json');
    }

    getProjects(): Observable<ProjectModel[]> {
        return this.http.get<ProjectModel[]>('/assets/data/projects.json');
    }

    getProjectById(id: number): Observable<ProjectModel> {
      return this.http.get<ProjectModel[]>('/assets/data/projects.json')
        .pipe(map(p => p.find(item => item.id === id)));
    }

    getTestimonials(): Observable<TestimonialModel[]> {
        return this.http.get<TestimonialModel[]>('/assets/data/testimonials.json');
    }

    getTestimonialById(id: number): Observable<TestimonialModel[]> {
        return this.http.get<TestimonialModel[]>('/assets/data/testimonials.json')
            .pipe(
                map(resp => resp.filter(testimonial => {
                    return testimonial.id === id;
                }))
            );
    }

    getMemberById(id: number): Observable<PeopleModel[]> {
        return this.http.get<PeopleModel[]>('/assets/data/people.json')
            .pipe(
                map( resp => resp.filter(member => {
                    return member.id === id;
                }))
            );
    }
}
