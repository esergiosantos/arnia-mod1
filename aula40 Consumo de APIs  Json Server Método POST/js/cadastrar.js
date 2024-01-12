const formulario = document.querySelector("#formulario")

formulario;addEventListener("submit", (e) => {
    e.preventDefault() //evita que as informações do formulario sejam enviadas para URL

    //recuperar as informações do formulario
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    if(validarNome(nome) && validarEmail(email)){
        alert(`Olá ${nome}! Seu e-mail foi cadastrado com
        sucesso`)
        }else{
            alert('Preencha todos os campos corretamente')
            }
            })
            

    
