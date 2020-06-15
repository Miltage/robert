---
title: "How to build a Twitch bot: Part 1"
date: 2020-06-15
featured_image: /images/blog/robot.jpg
image_caption: Photo by Rock'n Roll Monkey on Unsplash
tags:
  - blog
  - programming
  - twitch
  - javascript
---

Bleep bloop!

I started [streaming on Twitch](/blog/hello-twitch/) a little over a month ago and when I started, I saw no need for a bot. A few weeks later, however, I started streaming myself playing [Ludum Dare](https://ldjam.com) games and found that I couldn't keep up with the submissions. Links to people's games were being lost in the chat. I quickly created a Google Form for people to submit their games to a spreadsheet, but I needed a bot to send the link to people upon request. I managed to set one up with very little effort on [Streamlabs](https://streamlabs.com/), but being a programmer, I wanted to create my own.

When my brother was an avid streamer a couple years ago he had set up his own bot, aptly titled **Greg_the_butler**. Borrowing heavily from this idea, my own bot, **Butler_Boris**, was born!

Bot services like [Moobot](https://moo.bot/), [Streamlabs](https://streamlabs.com/) or [Nightbot](https://nightbot.tv/) are incredibly useful and easy to use, and I'm sure you will find that they will more than likely fit the job you need doing but if, however, you are like me and love to tinker, then this post is for you!

![Hello humans](https://media1.tenor.com/images/0d25b593960f77aa2e2fdc1c4ddd4336/tenor.gif?itemid=9734323)
*I am programmed to serve*

## Set up

To run your bot, you're going to need both [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Go ahead and install those first.

Next, create a folder on your computer that is going to host your bot. In that folder, run the following command to install Twitch's API wrapper.

`npm install tmi.js`

Optional: if you want your bot to be run on a separate Twitch account (like I did) you will have to create that account on [Twitch](https://www.twitch.tv/). If you're happy to run the bot on your own account, you can skip this step.

Lastly - you will need an OAuth token. You can [generate that here](https://twitchapps.com/tmi/) while logged in with your desired account.

## Basics

In your project directory, create a file called `bot.js`. This is going to hold all the logic for your bot.

Twitch Developer docs have a basic example on this page for a dice-rolling app. I'll remove the dice-rolling part, because we won't need that.

```javascript
const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: <BOT_USERNAME>,
    password: <OAUTH_TOKEN>
  },
  channels: [
    <CHANNEL_NAME>
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // handle messages here
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
```

The code is pretty self-explanatory. All you really need to do is replace the 3 variables in `opts` with the username of your bot account, the OAuth token we generated earlier, and then a list of channels you'd like your bot to run on. For me, that would look like this:

```javascript
// Define configuration options
const opts = {
  identity: {
    username: Butler_Boris,
    password: oauth:xxxxxxxxxxxxxxxxxxxxxx
  },
  channels: [
    Miltage
  ]
};
```

## Running

To run your bot all you need to do is run your file from command line.

`node bot.js`

You should get a message about the bot connecting to IRC if everything is working correctly.

## Customizing

So this is all good and well, but your bot doesn't do anything yet.  
Let's program our bot to respond to people when they send greetings in the chat.

```javascript
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // List of greetings to listen for
  var greetings = ['hello', 'hi', 'hey', 'morning', 'afternoon', 'evening', 'good morning', 'good afternoon', 'good evening'];
  // Make lowercase and strip punctuation
  var m = msg.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  // Test for greetings and respond accordingly
  for (i in greetings)
  {
    if (m === greetings[i]) {
      client.say(target, `Hello ${context['display-name']}!`);
    }
  }
}
```

Here we use `context` object to get the user's display-name and address them by name! Neat!

So far so good, but bots also need to respond to commands. Let's extend our `onMessageHandler` function to do that too.

```javascript
// Remove whitespace from chat message
const commandName = msg.trim();

if (commandName.charAt(0) === "!") {
  const command = commandName.split(" ")[0];
  const displayName = context['display-name'];
  // Handle command
  switch (command) {
    case "!test":
      client.say(target, `You used the !test command.`);
      break;
    default: 
      console.log(`* Unknown command ${commandName}`);
  }
}
```

Here we first strip the whitespace from the message. Next we check if the first character is an exclamation mark `!` which denotes a command is being used. If it is, we split the message using the a blank space as the delimiter to select the very first word.

Last, we use a switch-case statement to detect which command is being used and respond accordingly. This example only accepts one command `!test` which has a very simple response. You can replace this with whatever you'd like your bot to do and easily expand by adding more cases to the switch statement.

If the command is not recognised, it will trigger the `default` case which will report the usage to the console, but nothing will happen in chat. You could change that to respond in chat that the command is unrecognised if you wanted to.

You could also easily added command aliases like so:

```javascript
case "!hello":
case "!test":
case "!test2":
  client.say(target, `@${displayName} You used the !test command.`);
  break;
```

In this case, `!hello`, `!test` and `!test2` would all trigger the same command. Awesome!

Last thing we'll add is the ability for our bot to occassionaly say something in chat. This is handy for promoting things to viewers. I've used this to share links to projects I'm working on or for sharing an invite link to my [Discord server](https://discord.gg/zcUQgZV).

```javascript
function periodicPromotion(interval) {
  setInterval(function() {
    client.say(opts.channels[0], `This is a message that will be sent every 30 mins!`);
  }, interval * 1000);
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  periodicPromotion(1800);
}
```

Here we simply tell the bot to send a message every time a specified interval has passed. Note that the interval is specified in milliseconds. I've set my interval to 30 mins, which is 1800 seconds, which I then multiply by 1000 to convert to milliseconds. Be careful not to be too spammy here!

## Conclusion

With these basics in place, there are tons of cool things you can do with your bot. During [Ludum Dare](https://ldjam.com) I added a raffle feature to my bot that picks a random winner from a list of entrants!

Next time I will show you how to connect to the Twitch API and give your bot some more functionality!
