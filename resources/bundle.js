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
		['family_items',    'resources/family_items.png'],
		['boss_face',       'resources/boss_face_1_64.png'],
		['boss_face_2',     'resources/boss_face_2_64.png'],
		['boss_face_3',     'resources/boss_face_3_64.png'],
		['boss_face_4',     'resources/boss_face_4_64.png'],
		['boss_face_5',     'resources/boss_face_5_64.png'],
		['boss_face_6',     'resources/boss_face_6_64.png']
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
    id:      'boss_face_tiles',
    image:   'boss_face',
    tileh:   64,
    tilew:   64,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:      'boss_face_two',
    image:   'boss_face_2',
    tileh:   64,
    tilew:   64,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:      'boss_face_three',
    image:   'boss_face_3',
    tileh:   64,
    tilew:   64,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:      'boss_face_four',
    image:   'boss_face_4',
    tileh:   64,
    tilew:   64,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:      'boss_face_five',
    image:   'boss_face_5',
    tileh:   64,
    tilew:   64,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:      'boss_face_six',
    image:   'boss_face_6',
    tileh:   64,
    tilew:   64,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:     'family_items',
    image:  'family_items',
    tileh:   32,
    tilew:   32,
    tilerow: 1,
    gapx:    0,
    gapy:    0
  }, {
    id:     'family_items_2',
    image:  'family_items',
    tileh:   32,
    tilew:   32,
    tilerow: 1,
    gapx:    32,
    gapy:    0
  }
  ]
}