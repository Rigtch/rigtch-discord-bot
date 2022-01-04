import { DiscordModule } from '@discord-nestjs/core'
import { Module } from '@nestjs/common'
import { Intents } from 'discord.js'

@Module({
  imports: [
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
