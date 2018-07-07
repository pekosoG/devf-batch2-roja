const express = require('express');
const Bot = require('messenger-bot');
const app = express();

const bot = new Bot({
  token: "XXXXX",
  verify: "verifica-phrase",
  app_secret: "XXXXX",
});

bot.on('error', err => {
  console.log(err);
})

bot.on('message', (payload, reply) => {
  reply({ text: 'Holi a devf' }, err => {
    if (err) throw err;
  })
})

app.use(bot.middleware());

// app.get('/', (req, res) => {
//   res.send("Holi mundo de los chatbots");
// });

app.listen(3000, error => {
  if (error) {
    return error;
  }

  console.log("Servidor escuchando en el puerto 3000");;

})
