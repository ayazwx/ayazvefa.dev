import { OrbitControls, Sky } from "@react-three/drei";
import { Bird } from "./Bird";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";
import { TextureLoader } from "three";

export const Experience = (props) => {
  const { section, isEnableOrbitControls, menuOpened } = props;
  const { viewport } = useThree();
  const soilMap = useLoader(TextureLoader, '/public/textures/grass.jpg');

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  // const bird = useRef();

  // useEffect(() => {
  //   bird.current.position.x = -40;
  //   bird.current.position.y = 15;
  //   bird.current.position.z = -90;

  //   bird.current.rotation.y = 0.6;
  // }
  // , []);

  return (
    <>
    {
      isEnableOrbitControls && <OrbitControls />
    }
      <ambientLight intensity={0.5} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={Math.PI / 10}
        animate={{
          y: section === 0 ? 0 : -1,
        }}>
        <Sky sunPosition={[100, 20, 100]} />
        <Bird position={[-40, 15, -90]} rotation-y={0.6} scale={[0.1, 0.1, 0.1]} />
      </motion.group>
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
