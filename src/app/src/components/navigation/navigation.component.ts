import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { globalVars } from '../../globals/constants';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  loggedIn: boolean;
  accountName : string;

  constructor() {
    this.loggedIn = globalVars.loggedIn;
    this.accountName = "Thabo Maduna"
  }
}
