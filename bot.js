const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Listo Para Ayudar!");
    
    client.user.setPresence( {
        status: "online",
        game: {
            name: "Ayudando a los | Users de AquaGods",
            type: "PLAYING"
        }
    } );
 
 });

var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "discord")) {
    message.reply("La invite a nuestro discord es discord.io/aquagods");
  } else
  if (message.content.startsWith(prefix + "ip")) {
    message.reply("La ip de aquagods es :::::::::: y la version es la 1.15.2");
  }
  if (message.content.startsWith(prefix + "staff")) {
    message.reply("Los staffs de AquaGods son Owners: GAYMER200, Marta Diaz, Co-Owners: Lven, Oscarituz, Directores de Seguridad: Kire, NiipoPVP_YT, Admins: JoanFo, mineimpacto, Luigy, SrPrincipeK, xXPinguiXx, Moderadores: ManuBlox19, CralyCrack, ItsPokeOnTM_GD, UrZuXo, Ayudantes: CamiUwU y Srfi23 ");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.reply("Hola, veo que quieres saber un poco más sobre el servidor, bien. Aqui te dejo un poco de información. Somos un servidor survival en constante crecimiento que poco a poco vamos mejorando, dia a dia vamos haciendo las cosas mejores. Este servidor solo es de survival, pero hecho con muchas ganas, esperamos que lo disfrutes. ");
  }
  if (message.content.startsWith(prefix + "help")) {
    message.reply("Mis comandos de momento son a!info a!staff a!ip a!discord ")
  }
  "prefix"("a!")
});
client.login("NzIyMDE3NjUzODU3OTc2Mzgx.XudEBA.ML7kATMTgdhEee5M_M09zwveWo8"); 
