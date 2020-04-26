---
title: "LD46: Junior Juggle"
date: 2020-04-24
featured_image: /images/blog/junior-juggle2.png
image_caption: Well, this looks... safe.
tags:
  - blog
  - programming
  - game development
  - game jam
---

I made a game in 48 hours for Ludum Dare!  
Theme: Keep it alive

[Ludum Dare](https://ldjam.com) was here again last weekend and I was wholly invested. It's been a full year since I entered last April, and it was a good few years since I last entered before that! I used to partake in Ludum Dare every time it came around (then 3 times a year, now only twice) but for a while I had other priorities and had not the time.

At this point I'm no stranger to game jams but I am unaccustommed to just how well it went this time around. Often the victim of feature creep, scope mismanagement and often flat-out panic, this time these things were nowhere to be found, and of that I am quite proud. I finished with 5 hours to spare, a feat I once never thought possible!

This time was also different in that I streamed the entire process. It was pretty quite for most of the time, but I did have the occassional interested soul pop in to ask a question here or there.

# Day 1

The competition starts at 3am in my timezone. In my younger years (when I was frivolous and foolhardy) I would stay up for the start to wait for the theme announcement, but nowadays I prefer to get a healthy night's sleep beforehand and then discover the theme when I awaken –– bright-eyed, bushy-tailed and rearing to go.

First thing I did after wiping sleep from my eyes was check my email. I'm on the Ludum Dare mailing list and the theme is sent directly to my inbox at the start of the competition. The theme was "keep it alive". Huh. First thing that instantly sprang to mind was a Flash game I played back in high school. You click on a soccer ball to keep it off the ground. Quite simply, a virtual game of "keep it up". As I lay there in bed my mind wandered around several ideas before circling back to this idea of keeping things off the ground. But it wasn't there yet. Suddenly, it hit me. Instead of a soccer ball, you're juggling lethal items above something you need to protect. Like... a baby? I loved it. It was the perfect blend of absurdity and skill.

![Baby](https://media1.tenor.com/images/64f52e6975c4a4ad1d603d9f3e5cdd05/tenor.gif?itemid=4901604)

Before I could even turn on my computer and write a single line of code though, we had to make our weekly trip to the grocery store to buy supplies for the following week of lockdown. I know that every hour counts in a game jam, and the whole time I was itching to get home and start putting my idea into motion.

The first few hours were spent figuring out how to use [Box2D](https://box2d.org/) with [Heaps](http://heaps.io). This is a framework for Haxe that I decided to use for the jam literally *the night before*. I've had my eye on it for a while and thought this might be the perfect opportunity to get my feet wet and I gotta say, I really kinda like it! So a little time was spent poring over Box2D examples and getting something basic up and running. Box2D has been around and in use for more than 10 years now, so there was no shortage of documentation but there were very few examples that worked with Heaps. I eventually found a small snippet that I had to tweak to fit my needs but once I got that together I had some circles that I could click to keep up in the air. That was all the physics I needed! It was time to move on to art.

![Science](https://media1.tenor.com/images/d316039cbfa35cbf4812c48e7c1210ee/tenor.gif?itemid=5011708)

Drawing took a little while to get into. I haven't drawn on a tablet for a few years now and my first attempts to draw art for my game were... unsatisfactory. My cute baby looked more like he was raised to ring bells in a tower. I didn't give up hope though. I erased and redrew *repeatedly* for an hour or two until I had something half-decent. I added a few objects to drop on this poor freshly-drawn infant (these were easier to draw because they're mostly square) and then sat back to admire my handiwork. I noticed that I had drawn the objects in a different style - the lines were much thicker and the inconsistency bothered me greatly. It was time to draw the baby yet again! Thankfully, it was easier this time around now that the original line work had already been created. I just had to go over the lines with a thicker brush and I have to say the baby looked a lot better in the thicker style, so it all worked out for the best.

I slapped the new artwork into the game then created a title screen and game over screen for when the baby was inevitably crushed by something heavy (there's only so long even the best players can keep juggling). I spent a little time tweaking the physics so that heavier items would feel more "weighted" when juggling and then I was happy!

It was the end of the first day and I had a complete game on my hands. It was very basic but it played and kept score. That gave me an entire day left to tweak and add polish!

# Day 2

No shopping for me on this morning. I woke up and (after some breakfast) went straight to work. It was time to polish this thing. First thing I did was draw more babies (as if I hadn't done this enough). I needed the baby to feel more alive, and to do that I needed to add some animation. So I added two more frames of the baby looking left and up at the potential death, then randomly switched between them.

Next I added plugs to the electrical items. This added nothing to the game but I thought it was a nice touch that people would appreciate. I also added some more objects into the mix and added a few frames for the items I thought could benefit from a little animation magic - namely the television and chainsaw. The game was coming together very nicely now and I was making great progress! Thought the game was missing one large aspect - sound!

While I had lunch I did some gathering of sound effects to put in my game. I did a lot of trimming and pitch shifting until I had something that could work. I stuck them in my game and suddenly it came alive! I always forget how much sound transforms a game and often underestimate just how important a part it is in the game development process. That having been said, I wasn't done yet. I still needed music! So I opened up my favourite audio editor and put together a little music track to play in the background of the game. I say little but what I really mean is that I spent a good two hours to get something together that I was happy with. I tried to make something in the style of [bossa nova](https://www.youtube.com/watch?v=T5ALPzS0QfQ) and while I think I'm in the right direction, I don't think I really nailed the feel I was going for. Still, it serves its purpose and I was happy with it when I finally got it in the game.

![Groovy](https://media1.tenor.com/images/dd0ea3869d565ba8abcd6af715fb4c33/tenor.gif?itemid=8009170)

Sound was almost done now, but I still had one thing to add - a mute button! I always add this in case people think my music is hot garbage and would rather play the game in silence. It doesn't take too much work to add and from what I've heard people appreciate the option so I always do it.

Finally with sound done, there was only 1 thing left to do! The room felt a little bare so I drew a back window to the room, some shelves and posters on the walls and some toys on the floor. However, when I added them to the game, I realised that it was suddenly too busy. It became much harder for me to differentiate the items that I needed to juggle from the objects in the background so I ended up actually removing everything except for the toys on the floor. An hour or two wasted, but no matter! 

My game was wrapped and I still had 5 hours to spare! I was immensely proud - this was unprecedented. I am normally scrambling up to the last second to get my entry submitted but this time around was smooth sailing. I went to bed at a decent hour, content with my efforts and submission. 

I think I owe a lot of this success to scope management. The game is disgustingly simple and thus took me only a few hours to get up and running, even when using a framework I'd never used before. Hopefully I can have a repeat success next time I jam!

![Image Title](/images/blog/junior-juggle.png)

[Play it here!](https://miltage.github.io/LD46/)  
[Ludum Dare Entry Page](https://ldjam.com/events/ludum-dare/46/junior-juggle)
