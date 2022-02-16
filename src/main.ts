import { NestFactory } from '@nestjs/core'
import { DiscordbotModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(DiscordbotModule)
  await app.listen(3000)
}
bootstrap()
