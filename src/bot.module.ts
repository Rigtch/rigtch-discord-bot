import { DiscordModule } from '@discord-nestjs/core'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Intents } from 'discord.js'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DiscordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      commands: ['**.*.command.ts'],
      discordClientOptions: {
        intents: [Intents.FLAGS.GUILDS],
      },
    }),
  ],
})
export class BotModule {}
