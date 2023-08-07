import React from "react";
import { useSpring, animated } from "react-spring";

const WaveBackground: React.FC = () => {
  const waveProps = useSpring({
    from: { transform: "translateX(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateX(-40px)" });
        await next({ transform: "translateX(0px)" });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <animated.path
        fill="#191a19"
        fillOpacity="1"
        d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,133.3C840,117,960,139,1080,144C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        style={waveProps}
      ></animated.path>
    </animated.svg>
  );
};

export default WaveBackground;
