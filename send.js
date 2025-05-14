const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
        throw error1;
      }
      var queue = 'q1';
      var message = 'Hello world';

      channel.sendToQueue(queue, Buffer.from(message));
      console.log(`${message} was sent to queue ${queue} with success`)
    });
});