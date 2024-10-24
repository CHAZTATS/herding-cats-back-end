import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  //app.use(helmet());
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector))
  );

  const docConfig = new DocumentBuilder()
    .setTitle('Back-End')
    .setDescription(`Herding-Cats-2`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();


  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8080);
}
bootstrap();
