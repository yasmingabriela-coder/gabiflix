function entrar() {
    // console.log("Vamos ver se funciona");
    // let email = "teste@teste";
    // console.log(email);
    // alert('Entrando...');
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    // Estrutura Condicional
    if (email == 'yg545041@gmail.com' && senha == '123456') {
        Swal.fire({
            title: "Acesso Permitido!",
            text: "SEja bem-vindo a nossa plataforma!",
            icon: "success"
        });;
    } else {
        Swal.fire({
            title: "Acesso Negado!",
            text: "Usuário e/ou Senha Inválidos!",
            icon: "error"
        });
    }
    //console.log(email, senha);
}