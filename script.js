
const salutBtn = document.getElementById('salutBtn');
const message = document.getElementById('message');

salutBtn.addEventListener('click', () => {
    message.textContent = 'Bonjour !';
});
