---
title: "SAGJ2020 - Making a dodge ball game in one weekend"
date: 2020-09-28
featured_image: /images/blog/bodgedall-title.jpg
image_caption: Hitting that old school arcade style right in the nostalgia!
tags:
  - blog
  - programming
  - game development
  - game jam
  - pixel art
---

"Always remember the five d's of dodgeball: dodge, duck, dip, dive and dodge!"  
~ Patches O'Houlihan

This last weekend (26 - 27 Sep) saw the commencing of the annual [SA Game Jam](https://itch.io/jam/sa-game-jam). This is a special game jam for game creators in South Africa only and is organised by local developers Free Lives who even offer prize money to the top placing entrants!

# Theme Announcement

I waited in eager anticipation for the theme announcement on Friday evening - and then at 18:00 the theme was announced: **Returning from the Brink**

While watching the [keynote video](https://youtu.be/iwpBcGYBky0) where Evan explains the theme and its various interpretations, my mind immediately went to dodgeball. 

![Dodgeball](https://media1.tenor.com/images/64596c8132354c190ebbb0999f7b204b/tenor.gif?itemid=12915412)

In the sport you are able to catch balls thrown at you to bring back (or to use game talk - *"revive"*) team members into the game that were previously tagged out. This one rule allows players to turn the tides of a match completely or... *ahem*... return from the brink of losing.

I loved the idea of making a 2D interpreation of dodgeball so wasted no further time brainstorming and jumped immediately into the conceptualisation phase. Dodgeball was a little too simple, I was searching for a spin or twist that made it more interesting. With the help of some viewers on stream we came up with the concept of "Disco Dodgeball", where your character would spawn an afro and the court would transform into a disco if you had one remaining player on your team. This was a fun concept, but unfortunately I didn't have time to implement this extra feature so it got discarded during development. It would have been groovy though! So, so groovy...

![Night Fever](https://media1.tenor.com/images/d8b4bdccba12e813f85ae2688e296d65/tenor.gif?itemid=10516145)

The first evening was spent making an art mockup. I always prefer to have something visual to work with during development as opposed to building a game with placeholder rectangles. I spent an hour or two placing pixel players (alliteration!) and by the end of the night I had most of the elements needed to start building the game in the morning.

![2D Dodgeball Mockup](/images/blog/dodgeball-concept.png)
*You can see score counters at the bottom that I decided against later*

# First Day

I awoke very eager to get started. I began putting down the first pieces of the game. I decided to use [Godot](https://godotengine.org/) again for this jam, having only used it once previously for the GMTKJam a few months ago. I don't have a history of using game engines, preferring in the past to program everything with libraries, but lately I've been sinking more time into learning these tools to aid myself in game development and cut down dev times - especially during jams! Doesn't hurt that these engines export to multiple platforms with ease, either!

I can really recommend [Godot](https://godotengine.org/) for budding enthusiasts and seasoned vets alike! Once you learn how their scenes work and get familiar with GDScript (I'm still climatizing) it really does speed up the process of development tremendously - great for jams or prototypes! And this is coming from someone who despises Unity - probably why I took so long to pick up another engine/editor.

Anyway, a lot of the first day was getting the core gameplay in there. Having the player move around, picking up balls, throwing balls and of course, taking hits to the god damn face. A few people have asked me about the physics of the dodgeball. It's really quite simple. I use a velocity vector for X/Y movement, then have a third variable to get the bounce on the Z axis. Something like this:

```
var z = 0
var velZ = 5

func _process(delta):
  $Sprite.transform.origin.y = -z
  z += velZ
  velZ -= 0.2 # adjust this for gravity strength

  # when the ball hits the ground, reverse the velocity to get the bounce!
  if (z <= 0):
      velZ = -velZ
```

The AI is also not too complex, though I did spend an hour or two fixing stupid bugs like the players just running off the screen for no damn reason. Here's their logic in 3 simple steps:

- If they are not holding a ball and there is a ball within a certain range, go pick it up
- If they are holding a ball and there is an opposing player within a certain range, toss that shit
- If neither of the above are true, run around randomly in their assigned section

This seemed to do the trick nicely. Near the end of the first day I had the idea to add a CRT shader which I had seen before somewhere. After a quick Google, [I found what I was looking for](https://github.com/hiulit/Godot-3-2D-CRT-Shader). I customised it ever so slightly because I felt the scanlines were a little too strong, but it really gave the game that old-school feel I was looking for.  
Here's what I had by the end of the first day:

![2D Dodgeball Gameplay](/images/blog/dodgeball.gif)
*Dodge this!*

The core gameplay loop was done and I was starting to feel pretty excited! When doing these 48 hour jams I always try to get the core loop done within the first day, which leaves me with the entire second day to add sound and polish, and despite losing an hour or two on annoying bugs, this time things had seemed to go right! I struggled to fall asleep that night as a little to-do list of everything I still planned to add to the game circled menacingly in my head...

# Day 2

On the Sunday I jumped straight into sound. I have often neglected sound in the past, much to the detriment of my entries. A simple few sound effects can really transform a game. It's amazing the difference it could make. I was originally planning to do some realistic sound effects like sneakers on the court and rubber ball bounces, but once I had that CRT shader in I knew I had to lean into that classic arcade style and opted for old school 8 bit sounds instead. Plus, they're easier for me to make, so I'd be saving time overall.

![Arcade](https://media1.tenor.com/images/85e1659e827576c269d9122a3f18ab24/tenor.gif?itemid=15905115)

Around noon that day I started working on a menu system. I also remembered that I wanted to have an interactive tutorial and began to panic about the lack of remaining time - I only had 6 hours left! I threw together the menu at what felt like lightning speed, but when all was said and done it had taken roughly 4 hours to get all the bits and pieces in there as well as set up the two game modes - one for practice with only 2 players and one for the actual 4v4 dodgeball match. I knew that I had to put a practice mode in there because the control scheme might take a few tries to get used to and dropping a player into a full-blown match wouldn't be fair.

With 2 hours remaining, I threw together a little chiptunes track to play over the menu which up until this point was deathly silent. It's not perfect by any menus, and I'd venture as to say not even *great*, but it did add something there that I felt was very much missing. To really sell that arcade machine feel, I added a tongue-in-cheek "INSERT COIN" message to the title screen. I did some last minute bug fixing and then the game was done with only 15 mins to spare! But wait... something was missing.

I decided I would love to have a coinslot sound effect when you "inserted" your virtual coin at the start of the game. I had a coin just sitting there on my desk too... so an idea suddenly formed. With only 15 minutes left on the clock I rushed downstairs to find something plastic sounding to slide this coin into. In the kitchen I found a knife stand which would work perfectly (once the knives were out, that is) and then recorded a few takes of sliding the coin in. My first ever Foley session! [You can see it happening here on the live stream.](https://www.twitch.tv/videos/753802398)

![ASMR](https://media1.tenor.com/images/449f4571f40ab3bbda8bcb1b99f4f642/tenor.gif?itemid=13952741)
*ASMR anyone?*

I also found a box of coins just lying around so I recorded the "ching" of the coin landing in the machine. I spliced them together and then boom! Coinslot sound effect. Perfect! It was the finishing touch I was looking for. The ribbon on the box. The cherry on the cake. With bated breach and an aching back, I exported the game for submission...

Well, I would have if I didn't need to download 500mb of Godot export templates. So I did that first, then an hour later...

![Waiting...](https://media1.tenor.com/images/423c375c2e12c1a708ecc1694e472ff1/tenor.gif?itemid=13052487)

I submitted the game and called it a night. Now the game is in the judges hands...

[Play it on itch.io!](https://miltage.itch.io/bodge-dall)  
I also streamed the rest of the 48 hour process on [my Twitch channel!](https://twitch.tv/miltage)
