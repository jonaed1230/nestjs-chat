import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  await app.listen(3000).then(() => {
    console.log('Server is running on port http://localhost:3000');
  });
}
bootstrap();
