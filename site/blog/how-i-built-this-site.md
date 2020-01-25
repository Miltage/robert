---
title: "How I built this site"
date: 2020-01-25
featured_image: /images/blog/code2.jpeg
image_caption: (not my actual code)
tags:
  - blog
  - site
  - programming
---

"Ask me what 9 x F is... It's Fleventy Five"  
~ Erlich Bachmann

So I kinda promised in my first blog post that I would write up a little piece about how I put this site together. So this is that piece. Promise fulfilled!

The time had come for me to revamp my site and I needed something that was simple for me to update without the clunky overhead of a CMS. After all, I am a programmer and probably more comfortable with a command line than some over-engineered GUI anyway. I decided a static site generator hosted on GitHub Pages was the way to go.

I had used Eleventy a few months earlier when I had worked on a friend's site and had had some success with it, so picked this as my weapon on choice.

## Setting Up

I was about to create an empty project when I noticed in the Eleventy docs a page called [Starter Projects](https://www.11ty.dev/docs/starter/). There I found a handy list of ready-to-go Eleventy projects with pre-made templates. I perused the list and stopped when I came upon [Skeleventy](https://skeleventy.netlify.com/). Simple layout, sleek typography and an attractive colour scheme - it's exactly what I needed. In fact, you will still see a lot of similarities between my site and the demo page - Skeleventy's visual aesthetic was already largely in the direction I was hoping to go, saving me hours of painstaking design work!

Still, a fair bit of the template had to be adjusted to fit my liking, but that starter project which gave me a massive leg-up and I was super pleased to have found it. I cloned the project and got to work.

## Customising

The first thing I did was remove all the unnecessary junk I didn't need like the header and footer. The second thing I did was add the sidebar that you see on every page. This is where the power of a templating engine really starts to shine. I only had to write the code once and then include it on every page like so:

`{% raw %}{% include "components/sidebar.njk" %}{% endraw %}`

When the static site files are generated, the sidebar component is injected into each page by the templating engine. That means any future changes to the sidebar would only need to be made in one place. Handy!

The only other major change I made was to the colour scheme, swapping out Skeleventy's pink for a nice shade of teal. Like I said - hours saved!

## Adding Content

## Hosting

## Conclusion