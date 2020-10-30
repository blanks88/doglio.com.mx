import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax/rellax';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {faNpm} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3} from '@fortawesome/free-brands-svg-icons';
import {faSass} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons';
import {faAngular} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faEmber} from '@fortawesome/free-brands-svg-icons';
import {faGit} from '@fortawesome/free-brands-svg-icons';
import {faGitlab} from '@fortawesome/free-brands-svg-icons';
import {faFigma} from '@fortawesome/free-brands-svg-icons';
import {faGulp} from '@fortawesome/free-brands-svg-icons';
import {faAws} from '@fortawesome/free-brands-svg-icons';
import {faWordpressSimple} from '@fortawesome/free-brands-svg-icons';
import {faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public icons = [];
    public arrows = [];

    constructor(private title: Title, private meta: Meta) {
        title.setTitle('Oblas - Portfolio App');
        meta.addTags([
            {name: 'description', content: 'Oblas - Portfolio application for agencies or freelancers'}
        ]);
        this.arrows.push(faLongArrowAltLeft, faLongArrowAltRight);
    }

    ngOnInit() {
        this.icons.push(
            faHtml5,
            faCss3,
            faSass,
            faBootstrap,
            faJs,
            faNodeJs,
            faNpm,
            faAngular,
            faReact,
            faEmber,
            faGit,
            faGitlab,
            faFigma,
            faGulp,
            faAws,
            faWordpressSimple
        );
        (window as any).rellax = new Rellax('.rellax');
    }

}
