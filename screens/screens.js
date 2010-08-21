function introScreenAnimation(reset) {
  if (reset) {
    toys.resetToy(this, 'rising');
  }

  gbox.blitFade(gbox.getBufferContext(), { alpha: 1 });

  toys.logos.linear(this, 'rising', {
    image: 'logo',
    sx:    gbox.getScreenW()/2 - gbox.getImage('logo').width/2,
    sy:    gbox.getScreenH(),
    x:     gbox.getScreenW()/2 - gbox.getImage('logo').width/2,
    y:     20,
    speed: 3
  });
};