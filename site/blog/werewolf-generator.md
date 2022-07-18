---
title: "Werewolf Game Round Generator"
date: 2020-07-29
featured_image: /images/blog/werewolf-generator.jpg
image_caption: 
tags:
  - blog
  - programming
  - games
---

An ominous howl is heard in the distance... 

[Use the generator on Github](https://miltage.github.io/werewolf/)

Man, I cannot believe were are in August already. The time really is flying while we've all been in lockdown, but I'm slowly but surely growing content for my site and getting the chance to work on some cool things so I'm happy. Of course, being inside for large amounts of time comes with its ups and downs, but I hope everyone out there is coping and is in a good place right now.

Last Friday my company were looking for a game to play that the entire team could partake in, regardless of their current location. Thanks to COVID-19 a lot of our team has gone fully remote, some even landing as far away as Switzerland. I offered to moderate a game of Werewolf, and although nearly all of them had never played before, they gladly accepted.

For the uninitiated, Werewolf is a party game where one or two people (depending on the number of players) are secretly werewolves. It's up to the rest of the group, who are playing the roles of innocent villagers, to weed out the werewolves before they kill everybody. There are a few extra roles - like the Doctor, who can heal one person of choice once per round, or the Seer, who can secretly investigate players - but that is the game explained at its simplest.

In preparation for my game on Friday, I searched around online for a generator to randomly assign roles and help me keep track of the game. I found two candidates, but they were several years old, ugly / poorly designed and didn't work very well. Furthermore, they both lacked a necessity for me - the inclusion of the Doctor role. So, being the programmer and tinkerer that I am, I set out to make my own, because why not?

About 2 hours later I had the very basic workings of a complete generator and game tracker for the game. Later that evening I put it to its first test and ran a game for my colleagues. Despite it being their first time playing and no one being very good at lying, they still had a good amount of fun. I just work with good, honest people I guess.

After the game was wrapped I sank a little more time into polishing the thing, adding some explanatory text, tooltips and error messages and put it up on [Github](https://github.com/Miltage/werewolf), free to use.

The generator will randomly assign roles to players and then you can click on their icons to toggle their dead/alive state. Pretty simple, I'll admit, but it was really all I needed at the time. Might add some improvements later, like more roles or round timers. Maybe even at some stage turn this thing into an app with an automated moderator, wouldn't that be a fun project?

If you have suggestions for things you'd like to see on there, I'm all ears! Will probably get to use it myself a few more times before this whole social-distancing thing is through.
