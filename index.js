import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.startsWith("!announce")) {
    const announcement = msg.content.replace("!announce", "").trim();

    if (!announcement) {
      return msg.reply("Please write a message after !announce");
    }

    msg.channel.send(`📢 **Announcement:**\n${announcement}`);
  }
});

client.login(process.env.TOKEN);
