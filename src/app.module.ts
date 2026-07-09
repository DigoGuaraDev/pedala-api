import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ManterEstacoesModule } from './manter-estacoes/manter-estacoes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsuarioModule,
    ManterEstacoesModule
  ],
  providers: [AppService]
})
export class AppModule {}
