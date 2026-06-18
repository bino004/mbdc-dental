"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function DentalParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="particles"
        className="absolute inset-0 h-full w-full"
        init={particlesInit}
        options={{
            
          background: {
            color: "transparent",
          },

          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
          },

          fpsLimit: 120,

          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 1000,
              },
            },

            color: {
              value: "#22d3ee",
            },

            links: {
              enable: true,
              color: "#22d3ee",
              distance: 150,
              opacity: 0.18,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },

            opacity: {
              value: 0.25,
            },

            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },

            modes: {
              grab: {
                distance: 180,

                links: {
                  opacity: 0.5,
                },
              },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
}
