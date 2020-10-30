import {Component, OnInit, Input} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {TestimonialModel} from '../../models/testimonial.model';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
    public testimonial: TestimonialModel;
    @Input() id;

    constructor(private getData: GetDataService) {
    }

    ngOnInit() {
        this.getData.getTestimonialById(this.id).subscribe(testimonial => {
            this.testimonial = testimonial[0];
        });
    }

}
