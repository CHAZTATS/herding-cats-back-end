import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {

    }

    async validateUser(
        userUsername: string,
        UserPassword: string,
    ): Promise<any> {
        const user = await this.userService.findOneByUsername(userUsername);

        if (user && user.password) {
            const doesPasswordMatch = await bcrypt.compareSync(UserPassword, user.password);

            if (!doesPasswordMatch) {
                // console.log('Error: The password provided does not match our records');
                return null;
            }

            //NOTE: Deconstruct user object and remove the password before returning!
            const { password, ...userObjWoPassword } = user;
            return userObjWoPassword;
        }
        return null;
    }

    async login(user: any) {
        let fullUser = await this.userService.findOne(user.id);
        const payload = {
            user: fullUser,
        };


        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
