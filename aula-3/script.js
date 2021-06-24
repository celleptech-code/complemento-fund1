// Adiciona o método toTitleCase
String.prototype.toTitleCase = function() {
    return [...this.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })].join(' ');
};

// captura a url e separa o nome da aula, atividade e número
const url = window.location.pathname.slice(1).split('/');
const aula = url[0];
const [atividade, numero] = url[1].split('.')[0].split('-');

// Muda o título da página
document.title = `Cel.Lep Tech: ${aula} - ${atividade} ${numero}`.toTitleCase();

// obtem nodelist de atividades
const atividades = document.querySelectorAll('header li>ul>li');

// Localiza item correspondente a atividade
atividades.forEach(li => {
if (li.textContent === numero) {
    
    // Adiciona a classe activi no link
    li.lastChild.classList.add('activi');

    // Impede o link de recarregar a página
    li.lastChild.addEventListener('click', (e) => {
        e.preventDefault();
    });

}
});
