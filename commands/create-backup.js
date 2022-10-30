const backup = require('discord-backup');
const config = require('../config.json');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the "MANAGE_MESSAGES" permissions to create a backup for this server.');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Backup created! Here is your recovery code: `'+backupData.id+'`!');

    }).catch(() => {

        return message.channel.send(':x: Permissions error this bot requires administrator permissions. **Error -20**');

    });

};
