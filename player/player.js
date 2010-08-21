// This is our function for adding the player object -- this keeps our main game code nice and clean
function addPlayer() {
  gbox.addObject({
    id:      'player_id',    // id refers to the specific object.
    group:   'player',       // The rendering group
    tileset: 'player_tiles', // tileset is where the graphics come from.
    colh:    gbox.getTiles('player_tiles').tileh,

    initialize: function() {
      toys.topview.initialize(this, {});
      this.x = 20;
      this.y = 20;

      // Here we define the list of animations. We can name these whatever we want.
      // These are referenced with this.animList[id].
      // So for example, this.animList[rightDown].frames[1] would return 12.
      this.animList = {
        still:     { speed: 1, frames: [0]     },
        right:     { speed: 3, frames: [1, 11] },
        rightDown: { speed: 3, frames: [2, 12] },
        down:      { speed: 3, frames: [3, 13] },
        downLeft:  { speed: 3, frames: [4, 14] },
        left:      { speed: 3, frames: [5, 15] },
        leftUp:    { speed: 3, frames: [6, 16] },
        up:        { speed: 3, frames: [7, 17] },
        upRight:   { speed: 3, frames: [8, 18] }
      };

      // Set the starting animation for the player object.
      this.animIndex = 'still';
    },

    first: function() {
      toys.topview.controlKeys(this, { left: 'left', right: 'right', up: 'up', down: 'down' });

      // The if statements check for accelerations in the x and y directions and whether they are positive or negative. It then sets the animation index to the keyword corresponding to that direction.
      if (this.accx == 0 && this.accy == 0) this.animIndex = 'still';
      if (this.accx > 0 && this.accy == 0)  this.animIndex = 'right';
      if (this.accx > 0 && this.accy > 0)   this.animIndex = 'rightDown';
      if (this.accx == 0 && this.accy > 0)  this.animIndex = 'down';
      if (this.accx < 0 && this.accy > 0)   this.animIndex = 'downLeft';
      if (this.accx < 0 && this.accy == 0)  this.animIndex = 'left';
      if (this.accx < 0 && this.accy < 0)   this.animIndex = 'leftUp';
      if (this.accx == 0 && this.accy < 0)  this.animIndex = 'up';
      if (this.accx > 0 && this.accy < 0)   this.animIndex = "upRight";

      // Set the animation.
      if (frameCount%this.animList[this.animIndex].speed == 0)
      this.frame = help.decideFrame(frameCount, this.animList[this.animIndex]);

      toys.topview.handleAccellerations(this);
      toys.topview.applyForces(this);
      toys.topview.tileCollision(this, map, 'map', null, { tollerance: 6, approximation: 3 });

      // New code for Part 7
      callWhenColliding(this, 'enemy', 'gameOverFail');
    },

    blit: function() {
      gbox.blitTile(gbox.getBufferContext(), {
        tileset: this.tileset,
        tile:    this.frame,
        dx:      this.x,
        dy:      this.y,
        fliph:   this.fliph,
        flipv:   this.flipv,
        camera:  this.camera,
        alpha:   1.0
      });
    },
  });
}

function callWhenColliding(obj,group,call) {
  for (var i in gbox._objects[group])
    if ((!gbox._objects[group][i].initialize) && toys.topview.collides(obj,gbox._objects[group][i]))
      if (gbox._objects[group][i][call]) {
        gbox._objects[group][i][call](obj);
        return i;
      }
  return false;
}