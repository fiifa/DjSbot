const Discord = require("discord.js");
const x = "Online! Fifa was here."

require('colors')

module.exports = async client => {   
  
console.log(x)


  function status() {
         const _status_ = [`fifaaa`, `😎`, `Yeeee`]
         const Power = Math.floor(Math.random() * _status_.length);
          client.user.setActivity(_status_[Power], {type: "STREAMING"});
        }; setInterval(status, 10000)
}; 

