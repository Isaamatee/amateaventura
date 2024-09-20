const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = passo 'passo-' + this.getAttribut('data-proximo');

        atual.classList.remove('ativo');
        Document.getElementById(proximoPasso).classList.add('ativo');
        
    })
})