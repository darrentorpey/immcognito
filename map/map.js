function loadMap() {
  return help.asciiArtToMap([
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"xxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"x                                      x",
"x                                      x",
"x                                      x",
"x                                      x",
"xxxx     xxxxxxxxxxxxxxxxxxxxxx     xxxx",
    ], [ [null, ' '], [0, 'x'] ])
}

// This is our function for adding the map object -- this keeps our main game code nice and clean
//  For Part 4, we're adding the "followCamera" line you see in here
function addMap() {
  gbox.addObject({
    id:    'background_id', // This is the object ID.
    group: 'background',    // We use the 'backround' group we created above with our 'setGroups' call.


    first: function() {
      // Increment the global frame counter.
      frameCount++;
    },

    // The blit function is what happens during the game's draw cycle. Everything related to rendering and drawing goes here.
    blit: function() {
      // First let's clear the whole screen. Blitfade draws a filled rectangle over the given context (in this case, the screen)
      gbox.blitFade(gbox.getBufferContext(), { alpha: 1 });

      // Figure out how many seconds have elapsed since the game started
      //  we divide by 1000 because the number given is in milliseconds
      secondsElapsed = ((new Date()).getTime() - timeStarted) / 1000;

      // Calculate the number of full seconds that have passed, subtract that
      //  from the total number of seconds the player must survive, and
      //  update the timer HUD element with that value, then tell the HUD to redraw
      maingame.hud.setValue('time_survived', 'value', Math.ceil(secondsElapsed));
      maingame.hud.redraw();

      // Since we blitted the tilemap to 'map_canvas' back in our main function, we now draw 'map_canvas' onto the screen. The 'map_canvas' is
      //  just a picture of our tilemap, and by blitting it here we're making sure that the picture re-draws every frame.
      gbox.blit(gbox.getBufferContext(), gbox.getCanvas('map_canvas'), { dx: 0, dy: 0, dw: gbox.getCanvas('map_canvas').width, dh: gbox.getCanvas('map_canvas').height, sourcecamera: true });
    }
  });
}