import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { UserService } from "./services/user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.model";
import { AuthService } from "./services/auth.service";
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from "../guards/auth.guard";

@Module({
    imports:[
        MongooseModule.forFeature([
            {name:User.name,schema:UserSchema}
        ]),
        PassportModule,
        JwtModule.register({
                secret: 'SAJ44SUJDHFSDJ42D',
                signOptions: { expiresIn: '24h' },
                }),
    ],
    controllers:[AuthController],
    providers:[UserService,AuthService,JwtAuthGuard],
    exports:[JwtModule]
})
export class AuthModule{}