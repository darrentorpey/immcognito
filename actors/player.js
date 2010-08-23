// This is our function for adding the player object -- this keeps our main game code nice and clean
function addPlayer() {
  gbox.addObject({
    id:         'player_id',
    group:      'player',
    tileset:    'player_tiles',
    colh:       gbox.getTiles('player_tiles').tileh,
    doing_work: false,

    initialize: function() {
      toys.topview.initialize(this, {});
      this.x = TILE_WIDTH * 2;
      this.y = TILE_WIDTH * 2;

      // Here we define the list of animations. We can name these whatever we want.
      // These are referenced with this.animList[id].
      // So for example, this.animList[rightDown].frames[1] would return 12.
      this.animList = {
        still:     { speed: 1, frames: [0]     },
        moving:    { speed: 1, frames: [0, 1, 2, 3, 4, 5, 6, 7] }
      };

      // Set the starting animation for the player object.
      this.animIndex = 'still';
    },

    first: function() {
      toys.topview.controlKeys(this, { left: 'left', right: 'right', up: 'up', down: 'down' });

      if (this.doing_work && (toys.timer.after(this, 'work_time', 30) == toys.TOY_DONE)) {
        this.done_doing_work();
        boss_happiness++;
      }

      // The if statements check for accelerations in the x and y directions and whether they are positive or negative. It then sets the animation index to the keyword corresponding to that direction.
      if (this.accx == 0 && this.accy == 0) this.animIndex = 'still';
      else this.animIndex = 'moving'

      // if (this.accx > 0 && this.accy == 0)  this.animIndex = 'right';
      if (this.accx > 0 && this.accy > 0)   this.flipv = true;
      if (this.accx == 0 && this.accy > 0)  this.flipv = true;
      if (this.accx < 0 && this.accy > 0)   this.flipv = true;

      // if (this.accx < 0 && this.accy == 0)  this.animIndex = 'left';
      if (this.accx < 0 && this.accy < 0)   this.flipv = false;
      if (this.accx == 0 && this.accy < 0)  this.flipv = false;
      if (this.accx > 0 && this.accy < 0)   this.flipv = false;

      if (gbox.keyIsHit('a')) {
        gbox.playAudio("happy");

        var intro = gbox.getObject('game', 'intro_screen');
        if (intro) {
          gbox.trashObject(intro);
        }

        if (any(adjacentTiles(help.xPixelToTileX(map, this.x), help.yPixelToTileY(map, this.y), map), function(i) { return i == 1 })) {
          findNearestWorkplace(this).tip();
          this.start_doing_work();
        }
      } else if (gbox.keyIsHit('b')) {
      } else if (gbox.keyIsHit('c')) {
        findNearestWorkplace(this).tip();
        this.done_doing_work();
      }

      // Set the animation.
      if (frameCount % this.animList[this.animIndex].speed == 0)
        this.frame = help.decideFrame(frameCount, this.animList[this.animIndex]);

      if (this.can_move()) {
        toys.topview.handleAccellerations(this);
        toys.topview.applyForces(this);
        toys.topview.tileCollision(this, map, 'map', null, { tollerance: 6, approximation: 3 });
      }

      // New code for Part 7
      callWhenColliding(this, 'family_items', 'pickedUp');

      updateHUD();
    },

    can_move: function() {
      return !this.doing_work;
    },

    start_doing_work: function() {
      toys.resetToy(this, "work_time");
      this.doing_work = true;
    },

    done_doing_work: function() {
      toys.resetToy(this, "work_time");
      this.doing_work = false;
      findNearestWorkplace(this).tip();
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

    addFamilyItem: function(item) {
      // console.log("adding item to me...");
      item.alpha = 0;
      maingame.hud.pushValue("family_collection", "value", item.frame);
      gbox.trashObject(item);
    }
  });

  return gbox.getObject('player', 'player_id');
}

function adjacentTiles(x, y, map) {
  tiles = [];

  tiles.push(map.getTile(x - 1, y - 1));
  tiles.push(map.getTile(x,     y - 1));
  tiles.push(map.getTile(x + 1, y - 1));
  tiles.push(map.getTile(x + 1, y));
  tiles.push(map.getTile(x + 1, y + 1));
  tiles.push(map.getTile(x    , y + 1));
  tiles.push(map.getTile(x - 1, y + 1));
  tiles.push(map.getTile(x - 1, y));

  return tiles;
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

function findNearestWorkplace(obj) {
  var places = gbox.getGroup('workplaces');
  var best_dist = 100000;
  var closest = null;
  var group = 'workplaces';

  for (var locationName in gbox.getGroup(group)) {
    var place = gbox.getObject(group, locationName);
    var distance = trigo.getDistance({ x: obj.x, y: obj.y }, { x: place.x, y: place.y })

    if (distance < best_dist) {
      best_dist = distance;
      closest = place;
    }
  }

  return closest;
}
