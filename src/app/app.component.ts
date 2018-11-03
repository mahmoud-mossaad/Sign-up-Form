import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siood';
  userModel = new User('','','','');
  errorMsg ='';
  submitted = false;
  constructor(private _enrollmentService: EnrollmentService){}
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
      data => console.log('success' , data),
      error => this.errorMsg = error.statusText
    )

  }
}
