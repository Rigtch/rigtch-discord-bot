import { Command, DiscordCommand } from '@discord-nestjs/core'
import { CommandInteraction } from 'discord.js'

@Command({
  name: 'example',
  description: 'sample description',
})
export class SampleCommand implements DiscordCommand {
  handler(interaction: CommandInteraction): string {
    return `Interaction with command: ${interaction}`
  }
}
