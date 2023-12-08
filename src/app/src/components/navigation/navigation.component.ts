import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { globalVars } from '../../globals/constants';
import { MatDialog } from '@angular/material/dialog'; // Add MatDialogRef import
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  globalVars = globalVars;

  constructor(public matDialog: MatDialog){

  }

  openMenuOrLoginPopup() {
    console.log('open menu');
    if(this.globalVars.loggedIn) {
      console.log('open menu');
    }
    else {
      this.matDialog.open(LoginComponent);
    }
  }
}
