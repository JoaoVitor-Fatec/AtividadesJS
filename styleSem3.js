function ex1(){
    let meses = ['janeiro','fevereiro','abril','março','maio','junho','agosto','setembro','outubro','novembro','dezembro'];
    let dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    let dateF = new Date();
    let dayS = dias[dateF.getDay()];
    let day = dateF.getDate();
    let month = meses[dateF.getMonth()];
    let year = dateF.getFullYear();
    alert(dayS+", "+day+" de "+month+" de "+year);
} 

function ex2(){
    function updateClock() {
        const atualizando = new Date();
        const horas = atualizando.getHours().toString().padStart(2, '0');
        const minutos = atualizando.getMinutes().toString().padStart(2, '0');
        const segundos = atualizando.getSeconds().toString().padStart(2, '0');
        
        const horaAtualizada = `${horas}:${minutos}:${segundos}`;

        document.getElementById('relogio').innerText = horaAtualizada;
        setTimeout(updateClock, 1000);
    }
    updateClock();  
}

function ex3(){
    function checkPalindrome() {
        const frase = prompt("Insira uma palavra ou frase:");
        if (frase === null || frase.trim() === '') {
            alert("Erro! Não deixe o espaço em branco!");
            return;
        }
        const formatar = frase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const verificacaoPalindromo = formatar.split('').reverse().join('');
        if (formatar === verificacaoPalindromo) {
            alert(`"A palavra ou frase "${frase}" é um palíndromo!`);
        } else {
            alert(`"A palavra ou frase "${frase}" não é um palíndromo.`);
        }
    }
    checkPalindrome();
}