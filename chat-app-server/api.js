const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: '895026',
  key: 'a2dc63d7124dc4e7b0d0',
  secret: '60df46c14f3b2d51220d',
})

router.get('/', (req, res) => {
  res.send('all good');
});


router.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

module.exports = router;