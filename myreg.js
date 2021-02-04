const express = require('express');
const bodyPars = require('body-parser');

let app = express();

let urlPars = bodyPars.urlencoded({ extended: false });

const log = 'admin';
const myPass = '1234';

app.get('/main', urlPars, function (request, response) {
   response.sendFile(__dirname + '/main.html');
});

app.post('/main', urlPars, function (request, response) {

   if (!request.body) return response.sendStatus(400);
   console.log(request.body);

   if (request.body.login === log && request.body.pass === myPass) {
      response.send('Authorization completed successfully');
   }
   else {
      response.send('Login or password is not correсtly');
   }
}
);

app.listen(3000);