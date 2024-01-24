import {Telegraf , Markup} from "telegraf";
import {message} from "telegraf/filters";

const token = '6423164831:AAG4-hJoZVVnrQu4-Ni0qin6x8oIkGtkC4I';
const webAppUrl = 'https://angular-teleggram-app.web.app';
const bot  = new Telegraf(token);
bot.command('start', (ctx) => {
    ctx.reply(
        'Welcome! Please press the button to start :)',
        Markup.keyboard([
            Markup.button.webApp('Send message', `${webAppUrl}/feedback`)
        ])
    );

})

bot.on(message('web_app_data'), async (ctx) => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Your message: ${data.feedback}` ?? 'empty message')
})

bot.launch()
