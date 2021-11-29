// react-particlests config
const particleConfig:{} = {
    autoPlay: true,
    background: {
      color: {
        value: "#071E3D"
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff"
        },
        opacity: 1
      },
      enable: false
    },
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: []
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle"
        },
        resize: true
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: {
          distance: 200
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1
          }
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#21E6C1"
              },
              stop: {
                value: "#21E6C1"
              }
            },
            radius: 1000
          },
          shadow: {
            color: {
              value: "#21E6C1"
            },
            length: 2000
          }
        },
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad"
        },
        slow: {
          factor: 3,
          radius: 200
        },
        trail: {
          delay: 0.005,
          pauseOnStop: true,
          quantity: 5,
          particles: {
            color: {
              value: "#21E6C1",
              animation: {
                enable: true,
                speed: 400,
                sync: true
              }
            },
            collisions: {
              enable: false,
              bounce: {
                horizontal: {
                  random: {}
                },
                vertical: {
                  random: {}
                }
              },
              overlap: {}
            },
            links: {
              enable: false,
              shadow: {},
              triangles: {}
            },
            move: {
              outModes: {
                default: "destroy"
              },
              speed: 2,
              angle: {},
              attract: {
                rotate: {}
              },
              distance: {},
              gravity: {},
              path: {
                delay: {
                  random: {}
                }
              },
              trail: {}
            },
            size: {
              value: 5,
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 1,
                sync: true,
                startValue: "min",
                destroy: "max"
              },
              random: {}
            },
            bounce: {
              horizontal: {
                random: {}
              },
              vertical: {
                random: {}
              }
            },
            destroy: {
              split: {
                factor: {
                  random: {}
                },
                rate: {
                  random: {}
                }
              }
            },
            life: {
              delay: {
                random: {}
              },
              duration: {
                random: {}
              }
            },
            number: {
              density: {}
            },
            opacity: {
              animation: {},
              random: {}
            },
            roll: {
              darken: {},
              enlighten: {}
            },
            rotate: {
              animation: {}
            },
            shadow: {
              offset: {}
            },
            shape: {},
            stroke: {
              color: {
                value: "#21E6C1",
                animation: {
                  count: 0,
                  enable: false,
                  offset: {
                    max: 0,
                    min: 0
                  },
                  speed: 0,
                  sync: false
                }
              }
            },
            tilt: {
              animation: {}
            },
            twinkle: {
              lines: {},
              particles: {}
            },
            wobble: {}
          }
        }
      }
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          }
        },
        enable: true,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0
        }
      },
      color: {
        value: "#21E6C1"
      },
      gradient: [],
      groups: {},
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          sync: false
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001
          },
          value: 0,
          sync: false
        }
      },
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000
          }
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 0
          },
          enable: false,
          options: {}
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out"
        },
        random: false,
        size: false,
        speed: 1,
        spin: {
          acceleration: 0,
          enable: false
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#21E6C1"
          }
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: false,
          area: 999,
          factor: 1000
        },
        limit: 4,
        value: 10
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.3
        },
        value: {
          min: 0.3,
          max: 0.6
        }
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 45
        },
        width: 1
      },
      reduceDuplicates: false,
      repulse: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      },
      roll: {
        darken: {
          enable: false,
          value: 0
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0
        },
        mode: "vertical",
        speed: 25
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false
        },
        direction: "clockwise",
        path: false
      },
      shadow: {
        blur: 0,
        color: {
          value: "#21E6C1"
        },
        enable: false,
        offset: {
          x: 0,
          y: 0
        }
      },
      shape: {
        options: {},
        type: "circle"
      },
      size: {
        value: {
          min: 30,
          max: 200
        }
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false
        },
        direction: "clockwise",
        enable: false
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        }
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: 50
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    themes: [],
    zLayers: 100
  }
   

  export default particleConfig