const soundOnClick = async (id) => {
    await bump(id);
    await playSound(id);
}

const bump = (id) => {
    var element = document.getElementById(id);
    return new Promise(resolve => {
        element.classList.add('playing');
        setTimeout(() => {
            element.classList.remove('playing')
        }, 100);
        resolve();
    })
}

const playSound = (id) => {
    return new Promise(resolve => {
        var audioElement = document.querySelector(`audio[data-key="${id}"]`);
        audioElement.currentTime = 0;
        audioElement.play();
        resolve();
    })
}

const availableKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

document.addEventListener('keydown', (e) => {
    if (availableKeys.includes(e.key.toLowerCase())) {
        console.log('it works');
        soundOnClick(e.key.toLowerCase());
    }
})