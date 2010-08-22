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