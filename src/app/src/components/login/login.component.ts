
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { globalVars } from '../../globals/constants';
import { MatDialogRef } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../states/user.state';
import { loginUserAction } from '../../actions/user.action';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,],
  providers: [

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogin: boolean = true;
  loginForm: FormGroup;
  user$: Observable<UserModel> | undefined;
  globalVars = globalVars;
  errorMessage = '';

  @Select(UserState.getLoggedIn)  loggedIn$!: Observable<boolean>;
  @Select(UserState.getError) error$!: Observable<string>;

  constructor(private store: Store, private fb: FormBuilder, private userService: UserService, public matDialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  closePopup() {
    console.log('closePopup');
    this.matDialogRef.close();
  }

  onSubmit() {
    //TODO: add signup logic
    // if (this.loginForm.valid) {
    //   this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    //     next: (user) => {
    //       if (user instanceof Error) {
    //         this.errorMessage = (user as Error).message;
    //       }
    //       else {
    //         console.log('user', user);
    //         this.globalVars.user = user as UserModel;
    //         localStorage.setItem('user', JSON.stringify(user));
    //         console.log('localStorage', localStorage.getItem('user'));
    //         this.globalVars.loggedIn = true;
    //         this.loginForm.reset();
    //         this.closePopup();
    //       }
    //     },
    //     error: (error) => {
    //       console.log('error', error);
    //       this.errorMessage = 'Unknown error occurred, please try again later.'
    //     }
    //   });

    //   console.log('fetched value', this.user$)
    // } else {
    //   console.log('Form is invalid');
    // }
    this.store.dispatch(new loginUserAction(this.loginForm.value.email, this.loginForm.value.password)).subscribe(
      (success)=>{
        this.loginForm.reset;
        this.closePopup();
        console.log('store', this.store.selectSnapshot(UserState));
      }
    )
  }

  switchLoginOrSignUpTab(isLogin: boolean) {
    console.log('switchLoginOrSignUpTab to', isLogin);
    this.isLogin = isLogin;
  }
}
