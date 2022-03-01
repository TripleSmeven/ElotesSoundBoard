import { soundsList } from "./SoundsList"
import './SoundCard.css';

export const SoundCard = ({ name, soundName }) => {
    const sound = new Audio(soundsList[soundName]);

    return (
        <div className='SoundCard' onClick={() => sound.play()}>
            <span>{name}</span>
        </div>
    );
}