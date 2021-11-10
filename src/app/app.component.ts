import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('signupForm',{static: false}) sgnForm: NgForm;

  subscriptions = ['basic','advanced','pro'];
  selectedSubscription='advanced';

  onSubmit(){
  console.log(this.sgnForm.value);
  }
}
