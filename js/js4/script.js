window.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('raio_range');

    const raioInput = document.getElementById('raio_text');
    const areaInput = document.getElementById('area_text');
    const circunfInput = document.getElementById('circunf_text');

    function update(input) {
        const raio = parseFloat(input.value);
        const area = (Math.PI * Math.pow(raio, 2)).toFixed(1);
        const circunf = (2 * Math.PI * raio).toFixed(1);

        raioInput.value = raio;
        areaInput.value = area;
        circunfInput.value = circunf;
    }

    slider.addEventListener('input', () => update(slider));
    raioInput.addEventListener('input', () => update(raioInput));
    areaInput.addEventListener('input', () => update(areaInput));
    circunfInput.addEventListener('input', () => update(circunfInput));
});