import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'mail'
    });*/
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }


  @ViewChild('formData', { static: false }) signupForm: NgForm;
  defaultQuestion: string = 'pet';

  /* onSubmit(form: NgForm) {
    console.log(form);
  } */

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.user.secretQuestion = this.signupForm.value.secret;

    this.signupForm.reset();
  }
}
