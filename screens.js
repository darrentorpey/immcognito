function introScreenAnimation(reset) {
  gbox.blitFade(gbox.getBufferContext(), { alpha: 1 });

  gbox.addObject({
    id:            'intro_screen',
    group:         'game',
    tileset:       'intro_screen_it',

    initialize: function() {
      toys.topview.initialize(this, { x: 0, y: 0 });
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
    }
  });
};

function gameOverScreen() {
  gbox.addObject({
    group:   'player',
    id:      'gameOverScreen_1',
    tileset: 'gameOver_tile', 
    x: 0,
    y: 0,

    initialize: function(){
        toys.topview.initialize(this, {});
        this.x = 0;
        this.y = 0;
    },

    first:function(){
      // Button press to reset game?
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
    }
  });

  return true;
}