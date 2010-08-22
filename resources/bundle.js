{
	// Graphic resources.
	addImage: [	
		['font',            'resources/font.png'],
		['logo',            'resources/logo.png'],
		['player_sprite',   'resources/immigrantAtlas.png'],
		['map_spritesheet', 'resources/map_pieces.png'],
		['enemy_sprite',    'resources/enemy_sprite.png'],
		['player_bullet',   'resources/bullet.png'],
		['sprites',         'resources/explode.png'],
		['cow',             'resources/cow_1.png'],
		['gameOverScreen',   'resources/gameOver.png']
	],

  addFont: [
    { id: 'small', image: 'font', firstletter: ' ', tileh: 8, tilew: 8, tilerow: 255, gapx: 0, gapy: 0 }
  ],

  addTiles:[
   { id: 'cow', image: 'cow', tileh: 64,tilew: 64, tilerow: 1, gapx: 0, gapy: 0},
   {
    id:      'player_tiles',
    image:   'player_sprite',
    tileh:   20,
    tilew:   20,
    tilerow: 19,
    gapx:    0,
    gapy:    0
  }, {
    id:      'map_pieces',
    image:   'map_spritesheet',
    tileh:   16,
    tilew:   16,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, { // New for Part 5, adding the enemy sprite
    id:      'enemy_tiles',
    image:   'enemy_sprite',
    tileh:   16,
    tilew:   16,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:      'gameOver_tile',
    image:   'gameOverScreen',
    tileh:   640,
    tilew:   480,
    tilerow: 1,
    gapx:    0,
    gapy:    0  
  }
  ]
}
