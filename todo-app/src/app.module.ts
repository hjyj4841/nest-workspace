import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { PostsModule } from './posts/posts.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PostsModule, TodoModule],
  controllers: [AppController, TodosController],
  providers: [AppService],
})
export class AppModule {}
