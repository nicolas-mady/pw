// document.addEventListener('mousemove', function(event) {
//     const dot = document.createElement('div');
//     dot.style.left = `${event.pageX}px`;
//     dot.style.top = `${event.pageY}px`;
//     document.body.appendChild(dot);

//     // setTimeout(() => {
//     //     dot.remove();
//     // }, 100);
// });

const MAX = 8;
let dots = [];

document.addEventListener('mousemove', function(event) {
    const dot = document.createElement('div');
    dot.style.left = `${event.pageX}px`;
    dot.style.top = `${event.pageY}px`;
    document.body.appendChild(dot);
    dots.push(dot);
    if (dots.length > MAX) {
        const oldDot = dots.shift();
        oldDot.remove();
    }
});
