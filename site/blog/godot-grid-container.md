---
title: "Building a custom layout for Godot's Grid Container"
date: 2021-10-14
featured_image: /images/blog/godot-gridcontainer.jpg
image_caption: 
tags:
  - blog
  - programming
  - godot
  - gamedev
---

Gain more control over your grid layout

Hey everybody! *Two blog posts this year??* Aren't we lucky!

Ever since I picked up [Godot](https://godotengine.org/) last year to make [this dodgeball game](/blog/sa-game-jam-2020/) I have been using it consistently to build both small prototypes and larger game projects. It took me a little time to grow accustom to their node-based architecture and GDScript, but now that I have I am finding that I can put things together very quickly. In fact, last week I found [this blog post](https://godotengine.org/article/how-actually-make-your-dream-game) that states that rapid prototyping is the very ethos of Godot, which makes a lot of sense now.

However, as useful as the pre-built nodes tend to be, sometimes you just can't get them to do exactly what you need, and that's what this blog post is about.

# The problem

So currently I am working on a prototype for a 3rd-person zombie shooter and I needed to display an ammo counter in the corner of the screen. Godot has a [GridContainer Node](https://docs.godotengine.org/en/stable/classes/class_gridcontainer.html) that would work nicely for this. All you need to do is set some values like number of columns and the space between the items, then when you add children to the node it automatically configures the layout to align them neatly in a grid.

And it does exactly that. It works pretty nicely actually.

![Grid Container](/images/blog/gridcontainer-1.gif)

The only issue is that I want to display this ammo counter in the bottom right corner of the screen, so I can't have it grow left-to-right top-to-bottom, but rather right-to-left bottom-to-top. This would be a big problem when switching weapons because they have different amounts of ammo. I tried manually repositioning the grid with code when the ammo count changed, but that turned out to be a massive headache.

![Grid Container](/images/blog/gridcontainer-3.gif)

I fiddled with the settings of the Node but couldn't find a way to get it to do exactly what I desired. The closest I could get was by changing the Grow Direction of the container to both be 'Begin'. This would right-align the contents of the container, but it was still growing top-to-bottom, so it was actually going off-screen which is _no bueno_.

![Grid Container Grow Direction](/images/blog/gridcontainer-options.jpg)

# The solution

I took a look at the source code for the Grid Container and found a way to configure my own custom layout by overriding the layout function.

This is the entirety of the script I added to my container. It actually turned out to be pretty simple solution.

```
extends GridContainer

func _notification(what):
	match (what):
		NOTIFICATION_SORT_CHILDREN:
			for i in get_child_count():
				var child = get_child(i)
				var hs = get("custom_constants/hseparation")
				var vs = get("custom_constants/vseparation")
				var row = floor(i / columns)
				child.rect_position = Vector2(i % columns * -hs, row * -vs)
```

I just loop through the children and give them a negative offset instead of their usual positive offset. I also made sure not to hardcode any values and still use the original variables of the Node, so I can adjust values easily by tweaking settings and not having to rewrite any code.

And just like that, the container now grows in the desired direction!

![Grid Container](/images/blog/gridcontainer-2.gif)

It even updates the ammo count correctly. I'm pretty happy with it. It could use a little more polish, maybe some animation as the values change, but that is beyond the scope of the prototype for now...

![Grid Container](/images/blog/gridcontainer-4.gif)

# Result

Here you can see the final ammo counter in context of the rest of the game, nestled snugly in the corner.

![Image Title](/images/blog/gridcontainer-screen.jpg)

And that's it!

As I continue to work with [Godot](https://godotengine.org/) I am continuously learning how to achieve results with the engine, so I will try to write more of these quick tutorial-style blog posts.

Until then, happy devving!
