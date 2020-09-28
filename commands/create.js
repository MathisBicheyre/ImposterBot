// Import database driver
const db = require('../data/db');

module.exports = {
	name: 'create',
	description: 'Create an Among Us game at the specified time',
	execute(message, args) {

    if(args.length) {
      message.channel.send(args);
    }
		else {
			message.channel.send("Format date as HH:MM");
		}



//IMPORTS AND VARIABLES

//Création des channels
        //script_channels.data_channels(gd)
//Tests

        }
}
