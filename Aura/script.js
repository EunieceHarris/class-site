let manEyes = document.querySelector('.site-container');

manEyes.addEventListener('mousemove', (e) => {
    let eye = document.querySelector('.eyes-item');
    let mouseX = (eye.getBoundingClientRect().left);
    let mouseY = (eye.getBoundingClientRect().top);
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    eye.getElementsByClassName.transform = `rotate(${rotationDegrees}deg)`
});