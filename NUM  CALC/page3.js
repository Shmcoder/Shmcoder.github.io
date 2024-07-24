function add(){
    let a =  parseInt(document.getElementById('n1').value)
    let b = parseInt(document.getElementById('n2').value)
    const c = a + b;
    document.querySelector('#output').textContent = "The Addition Of "+a+" And " +b+ " is " + c ;
}

function sub(){
    let a =  parseInt(document.getElementById('n1').value)
    let b = parseInt(document.getElementById('n2').value)
    const c = a - b;
    document.querySelector('#output').textContent = "The Addition Of "+a+" And " +b+ " is " + c ;
}

function mul(){
    let a =  parseInt(document.getElementById('n1').value)
    let b = parseInt(document.getElementById('n2').value)
    const c = a * b;
    document.querySelector('#output').textContent = "The Addition Of "+a+" And " +b+ " is " + c ;
}

function remainder(){
    let a =  parseInt(document.getElementById('n1').value)
    let b = parseInt(document.getElementById('n2').value)
    const c = a % b;
    document.querySelector('#output').textContent = "The Addition Of "+a+" And " +b+ " is " + c ;
}

function equalto(){
    let a =  parseInt(document.getElementById('n1').value)
    let b = parseInt(document.getElementById('n2').value)
    const c = a == b;
    document.querySelector('#output').textContent = "The Addition Of "+a+" And " +b+ " is " + c ;
}

function unequalto(){
    let a =  parseInt(document.getElementById('n1').value)
    let b = parseInt(document.getElementById('n2').value)
    const c = a != b;
    document.querySelector('#output').textContent = "The Addition Of "+a+" And " +b+ " is " + c ;
}