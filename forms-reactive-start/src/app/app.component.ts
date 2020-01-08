import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddeUserNames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
   
    /*this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    );*/
    
    this.signUpForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    this.signUpForm.setValue({
      'userData': {
        'username': 'Vitalii',
        'email': 'vitalii@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddeUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
