import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('bye')
    .setDescription('bye command')

export const action = async (ctx) => {
    ctx.reply('@everyone 晚安各位我要走了!')
}
