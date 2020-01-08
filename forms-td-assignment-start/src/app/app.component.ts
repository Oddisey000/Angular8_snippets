import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advance', 'Professional'];
  @ViewChild('signUpForm', {static: false}) signUpForm: NgForm;

  onSubmitForm() {
    console.log(this.signUpForm.value);
  }
}
