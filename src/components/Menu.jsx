import { useEffect } from "react";
import useSound from 'use-sound';
import musicLoop from '../sounds/music_loop.mp3';

export const Menu = (props) => {
    const [play, { stop }] = useSound(
        musicLoop,
        { volume: 0.5 }
      );

    const { onSectionChange, menuOpened, setMenuOpened, setIsPlaySound, isPlaySound } = props;

    useEffect(() => {
        if (isPlaySound) {
            play();
        } else {
            stop();
        }
    }, [isPlaySound]);

    return (
        <div className="z-20 fixed top-12 right-12 flex gap-4">
            <button id="sound-button"
            onClick={() => setIsPlaySound(!isPlaySound)} 
            className="z-20 cursor-pointer flex-center overlay-button gray-hover p-2 bg-indigo-600 w-11 h-11 rounded-md"
            style={{ transitionDuration: '400ms' , transitionProperty: 'background-color' , backgroundColor: isPlaySound ? 'rgb(79, 70, 229)' : 'rgb(143 144 145)' }}
            >
                {
                    isPlaySound ? <ActiveSoundIcon /> : <InactiveSoundIcon />
                }
            </button>

            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className="z-20 p-3 bg-indigo-600 w-11 h-11 rounded-md"
            >
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45  translate-y-0.5" : ""
                        }`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""
                        }`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""
                        }`}
                />
            </button>
            <div
                className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80" : "w-0"}`}
                style={{ transitionDuration: '400ms' }}>
                <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
                    <MenuButton label="About" onClick={() => onSectionChange(0)} />
                    <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
                    <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
                    <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
                </div>
            </div>
        </div>
    );
};

const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
        <button
            onClick={onClick}
            className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
        >
            {label}
        </button>
    );
};

const ActiveSoundIcon = () => {
    return (
        <img src="images/active-sound.svg" alt="" />
    )
}

const InactiveSoundIcon = () => {
    return (
        <img src="images/inactive-sound.svg" alt="" />
    )
}