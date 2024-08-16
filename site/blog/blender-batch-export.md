---
title: "Blender batch export"
date: 2024-08-16
featured_image: /images/blog/blender-tiles.png
image_caption: Tiles for miles!
tags:
  - blog
  - programming
  - blender
  - 3D modeling
  - python
---

Here you will find a short script I have written for Blender which can batch export every model in a collection

When working on my solo game projects, I tend to model all the bits and pieces I need in Blender and then export them one by one to GLTF format to be imported into the Godot engine. Here's how that process works:

1. Select the desired model
2. Clear the model's transforms (reset to position to zero)
3. Export through the file menu
4. In the export menu, make sure 'Include: Selected Objects' is checked
5. Export
6. Ctrl + Z to undo the transforms reset

Quite the process! Now, this is not too bad when modelling/editing one object at a time, then I might only perform this process once an hour or half hour. Sometimes though I will make an edit that affects a bunch of models, which means I have to repeat this process 10, 20, maybe 30 times!

Eventually I decided _enough is enough_ and I sat down one evening to make a script to automate this process and do the tedious work for me.

```
import bpy
import os

# settings
collection = "collection name"
dest_folder = "path/to/export/folder"

# export everything
for obj in bpy.data.collections[collection].objects:
    if ("." not in obj.name): # exclude duplicates (you can remove this if you don't need it)
        # select this object
        bpy.ops.object.select_all(action='DESELECT')
        bpy.context.view_layer.objects.active = obj
        obj.select_set(True)
    
        # clear object location
        _loc = obj.location.copy()
        obj.location = (0,0,0)
        bpy.ops.export_scene.gltf(filepath=(dest_folder + obj.name + ".glb"), check_existing=False, use_selection=True)
        obj.location = _loc

```
In Blender, open the _Text Editor_ window (or use the one on the Scripting tab), create a new file and copy/paste this script in there. Change the variables to something that makes sense for your project and hit run. That's it!

This script only exports to GLTF filetype though, which is the file format I use in my games. If you want to export to something else, like FBX, you will have to change the script a little, but this will be a good starting point!

**Note:** I have a line in there that excludes duplicates (by default anything that has a "." in the name). It is useful to me because when making 3D tiles I like to duplicate them to see how they fit together and I don't want to export the same model a bunch of times. You can just remove this line if you don't need it.