import {Component, Input, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {PeopleModel} from '../../models/people.model';

@Component({
    selector: 'app-team-member',
    templateUrl: './team-member.component.html',
    styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
    @Input() id;
    public member: PeopleModel;

    constructor(private getData: GetDataService) {
    }

    ngOnInit() {
        this.getData.getMemberById(this.id).subscribe( member => {
                this.member = member[0];
            }
        );
    }

}
