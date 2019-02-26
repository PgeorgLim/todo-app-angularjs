import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from '../login.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  apptitle = 'The Todo App';
  faSignOutAlt = faSignOutAlt;

  constructor(public loginService: LoginService) {}

  ngOnInit() {
  }

  logout() {
    this.loginService.logoutUser();
  }


}
