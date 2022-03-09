// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
};

const preloadImage = src =>
  new Promise(r => {
    const image = new Image();
    image.onload = r;
    image.onerror = r;
    image.src = src;
  });

export { map, lerp, clamp, getMousePos, preloadImage };