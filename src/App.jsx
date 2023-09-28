import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";
import { Menu } from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isPlaySound, setIsPlaySound] = useState(false);
  const pages = 4;
  const [isEnableOrbitControls, setIsEnableOrbitControls] = useState(false);
  return (
    <MotionConfig transition={
      {
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 5,
        restDelta: 0.0001,
      }
    }>
      <Canvas shadows camera={{ position: [0, 5, 30], fov: 20 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={pages} damping={0.1} >
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience section={section} isEnableOrbitControls={isEnableOrbitControls} menuOpened={menuOpened} />
          </Scroll>
          <Scroll html >
            <Home setIsEnableOrbitControls={setIsEnableOrbitControls}/>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          setIsPlaySound={setIsPlaySound}
          isPlaySound={isPlaySound}
        />
    </MotionConfig>
  );
}

export default App;
