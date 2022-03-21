// run this to generate an array of sounds

const fs = require('fs');
const path = './src/sounds'

const sounds = [];

fs.readdir(path, (err, files) => {
  files.forEach(file => {
    sounds.push({
      fileName: file,
      name: file.replaceAll('_', ' ').replace('.m4a', '').replace('.mp4', ''),
    });
  });
  fs.writeFile('./src/SoundList.json', JSON.stringify(sounds), (err) => console.log(err));
});
