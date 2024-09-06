function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    // se campoPesquisa for uma string sem nada:
    if (!campoPesquisa) {
      section.innerHTML = '<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>'
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase()
      // se no titulo inclui no campo de pesquisa, faça... (SÓ SE INCLUIR!!!)
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada item do resultado da pesquisa
      resultados += `<div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>`;
}
      }
      
      if (!resultados) {
          resultados = '<p>Nada foi encontrado</p>'
      }
      
    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
  }
