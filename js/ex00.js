function escolhas() {
    var selecionado = document.querySelector('input[name="opcao"]:checked')
    label = document.getElementByName("label")
} 

function adicionar() {
    var nao_urgente = document.getElementById("nao_urgente").checked
    var urgente = document.getElementById("urgente").checked
    var inputNota = document.getElementById("add_nota") 
    var nota = inputNota.value
    var novo = document.createElement("p")
    var cores = ["blue", "green", "purple"]
    novo.id = "paragrafo"
    novo.innerHTML = `${nota}`

    if (nao_urgente == true){
        var add = document.getElementById("boxNaoUrgente")
        var mostrar = add.children.length % cores.length
        novo.style.color = cores[mostrar]
        add.appendChild(novo)
    }

    if (urgente == true){
        var add = document.getElementById("boxUrgente")
        var mostrar = add.children.length % cores.length
        novo.style.color = cores[mostrar]
        add.appendChild(novo)
    }

    if (!nao_urgente && !urgente) {
        alert("Selecione URGENTE ou NÃO URGENTE antes de adicionar a nota.")
        return;
    }

    inputNota.value = ""

    document.getElementById("nao_urgente").checked = false
    document.getElementById("urgente").checked = false
}


function remover() {
    var boxUrgente = document.getElementById("boxUrgente")
    var boxNaoUrgente = document.getElementById("boxNaoUrgente")

    if (boxUrgente.lastElementChild) {
        boxUrgente.removeChild(boxUrgente.lastElementChild)
    } else if (boxNaoUrgente.lastElementChild) {
        boxNaoUrgente.removeChild(boxNaoUrgente.lastElementChild)
    }else{
        alert("Não há mais notas para remover.")
    }
    }


function apagartudo() {
    var urgente = document.getElementById("boxUrgente")
    var naoUrgente = document.getElementById("boxNaoUrgente")

    if(urgente || naoUrgente) {
        urgente.remove()
        naoUrgente.remove()
    }else{
        alert("Não há mais notas para apagar.")
    }
}
  