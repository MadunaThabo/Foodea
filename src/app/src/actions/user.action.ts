export class loginUserAction {
    static readonly type = '[User] Login';
    constructor(public email: string, public password: string) {

    }
}
