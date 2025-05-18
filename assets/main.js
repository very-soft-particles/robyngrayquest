const sparkle_png_url = './assets/sparkle.png';

let pos_x;
let pos_y;

let sparkles = [];

const MaxTrailLength = 20;
const SparkleInterval = 100;

document.addEventListener('mousemove', (event) => {
    pos_x = event.clientX;
    pos_y = event.clientY;
});

const make_sparkle = () => {
    if(sparkles.length >= MaxTrailLength) {
        document.body.removeChild(sparkles.shift());
    }
    sparkles.forEach((spark, idx, arr) => {
        spark.style.opacity = idx / arr.length;
    })
    if(pos_x) {
        const sparkle = document.createElement('img');
        sparkle.src = sparkle_png_url;

        sparkle.style.position = 'absolute';
        sparkle.style.width = 16 + 'px';
        sparkle.style.height = 'auto';
        sparkle.style.opacity = 1;
        sparkle.style.transform = 'translate(-50%, -50%)'; // Center the image
        sparkle.style.pointerEvents = 'none';
        sparkle.style.display = 'block'; // Hide initially
        sparkle.style.left = pos_x + 'px';
        sparkle.style.top = pos_y + 'px';

        document.body.appendChild(sparkle);
        sparkles.push(sparkle);
    }
};

window.setInterval(make_sparkle, SparkleInterval);
