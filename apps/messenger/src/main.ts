import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  const options = new DocumentBuilder()
    .setTitle('nestjs-chat')
    .setDescription('Chat application based on NestJS microservices')
    .setVersion('1.0')
    .addServer('http://localhost:4000', 'Local environment')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000).then(() => {
    console.log('Server is running on port http://localhost:3000');
  });
}
bootstrap();
