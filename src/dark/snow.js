/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
export const snow = {
  // The background color is for making the particles visible since they're white. Remove this section if not needed
  background: {
    color: '#000000',
  },
  // The particles options
  particles: {
    // The color of the particles/snowflakes
    color: {
      value: '#fff',
    },
    // Move the snow flakes to bottom for a realistic effect, "out" in outModes is for making them reappear on top once exited at the bottom of the page, the speed should be slow for a realistic effect
    move: {
      direction: 'bottom',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.3,
      straight: false,
    },
    // How many particles/snowflakes will be created when starting the effect, density is a good option to enable since it calculates the particles number based on the screen size (mobile users will be happy)
    number: {
      density: {
        enable: true,
        // area: 800,
      },
      value: 120,
    },
    // The opacity of the particles/snowflakes
    opacity: {
      value: 0.5,
    },
    // The shape of the particles/snowflakes, also custom shapes can be used, this will be discussed at the end
    shape: {
      type: 'circle',
    },
    // The size of the particles/snowflakes
    size: {
      value: { min: 0.1, max: 2 },
    },
    // A nice wobble movement
    wobble: {
      enable: true,
      distance: 4,
      speed: 0.3,
    },
    // Some depth to the effect, (the layers count by default is 100, changing max here is not affecting that count)
    // The zIndex will affect speed, size and opacity of the particles/snowflakes, the smaller the zIndex the smaller/more transparent/slower the particles/snowflakes will be
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
    },
  },
  detectRetina: true,
  fpsLimit: 120,
};

const antes = {
  background: {
    color: {
      value: '#000',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: 'top',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        // area: 800,
      },
      value: 120,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 0.1, max: 2 },
    },
  },
  detectRetina: true,
};
