import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleTheme = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fps_limit: 45,
          
          interactivity: {
            detect_on: "canvas",
            events: {
              ondiv: {
                enable: true,
                elementId: "login",
                mode: "bubble",
                type: "rectangle"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 5,
                speed: 5,
                color: ["#ff0000", "#ff7700"]
              }
            }
          },
          particles: {
            color: {
              value: ["#DA0463", "#404B69","#00C9B1"]
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              collisions: true,
              direction: "none",
              enable: true,
              out_mode: "bounce",
              random: false,
              speed: .5,
              straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
              random: true,
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 2,
                speed: 5,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 2
              },
              value: 4
            }
          },
          retina_detect: true
        }}
    />
  );
};
export default ParticleTheme;