
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../states/user.state';
import { loginUserAction } from '../../actions/user.action';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogin: boolean = true;
  loginForm: FormGroup;

  @Select(UserState.getLoggedIn)  loggedIn$!: Observable<boolean>;
  @Select(UserState.getError) error$!: Observable<string>;
  @Select(UserState.getUser) user$!: Observable<UserModel>;

  constructor(private store: Store, private fb: FormBuilder, private userService: UserService, public matDialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  closePopup() {
    this.matDialogRef.close();
  }

  onSubmit() {
    this.store.dispatch(new loginUserAction(this.loginForm.value.email, this.loginForm.value.password)).subscribe({
      next: ()=> {
        this.loggedIn$.subscribe((loggedIn) => {
          if(loggedIn) {
            this.loginForm.reset();
            this.closePopup();
          }
        });

        this.user$.subscribe(
          (user) => {
          }
        );
      },
      error: (error)=>{
      }
    });
  }

  switchLoginOrSignUpTab(isLogin: boolean) {
    this.isLogin = isLogin;
  }
}
