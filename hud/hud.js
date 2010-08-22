boss_happiness = 6;

function updateHUD() {
  if (timerJustFinished(player, 'piss_off_boss', 60)) {
    boss_happiness--;
    toys.resetToy(player, 'piss_off_boss');
  }

  if (boss_happiness == 6) {
    maingame.hud.w['the_boss'].tileset = 'boss_face_two';
  } else if (boss_happiness == 5) {
    maingame.hud.w['the_boss'].tileset = 'boss_face_two';
  } else if (boss_happiness == 4) {
    maingame.hud.w['the_boss'].tileset = 'boss_face_three';
  } else if (boss_happiness == 3) {
    maingame.hud.w['the_boss'].tileset = 'boss_face_four';
  } else if (boss_happiness == 2) {
    maingame.hud.w['the_boss'].tileset = 'boss_face_five';
  } else if (boss_happiness == 1) {
    maingame.hud.w['the_boss'].tileset = 'boss_face_six';
  }
}

function drawHUD() {
  // This adds a "label" widget, with "small"-font text to the screen
  //  located 25 pixels down from the top of the screen and
  //  40 pixels back from the right side of the screen
  maingame.hud.setWidget('time_survived', {
    widget: 'label',
    font:   'small',
    value:  0,
    dx:     gbox.getScreenW() - 40,
    dy:     gbox.getScreenH() - 25,
    clear:  true
  });

  maingame.hud.setWidget('the_boss', {
    widget:   'gauge',
    tileset:  'boss_face_tiles',
    value:    0,
    maxvalue: 100,
    minvalue: 0,
    value:    60,
    dx:       gbox.getScreenW() - 74,
    dy:       10
  });

  maingame.hud.setWidget('needs_label', {
    widget: 'label',
    font:   'small',
    value:  'Needs',
    dx:     gbox.getScreenW() - 60,
    dy:     gbox.getScreenH() - 225,
    clear:  true
  });

  maingame.hud.setWidget("family_collection", {
    widget: "stack", 
    rightalign: false,
    tileset: "family_items",
    dx:gbox.getScreenW() - 64,
    dy:gbox.getScreenH() - 184,
    gapx: 12,
    gapy: 0,
    maxshown:8,
    value: [] });
}