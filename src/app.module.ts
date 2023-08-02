import { Module } from '@nestjs/common';
import { MealModule } from './modules/meal/meal.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
        MongooseModule.forRoot('', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }as MongooseModuleOptions),
    MealModule,
    AuthModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
