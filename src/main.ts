import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: 'https://front-71oguo7jd-hamzas-projects-bce25e95.vercel.app/',  
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,  
  });
  
  await app.listen(3000);
}
bootstrap();
