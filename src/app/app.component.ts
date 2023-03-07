import { Component } from '@angular/core';
// import HttpCallsService from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // host: {
  //   '(window:resize)': 'onResize($event)'
  // },
})
export class AppComponent {
  public isLogged: boolean;

  constructor(
    private router: Router,
    // private httpCallService: HttpCallsService,
  ) {
    this.isLogged = true;
  }

  public loginOut() {
    this.isLogged = false;
    // this.httpCallService.logout();
    this.router.navigate(['/']);
  }
}
