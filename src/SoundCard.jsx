import './SoundCard.css';

export const SoundCard = ({ name, soundName }) => {
    try {
        const soundFile = require(`./sounds/${soundName}`);
        const sound = new Audio(soundFile);

        return (
            <div className='SoundCard' onClick={() => sound.play()}>
                <span>{name}</span>
            </div>
        );
    } catch (err) {
        console.log(err);
        return (
            <div className='SoundCard'>
                <span>broken {name}</span>
            </div>
        );
    }
}