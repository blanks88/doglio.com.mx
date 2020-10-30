import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() formDark;
  public form: NgForm;
  public name: string;
  public email: string;
  public message: string;
  public mouseOverSubmit: boolean;
  public submitTrigger: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.form);
  }

  submit(contactForm: NgForm) {
    console.log(contactForm);
    this.submitTrigger = true;
  }
}
