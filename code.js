const soundOnClick = (id) => {
    var element = document.getElementById(id);
    element.classList.add('playing');
    setTimeout(() => {
        element.classList.remove('playing')
    }, 500);
}