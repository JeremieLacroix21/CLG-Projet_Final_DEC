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

router.post("/createUser", (req, res) => {
	// Validate the passed user type
	let typeIsDistrib = (req.body.user_type == "D" || req.body.user_type == "Distributeur");
	let typeIsSupplier = (req.body.user_type == "S" || req.body.user_type == "Fournisseur");
	if (!(typeIsDistrib || typeIsSupplier)) {
		res.status(401).send({message:('The provided user type is invalid: ' + req.body.user_type)});
	}
	
	// Ensure that the user id is prefixed with the correct user type 
	// 	Example 1: {id:"D83", user_type:"Distributeur"} is valid
	//	Example 2: {id:"D86", user_type:"D"} is valid
	//	Example 3: {id:"S86", user_type:"D"} is not valid
	let userId = req.body.user_id;
	let idIsDistrib = (userId.charAt(0) == "D");
	let idIsSupplier = (userId.charAt(0) == "S");
	if (!(idIsDistrib || idIsSupplier)) {
		userId = ((typeIsDistrib ? 'D' : 'S') + userId);
	} else if (idIsDistrib != typeIsDistrib) {
		res.status(402).send({message:'The provided user type does not match the provided id: ' + req.body});
	}

	// Check if user exists
	chatkit.getUser({
		id: userId
	}).then(user => {
		console.log('Could not create user: user already exists');
		res.status(201).send({message:'User exists'});
	}).catch(err => {
		chatkit.createUser({
			id: userId,
			name: req.body.user_name
		}).then(() => {
			console.log('A user was created successfully: ', req.body.user_name);
			res.status(200).send({message:'User created'});
		}).catch((err) => {
			console.log(err);
			res.status(400).send({message:'Error'});
		});
	});
})

app.post("/createConversation", (req, res) => {
	if ((req.body.distrib_id.charAt(0) != 'D') || (req.body.supplier_id.charAt(0) != 'S')) {
		res.status(402).send({message:'A provided user id does not match the required user type: ' + req.body});
	}
	
	let roomId = req.body.distrib_id + ':' + req.body.supplier_id;
	let roomName = 'Conversation ' + req.body.distrib_name + ' - ' + req.body.supplier_name;
	
	// Check if room exists
	chatkit.getRoom({
		roomId: roomId
	}).then(room => {
		console.log('Could not create room: ', roomId, ' already exists');
		res.status(201).send({message:'Room exists'});
	}).catch(err => {
		chatkit.createRoom({
			id: roomId,
			creatorId: req.body.distrib_id,
			name: roomName,
			userIds: [ req.body.distrib_id, req.body.supplier_id ],
			isPrivate: true
		}).then(() => {
			console.log('A room was created successfully: ', roomName);
			res.status(200).send({message:'Room created'});
		}).catch((err) => {
			console.log(err);
			res.status(400).send({message:'Error'});
		});
	});
})

module.exports = router;