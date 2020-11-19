import UserAPI from "../Datasources/UserAPI";
import { IUser, IUserSignIn } from '../../Domain/Entities/User';
import IUserUseCases from '../../Domain/Usecases/UserUseCases';

export default class UserRepository implements IUserUseCases {
    async signUp(user: IUser): Promise<{ user: IUser; error: Error; }> {
        return await UserAPI.signUp(user);
    }

    async signIn(user: IUserSignIn): Promise<{ user: IUserSignIn; error: Error; }> {
        return await UserAPI.signIn(user);
    }
}