function addWorkplaces() {
  addCow('cow_1', 12, 8, { fliph: true });
  addCow('cow_2', 42, 24);
}

function addCow(id, x, y, settings) {  
  gbox.addObject({
    id:         id,
    group:      'workplaces',
    tileset:    'cow',
    colh:       gbox.getTiles('cow').tileh,
    tipped:     false,
    fliph:      settings ? settings.fliph : false,

    initialize: function() {
      toys.topview.initialize(this, { x: TILE_WIDTH * x, y: TILE_WIDTH * y });
    },

    blit: function() {
      gbox.blitTile(gbox.getBufferContext(), {
        tileset: this.tileset,
        tile:    this.frame,
        dx:      this.x,
        dy:      this.y,
        fliph:   this.fliph,
        flipv:   this.tipped,
        camera:  this.camera,
        alpha:   1.0
      });
    },

    tip: function() {
      if (this.tipped) {
        console.log("Tipped!");
        this.tipped = false;
      } else {
        console.log("Un-tipped!");
        this.tipped = true;
      }
    }
  });
}