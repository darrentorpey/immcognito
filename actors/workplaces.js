function addWorkplaces() {
  addCow('cow_1', 12, 8, { refresh_speed: 50, fliph: true });
  addCow('cow_2', 42, 24, { refresh_speed: 20 });
}

function addCow(id, x, y, settings) {  
  gbox.addObject({
    id:            id,
    group:         'workplaces',
    tileset:       'cow',
    colh:          gbox.getTiles('cow').tileh,
    tipped:        false,
    fliph:         settings ? settings.fliph : false,
    ready_to_work: false,
    being_worked:  false,
    refresh_speed: settings ? settings.refresh_speed : 40,

    initialize: function() {
      toys.topview.initialize(this, { x: TILE_WIDTH * x, y: TILE_WIDTH * y });
    },

    first: function() {
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

      if (!this.ready_to_work) {
        gbox.blitRect(gbox.getBufferContext(), { x: this.x, y: this.y, w: this.colh, h: this.colh, alpha: 0.8, color: "rgb(100,100,100)" });
      }
    },

    tip: function() {
      if (this.tipped) {
        this.untip();
      } else {
        this.tipped = true;
        this.being_worked = true;
      }
    },

    untip: function() {
      this.tipped = false;
      this.being_worked = false;
      this.ready_to_work = false;
      toys.resetToy(this, 'tip_time');
    }
  });
}