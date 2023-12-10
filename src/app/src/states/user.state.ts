import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UserModel } from "../models/user.model";
import { loginUserAction } from "../actions/user.action";
import { UserService } from "../services/users/user.service";
import { UserStateModel } from "../models/userState.model";

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: {
      UserId: '12345',
      email: 'example@example.com',
      password: 'password123',
      name: 'John',
      surname: 'Doe',
      profile: '../../../../assets/profile-male.jpg',
    },
    loggedIn: false,
    error: ''
  }
})

@Injectable()
export class UserState {
  constructor(private userService: UserService) { }

  @Selector()
  static getLoggedIn(state: UserStateModel) {
    return state.loggedIn;
  }

  @Selector()
  static getUser(state: UserStateModel) {
    return state.user;
  }

  @Selector()
  static getError(state: UserStateModel) {
    return state.error;
  }

  @Action(loginUserAction)
  login(ctx: StateContext<UserStateModel>, action: loginUserAction) {
    const state = ctx.getState();
    return this.userService.login(action.email, action.password).subscribe({
      next: (user) => {
        if (user instanceof Error) {
          ctx.patchState({
            ...state,
            error: (user as Error).message
          });
        }
        else {
          ctx.patchState({
            ...state,
            user: user as UserModel,
            loggedIn: true,
            error: ''
          });
        }
      },
      error: (error) => {
        ctx.patchState({
          ...state,
          error: error
        });
      }
    });
  }

  // addUser() {

  // }

  // deleteUser() {

  // }

  // updateUser() {

  // }

  // getUser() {

  // }

  // getUsers() {

  // }

  // logout() {

  // }

  // register() {

  // }
}
