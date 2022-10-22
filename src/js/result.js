let width = screen.width;
const factorChange = document.querySelector('#factor-changer');
if (width < 469) {
    factorChange.innerHTML = "Factors"
} 
if (width > 469) {
    factorChange.innerHTML = "Key drivers for EER"
}