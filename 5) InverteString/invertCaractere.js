function inverter(){
    const palavra = document.getElementById('txt').value.split('');
    let res = document.getElementById('resposta');
    let reverter = '';
    let compare = document.getElementById('txt').value;

for(let i=0;i<palavra.length;i++){
reverter += palavra[palavra.length-i-1];
}

res.innerHTML = reverter.toUpperCase();

if (compare == reverter){
    res.innerHTML += "  e essa Palavra é um Palindromo"
}
reverter = '';
}