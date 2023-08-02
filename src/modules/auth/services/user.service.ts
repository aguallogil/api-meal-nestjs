import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { User,UserSchema } from "../models/user.model";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { NotFoundException, UnauthorizedException } from "@nestjs/common";
@Injectable()
export class UserService{
    constructor(@InjectModel(User.name)private userModel:Model<User>){

    }
    async getUser(user:User):Promise<User>{
        const u = await this.userModel.findOne({ email: user.email}).exec();
        if (!u) {
            throw new NotFoundException('Usuario no encontrado');
          }
      
          const isPasswordValid = await bcrypt.compare(user.password, u.password);
      
          if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
          }
      
          // Elimina la propiedad de contraseña del objeto de respuesta
          u.password=null;
      
          return u;
        
    }
}