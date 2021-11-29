import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
 
  //below property will hold the form in the end
  signupForm: FormGroup;

  //custom validations
  forbiddenUsernames = ['Chris','Anna'];

  ngOnInit(){
    this.signupForm=new FormGroup({
      "username": new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "gender": new FormControl('male')

    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  //custom validator
  forbiddenNames(control: FormControl):{[s:string]: boolean}
  {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true};
    }
    //if validation valid  return null nothing else
    return null;
  }
}

