const express = require('express');
const Bot = require('messenger-bot');
const apiai = require('apiai');
const app = express();

const projectId = "newagent-755dd";
const sessionId = "messenger";
const languageCode = "es-ES";

const nlp = apiai("b9d23822ccf04b58b23e852316e51710");

const bot = new Bot({
  token: "XXXXX",
  verify: "verifica-devf",
  app_secret: "XXXXX",
});

bot.on('error', err => {
  console.log(err);
})

bot.on('message', (payload, reply) => {
  const request = nlp.textRequest(payload.message.text, {
    sessionId: sessionId,
  });

  request.on('response', function (response) {
    console.log(response);
    reply({ text: response.result.fulfillment.speech }, err => {
      if (err) throw err;
    });
  });

  request.on('error', function (error) {
    console.log(error);
  });

  request.end();
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
