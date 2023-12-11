import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Add MatDialogRef import
import { LoginComponent } from '../login/login.component';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../states/user.state';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserStateModel } from '../../models/userState.model';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Select (UserState.getLoggedIn) loggedIn$!: Observable<boolean>;
  @Select (UserState.getUser) user$!: Observable<UserModel>;

  constructor(public matDialog: MatDialog, private store: Store, private router: Router){

  }
  
  goHome() {
    this.router.navigate(['/']);
  }

  openMenuOrLoginPopup() {
    this.loggedIn$.subscribe((loggedIn) => {
      if(loggedIn) {
        console.log('open menu', loggedIn);
      }
      else {
        console.log('open login', loggedIn);
        this.matDialog.open(LoginComponent);
      }
    }
    );
  }
}
