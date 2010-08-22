function addFamilyItems() {
  addFamilyItem(1, { tileset: 'family_items', x: 4, y: 4 });
  addFamilyItem(2, { tile_frame: 1, tileset: 'family_items_2', x: 30, y: 30 });
}

function addFamilyItem(id_num, settings) {
  gbox.addObject({
    id:            'first_family_item_' + id_num,
    group:         'family_items',
    tileset:       settings ? settings.tileset : 'family_items',
    tile_frame:    settings ? (settings.tile_frame || 0) : 0,

    initialize: function() {
      toys.topview.initialize(this, { x: TILE_WIDTH * settings.x, y: TILE_WIDTH * settings.y });
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
        alpha:   this.alpha || 1.0
      });
    },

    pickedUp: function() {
      console.log("Picked up");
      player.addFamilyItem(this);
    }
  });
}