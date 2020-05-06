---
title: "Quarantino: My first game on Newgrounds in 7 years"
date: 2020-05-03
featured_image: /images/blog/quarantino.png
image_caption: Look at this guy just standing around waiting to be infected
tags:
  - blog
  - programming
  - game development
  - pixel art
  - newgrounds
---

We’re not ready for the next epidemic  
~ Bill Gates, 2015

This might sound like a doom-and-gloom blog post about the COVID-19 pandemic but it's not. It's about a small simulation I built around the theme of infection and the prevention thereof.

# Introduction

About a month ago a colleague linked me to a jam starting over on Newgrounds. A HaxeFlixel jam to be exact. What does that mean? It means the only requirement for the jam is that you build something using the HaxeFlixel technology.

# Okay, that's all good and well, but just what *is* HaxeFlixel?

So when a language and a framework love each other very much... Okay, let's rewind a few years.

![You boutta get schooled son](https://media1.tenor.com/images/5b04f7e51bd8659b985b8aa4f86ffedc/tenor.gif?itemid=4458347)

It's like 2009 or something and [Adam Saltsman](http://adamatomic.com/) is making pixel art Flash games. Now Flash was designed to make vector art animations and pixel-perfect games were tricky to get exactly right, so Adam devises a framework that took a lot of the stress out of setting up such a project, letting the user focus on actually making the damn thing. He calls it Flixel (a portmanteau of **Flash** and **pixel**) and uses it to create the very-successful Flash game [CANABALT](https://www.newgrounds.com/portal/view/510303) (which I played endlessly when I should have been working). He then shares this framework and it becomes a stample for pixel art Flash games on the web.

Fast forward about 8 years and Flash is on its deathbed. Apple makes the call to not support it on their devices and suddenly it was bye-bye to the beloved browser plugin that brought joy to many a teenager at the back of their computer class. HTML5 has arrived on the scene and bringing with it the canvas that can be used to make games that run straight in the browser without the need for a third-party plugin. Out with the old, in with the new, I guess.

Also arriving on the scene is [Haxe](http://haxe.org/) - a cross-platform language which means it can compile the same codebase to every device (even HTML5). Haxe is very similar in syntax to ActionScript (which is Flash's scripting language) so transitioning to Haxe was a fairly painless task. Furthermore, there is a library called [OpenFL](https://github.com/openfl) that basically mimics the way Flash renders objects on screen. This made it very easy for people who were familiar with building games in Flash to switch to building in HTML5, and providing them with a way to effortlessly port their game to other platforms in the process!

It only made sense then, to port the Flixel framework to [Haxe](http://haxe.org/) for people to use there. And that's how [HaxeFlixel](https://haxeflixel.com/) came to be!

# Cool tangent bro. Back to the game, please?

Right. So it's present day and Newgrounds are hosting a [HaxeFlixel jam](https://www.newgrounds.com/bbs/topic/1450269) with the theme *Together, Alone*. It's vague enough that it doesn't have to be about the virus and quarantine, but then they say in the announcement post that it is if you want it to be, so I decided to make a game I had bouncing around in my head since this virus began its global body-hopping. I would call it *Quarantino* and I could use it to spread a positive and informative message about the importance of self-isolation and social distancing during these crazy times.

It works thusly: you have a crowd of people, one of them has the virus and when they come into close quarters with another they spread that virus. Your job is to curb this infection by drawing barriers to isolate groups of people, effectively quarantining the infected.

When I was a child I had a game called [JezzBall](https://en.wikipedia.org/wiki/JezzBall) on my old Windows 98 machine. The concept of this game was similar, you had to isolate a number of bouncing balls into smaller and smaller sections on the screen by drawing lines. In this game, if a ball touched a line while it was in the progress of being drawn, you would lose a life, and that's where the real challenge came in. I intended for the barriers to work the same in Quarantino but when it came down to it, I quickly realised how difficult this would be for the player — on some levels I have up to 100 people moving around.

![JezzBall](https://media.giphy.com/media/zjGwLfNneurfy/giphy.gif)
*JezzBall GOTY 1995 edition*

# Building the thing

The first two weeks were the most productive. Even though we're in lockdown, I am still working full time, so the only time I could afford to spend working on the game was a few hours here and there on evenings and weekends. The most time consuming parts for me were getting the lines drawing correctly (specifically calculating when the intersect) and animating the walking guys. For the pixel art I bought a piece of software called [Aseprite](https://www.aseprite.org/) which is designed from the ground up for creating pixel art (even the interface itself boasts an old school aesthetic). Never having used this before, and not having animated anything in a good long while, I was a little slow to get going. Luckily I only had the one character in the game or this might have been even more of a time sink.

Because [I had just started streaming](/blog/hello-twitch), I took a stab at streaming a lot of the game's development. This went pretty well. I never really had a lot of activity but did occassionally have a viewer wander in to ask me questions about the process and provide some live feedback. In fact, the idea to have obstacles in the level to provide an extra bit of difficulty came from a suggestion by one such viewer. The only downside to streaming is that I sometimes get distracted talking to viewers and lose a little productivity. Still, I think the pay-off is well worth it.

![Progress](/images/blog/quarantino1.gif)

# HTML5 woes

So while [HaxeFlixel](https://haxeflixel.com/) built nicely for desktop (which I was using to test as I went along), when I tried a build for HTML5 which was to be my final build platform, I found that my game was crippled by drawing errors. Very annoying. I took to the Haxe Discord server to ask for help but no one there could offer any assistance. I did some debugging and discovered that the issue came in when tinting my sprites to different colours. This is a technique I use to differentiate infected people from others, tinting the sprites red when a person becomes infected. Seems like this causes issues on WebGL, so I had no choice but to find a workaround before I could upload the final product.

![Annoyed](https://media.tenor.com/images/55998b2722e985c40443eae54ef7c03e/tenor.gif)

After the initial two weeks of development it was suddenly [Ludum Dare](https://ldjam.com) weekend so all my time and focus went to [creating a game for that jam](/blog/ludum-dare-46) instead (and playing other people's games in the following week).

# Final push

With the deadline for this jam looming, it was time to shift my focus back and wrap this thing up. One evening when I was a little too tired to entertain on stream I spent an evening making an 8-bit track for the game. I figured that would match my pixel art aesthetic nicely. I still need to get better at music production for my jam games, but this was really good for practice. I feel like I'm only scratching the surface of what FL Studio can do, but like most things, that will come with time.

At this point I had a game but no content, so I slapped 5 small levels together and tweaked the variables until I found I had a good progression of complexity and difficulty. On the final day of the jam I added a mechanic where lines disappear after a short amount of time, but then when playing the level I decided that it detracted from the game's experience too much so I removed it at the last minute.

![Progress 2](/images/blog/quarantino2.gif)

Then I still had the HTML5 rendering issues to fix... So my solution was to ditch the tinting of sprites and manually draw sprites of the required colours. This was a very tedious as I had to duplicate all the frames of my existing walk cycle and change the white to the respective colours. Then I had to painstakingly import all those extra frames into the game. About 1.5 hours of extra time, but at least the bug was fixed and my game was working in the browser!

Finally, after I just-one-last-thing'd for 4 hours I was confident that it was ready, so I fetched my girlfriend to give it a playthrough. This is always super useful to me because she is not a gamer at all and it becomes immediately apparent where my game lacks in intuitiveness and ease-of-use. Also, she picked up like 5 bugs just playing through the levels while I watched, so there was that!

Luckily these were super quick and simple to fix and 15 mins later I had a final build of the game, ready for release!

![Done](https://media1.tenor.com/images/136d01bc682dcbc7b4963fd81f8ec57f/tenor.gif)

# Submitting

So I haven't submitted a game to [Newgrounds](https://www.newgrounds.com) in 7 years, this was kinda a big deal for me. With trembling fingers I typed in the address bar... okay, maybe not *that* big of a deal, but still, I was pretty excited! 

Over the next few days the reviews and ratings trickled in. Lots of positive feedback, only major complaint seems to be the lack of content, which is fair. The game is on the smaller side and there isn't much 'meat' to it, but it was important for me to finish it and get something out there. There was more than one occassion during this game's development where I considered abandoning because I didn't feel it was 'good enough', but I'm glad I pushed to finish and upload it.

![Newgrounds](/images/blog/ng-banner.jpg)

I'm super keen now to get a bigger game polished up for Newgrounds. Watch this space!

[Play it here](https://www.newgrounds.com/portal/view/753674)

# Update

[The results are in!](https://www.newgrounds.com/bbs/topic/1451690) Quarantino placed 6th in the jam and won $125! (Not bad for such a small game)
