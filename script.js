const nilai1Input = document.getElementById('nilai1');
const nilai2Input = document.getElementById('nilai2');
const hasilInput = document.getElementById('hasil');

function hitungHasil() {
    const nilai1 = parseFloat(nilai1Input.value) || 0;
    const nilai2 = parseFloat(nilai2Input.value) || 0;
    const hasil = nilai1 + nilai2;
    hasilInput.value = hasil;
}

nilai1Input.addEventListener('input', hitungHasil);
nilai2Input.addEventListener('input', hitungHasil);