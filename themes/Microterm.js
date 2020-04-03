// iTerm 2 Default ANSI Colors
black       = '#000000';
red         = '#BB0000';
green       = '#00BB00';
yellow      = '#BBBB00';
blue        = '#0000BB';
magenta     = '#BB00BB';
cyan        = '#00BBBB';
white       = '#BBBBBB'; // light gray
lightBlack  = '#555555'; // medium gray
lightRed    = '#FF5555';
lightGreen  = '#55FF55';
lightYellow = '#FFFF55';
lightBlue   = '#5555FF';
lightMagenta= '#FF55FF';
lightCyan   = '#55FFFF';
lightWhite  = '#FFFFFF'; // white

// jdwhite Colors
amber       = '#FFB100';

t.prefs_.set('color-palette-overrides',
                 [ black, red, green, yellow,
                   blue, magenta, cyan, white,
                   lightBlack, lightRed, lightGreen, lightYellow,
                   lightBlue, lightMagenta, lightCyan, lightWhite ]);

// Set cursor-color to green (arbitrarily) and 50% opacity
// in order to see text under cursor.
t.prefs_.set('cursor-color', 'rgba(0,255,0,0.5'); // Green, 50% opacity
t.prefs_.set('cursor-blink', false);

t.prefs_.set('foreground-color', amber);
t.prefs_.set('background-color', black);
