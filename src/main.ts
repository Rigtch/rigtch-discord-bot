import { NestFactory } from '@nestjs/core'
import { DiscordbotModule } from './bot.module'

async function bootstrap() {
  const app = await NestFactory.create(DiscordbotModule)
  await app.listen(3000)
}
bootstrap()
