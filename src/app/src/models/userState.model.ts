import { UserModel } from "./user.model";

export class UserStateModel{
  user!: UserModel;
  loggedIn!: boolean;
  error!: string;
}
