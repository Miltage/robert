---
title: "Global Game Jam 2020"
date: 2020-02-06
featured_image: /images/blog/ggj-logo.png
image_caption: Global Gam Jam
tags:
  - blog
  - programming
  - game jam
  - game development
---

"Boy, I sure do love my Cybertruck!"  
~ Elon Musk (probably)

[Global Gam Jam](http://globalgamejam.org) was here again last weekend, and though I'd partaken a few times before, this year I did things a little differently.

Usually, everyone (all the jammers, that is) meets at a predetermined location for the theme reveal. Once revealed, ideas are formed and pitches are made to the room in the hopes of recruiting team members to your brilliant (to you, at least) game idea.

This time, however, I had been chatting to Jonathan a few weeks prior. Jono is a young, avid programmer I met at a previous workplace and e had never done any game development before, but was interested in learning, so I suggested we form our own little team of two and enter the jam. Super keen, he jumped at the idea and plans were quickly made for the weekend.

## Preparation

The apartment can get a little cramped if you're cooped up in there for too long, so I secured the offices of my company in Woodstock for us to jam in. It was there where we would be spending most of our time, going home only to sleep.

Having built Jetstream in [Haxe](https://haxe.org/) for 3 years, this used to be my weapon of choice for game jams, owing to my familiarity with the framework. This time around though I had just spent a week building a game prototype in [Three.js](https://threejs.org/) and thought it would be a great idea to use it for the jam. Web builds are my favourite format because they're super accessible - everyone has some form of modern web browser.

I made plans with Jono to meet the weekend before so we could set up a repo and some boilerplate code, sparing us the time it would take to arrange those things during the jam. I also took this opportunity to familiarise him with [Three.js](https://threejs.org/) a little.

## Friday

Finally, the time came for the jam. At some point during the week I got roped into a board games evening at work that I couldn't get out of (I had already bailed on board games evening two weeks earlier *and* they had moved this to accommodate me) so I didn't actually go to the local theme reveal. That meant I couldn't be there for the pitches and team forming either.

No matter though, I already had a team of two planned, so I would just have to wait until Saturday morning when they put the theme online to start jamming.

## Saturday

Jonathan arrives at my place and we pop over to the shop for some snacks to keep us going. (I ate so badly this weekend... Chips, coke and two separate Uber Eats orders of burgers and nachos.) We were at the office by 8 and quickly set about coming up with a game idea. This year's theme was *"Repair"* and we went through the usual ideas of robots repearing themselves to the more outlandish (at one point were were talking about a French Grim Repear - *Repeare*).

After about 15 minutes of deliberation we settled on something. A racing game where your car constantly breaks down and you have to repair it! Although that was too ambitious for a weekend project for two, so we trimmed the fat considerably, dropping the racing component altogher. Instead, you would steer a car down a highway that is riddled with potholes. Running over potholes would cause damage to your vehicle. Along the road you collect coins. You could then spend those coins repairing your car. And that was it! It wasn't particularly flashy or exciting, but I had learned over the years that big ideas get you half-finished, buggy games. Seriously, scope management is the greatest skill at any game jam.

That's not to say that the scope didn't creep at all, though. We were, of course, going to need other cars on the road. And how about fuel that depletes as you drive? Then you would have to decide what to spend your valuable coins on. Fuel, or repairs? Doable, I thought, and it added a much-needed bit of complexity to our, frankly, bland game idea. I did have to talk Jono out of having a curved highway, though. Curved roads are cool and all, but I didn't want to be the guy to have to program AI cars to follow them.

So off we set in high spirits. Jono began modeling some vehicles while I tackled the generation of roads. Neither of us having particularly strong 3D modeling skills (read: none), we had to construct all the game objects out of hard-coded primitive shapes. On the one hand, this was cool because it gave us a truly assetless game. On the other hand... it was a lot tougher to build some of the more complex models (poor Jono spent 2 hours trying to get some bezier curves looking right).

While modeling the car for the game, he realised that the recently-announced Cybertruck would actually be easier to model than your standard car. Enter the idea to make the game Elon-themed! Suddenly we were joking about having ol' Musky himself feature in the game, running across the road randomly or hanging out the cybertruck. Maybe even a billboard every so often that featured a different Musk-meme (of which there is no shortage). Sadly, none of these things made it into the game in the end.

![The Cybertruck IRL](/images/blog/cybertruck-irl.jpg)

So as Jono set about modeling his Cybertruck I sat tackling the problem of generating a road with holes in it. Building a model out of primitive shapes is one thing, but when those models are concave? Well, I had no idea how to even go about that using code. I was properly stumped for a short while, before I had an idea. I would generate a plane of segments, then using a noise function, raise and lower each vertex by some calculated amount. This left me with something that resembled more hilly terrain than a corroded highway, but all I had to do was cap any value over 0, leaving only a flat plane with sporadic troughs. Almost there. I only needed to colour each vertex based on its height and *voila!* Highway generated! First problem solved! (There would be many more. Many, many more.)

![Pothole generation](/images/blog/pothole-generation.png)

Next thing we suddenly got hit with load shedding. For any international readers, this is a phenomenon in South Africa where electricity is periodically cut for 2 hours at a time in an effort to ease the load on our less-than-stellar power supplier. While our laptops ran on batteries and we could continue working to some degree, there came a time when my next task was to implement a physics library and without an internet connection that was impossible, so I found myself sitting and waiting for the power to come back on. We played a lot of ping pong. We also took a trip to the rooftop to enjoy the sunset.

![Woodstock Sunset](/images/blog/woodstock-sunset.jpg)
*The new WEX apartment building seen here in all its glory.*

The few hours after that saw me becoming quite frustrated with physics code. While Jonothan continued to model the other vehicles in our game, I was just trying to get a physics body to rotate on input, which proved *way* tougher than it should have. When you have a finite amount of time, it's very hard not to get frusted when you waste 3 hours on something that *should* take 20 mins. Sadly, trigonometry and 3D math in general are not my strong points, and if I plan to spend more time working in 3D I am going to have to brush up those skills.

Eventually, I cracked it. I had a car driving, turning and colliding with traffic. The driving physics were far from perfect - the car felt more like it was driving on ice than asphault - but having spent enough time tackling the problem, it was time to move on. As I often find myself proclaiming during game jams: *This will have to do!*

It was dark outside now, and my eyes were starting to hurt. I knew we'd have to call it a day soon. After I added coins for collecting, I made it my last task to have the car take damage from the potholes on the road, but again, that was proving more of a challenge than I had originally anticipated. After struggling for an hour, I glanced at the clock. It was after midnight. Tired, irritable, and finding it hard to think, I decided we'd have to call it a night. We closed up the office and drove home to catch a few hours sleep.

![Cybertruck dodging traffic](/images/blog/ggj20-ss1.png)
*What we had at the end of the first day.*

## Sunday

We woke up early with fresh energy (it's amazing what a few hours of sleep can do) and returned to the office just before 8am to commence work on the second (and last) day of the jam. We still had quite a lot to do and only \~10 hours to work with, so we set goals for ourselves - what would we like to accomplish and by when? This helped us stay on track a little.

I started by trying to wrap up the pothole collision code I was working on the night before while Jono slapped together a UI. Because we were writing for the browser, we found that we could add HTML and CSS over our game. Jonothan has a fair bit of web development skills, so this was handy for us. Before too long we had a decent-enough looking interface with menus that you can click through, even though we didn't have a proper game loop set up yet. There wasn't a win or lose condition - you could collect coins but not spend them. We didn't even have a repair station. *That was a core part of the gameplay!* It's hard not to panic and wonder if you're going to get everything done on time. I was very grateful to have Jono there to take on some of the tasks and alleviate the pressure.

We worked on separate branches on our repo, pushing and pulling code as we needed. This worked pretty well. Merge conflicts were inevitable and I was expecting them, but they were surprisingly few and far between. Combining our efforts was relatively painless.

Soon it was noon (where does the time go??) and we reconvened to discuss our development strategy. Jono was given the tasks of modeling the station and hooking up the half-finished UI to actual in-game values (which was kinda just sitting there being useless - the UI, that is, not Jono) while I added some much-needed polish to the game. We had about 5 hours left. It was crunch time. Go! Go!

![Jonothan at work](/images/blog/ggj20-jono.jpg)
*Our workstations, with Jono pictured here hard at work.*

I began adding some finer details to the game, like the wheels rotating when you turned the car, and the vehicles flashing red when they took damage. How about a little particle engine so your car billows plumes of white smoke when you take too much damage? *Sure, why not?* Adding polish is probably my favourite part of the experience. Without too much effort you can make great strides towards something that *feels* a lot more like a finished product than a hacked-together prototype. I even added a minor detail where the wheels on the car drop into potholes as you drive over them. I'd wager my month's salary that not a single person who played the game noticed that, but it made me happy.

![Gameplay GIF](/images/blog/cybertruck-wheels.gif)
*Awww yisss!*

Next I plugged in Jonothan's now finished station and added some physics code so that you couldn't just drive through it like a ghost car. I also added a check for when the car was in the station so that Jono could just plug the menu logic in there. I looked over at Jono's screen and he had somehow got himself lost in the unforgiving labrynth that is mathematics. I think the poor guy spent 2 hours trying to draw a curved road with bezier curves, which would probably have been a cinch in an actual 3D modeling program. Curse our lack of modeling skills! Having been stuck on math the day before, I sympathised. He got there in the end, but that didn't leave much time for us to wrap things up.

![Cybertruck at station](/images/blog/ggj20-ss2.png)
*Flat colours are in, right?*

We suddenly had only an hour left to pull everything together.  
*Panic stations, everyone!*  
I had to add sound to our completely silent game. I *had* to, right? Nobody wants to play a silent game. I scoured the web for sounds - trimming and tweaking where need be - and plonking them in the right place. I must say, the sound *did* make a world of difference, and I found my last hour was time well spent, despite not a single person in my office playing the game with their sound on...

Jonothan had to hook up the UI menus. And this time, I mean *had to*. Without that, there literally was no game. While he was busy with that, I made the quickest and easiest cover image I've ever made in my life. I decided on a title for our little project, then found an online generator for 80's themed text and photoshopped Elon Musk onto it. Like, 2 minutes tops. I'm not actually sure people *didn't* enjoy that more than the game, to be honest.

![Elon Musk's Cyber Dream](/images/blog/elon-musk-cyberdream.png)
*The generator wouldn't accept apostrophes. Don't @ me.*

5pm rolled around and we finished *just* in time. I made a build of the game and got it up and running on Github Pages so that it could be accessed and played online. We cleaned up the Doritos bags and polystyrene cartons that we had collected and scattered over the 48 hours and locked the office up behind us for last time, making our way over to the Vega school to present.

We got there just before 6pm, which was when I expected everyone to start presenting their finished projects but when we arrived I found the atmosphere... lethargic. Nobody was crunching or racing to complete like we had, or at least, it didn't seem that way. When I enquired about the start time of the presentations I was told "when everyone's ready". I guess we needn't have raced to finished after all. We eventually kicked off presentations around 7pm or just after, but the wait did give us enough time to add another feature to the game before showing it off. A win for us!

When you get past the technical difficulties that come hand-in-hand with connecting a dozen different laptops to the same projector with quick succession, you can really start to appreciate the work that went into those buggy prototypes that flash briefly up in front of you for a few minutes while its creator nervously searches for words to justify the images before you. People working together to create something is rare, wonderful, and should always be encouraged, regardless of medium.

And we saw it all, too, from a game about mating pandas to a [bird trying to fix his penny farthing](https://nothingexploded.itch.io/penny-farthing). The creativity on display was seemingly boundless.

We went up second and received a decent response to our game, but I wasn't entirely happy with my presentation. Never having been good at speaking off the cuff, I forgot to mention cool things like the tech we'd built it on, or the fact that all our models were painstakingly hardcoded, or showing off the little detail that your cybertruck beeps like an actual truck when backing up. We did get a laugh though when Jono, who was demonstrating, crashed into the side of a bus and a sad trombone played over a 'game over' screen.

![Gameplay GIF](/images/blog/cybertruck-gameplay.gif)
*Actual gameplay footage.*

When all was said and done, we went home exhausted, but accomplished, men and women.

## Final thoughts

This was Jonothan's very first game jam and he did incredibly well. For someone who had little to no game dev experience, he was a tremendous help. I'm proud of us for committing ourselves to the long work hours over the weekend and putting something half-decent together.

We could haved probably saved ourselves a lot of time and headaches by using better tools. Next time I think we'll use actual modeling programs and maybe a game engine that handles the more complicated math for you. There really just isn't time during a jam to be stuck scratching your head for several hours over a few lines of code. You need to be constantly making progress, or you can quickly lose motivation and optimism. I'm of the opinion that you should have a 100% completed game loop by the end of the first day, then you have the second day to tweak and polish. There have been a few times now (including this weekend) where the game only just comes together in the end and you realise that it's not all that fun to play. This can usually be fixed with some balancing tweaks, but when you're supposed to be submitting in 15 minutes, there just isn't the time.

I will also say that I don't know if game jams are such a good idea for me anymore. When I was younger (read: unemployed), I had no problem pulling an all nighter to finish my ambitious weekend project, then spend a day or two recuperating, but nowadays that's just not feasible (or healthy!). These jams can get super stressful for me when I'm racing against the clock to finish all my planned features, and when my weekends are supposed to be my time off from the stress of my regular 9-to-5, I have to stop and wonder, why do I do them at all? 

Maybe I need to tackle smaller projects? My ideas have scaled down dramatically in size of the years, yet I still end up crunching. Maybe I need bigger teams to spread out the workload? Managing teams and delegating tasks is work on its own, though. All I know is that if I hadn't roped Jonothan into being on my team, and if I didn't think I would have disappointed him by doing so, I probably would have thrown in the towel on Saturday night and taken Sunday to just sleep and relax because at that low point I really didn't feel that all this hard work was worth it.

I realise I'm sounding pretty negative right now, but I don't mean to. I will continue to jam, I just need to find better ways to manage my stress and workload under such short deadlines.

Jono and I will team up again for another jam, I'm sure of it, but before we do I'm going to need at least a few weekends off.

[You can play the finished game here.](https://the-feature-creep.github.io/GGJ20/)