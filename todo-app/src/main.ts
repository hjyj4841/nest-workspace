import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  const config = new DocumentBuilder()
    .setTitle('Dongyeop API')
    .setDescription('Dongyeop API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
