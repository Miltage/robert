---
title: "Rendering separate objects in Blender 2.8 with a simple script"
date: 2020-06-01
featured_image: /images/blog/twitch-branding.jpg
image_caption: Image caption
tags:
  - blog
  - programming
  - blender
  - 3D modeling
  - python
---

Tagline or quote here

Lately I've been working on a side project that requires me to become more acquainted with the intricate art of 3D modeling, exporting and rendering. Now, I've dabbled in the 3D world before over the years, but being more of a 2D art kinda guy my 3D skills leave something to be desired. The last few weeks have seen me re-familiarising myself with concepts like sculpting, rigging and uv unwrapping, but this post is not about those things.

At one point in my process I found myself with 100 objects on 100 layers and having to render them each out to separate files. There was no way that I was going to do this manually, so I did some Googling about a scripting solution. There were a few solutions online, but all from several years ago now and with Blender's latest major release of 2.8 I just couldn't find one that was compatible. It was up to me to write a solution of my own.

```
code sample here
```

Simply set up your destination folder and some render settings and the rest is magic. You can choose to render only your selected objects or an entire collection (which was a better fit for my project).

No more manually rendering and saving. With this simple script I can click a button and have all my layers exported to their own files in a matter of seconds!