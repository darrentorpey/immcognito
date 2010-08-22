function addFamilyItems() {
  addFamilyItem();
  addFamilyItem();
}

function addFamilyItem() {
  gbox.addObject({
    id:            'first_family_item',
    group:         'family_items',
    tileset:       'family_items',

    initialize: function() {
      toys.topview.initialize(this, { x: TILE_WIDTH * 4, y: TILE_WIDTH * 4 });
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