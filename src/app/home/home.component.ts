import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax/rellax';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public icons = [];
    public arrows = [];

    constructor(private title: Title, private meta: Meta) {
        title.setTitle('Doglio - Plaquitas personalizadas, hechas a mano');
        meta.addTags([{ name: 'description', content: 'Doglio - Plaquitas personalizadas, hechas a mano' }]);
        this.arrows.push(faLongArrowAltLeft, faLongArrowAltRight);
    }

    ngOnInit() {
        this.icons.push(faDog, faCat, faKey);
        (window as any).rellax = new Rellax('.rellax');
    }
}
