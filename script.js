// Seleciona o botão do menu (ícone de hambúrguer) pelo ID definido no HTML
const menuBtn = document.getElementById('menu-btn');

// Seleciona o elemento de navegação (menu que será aberto/fechado)
const navMenu = document.getElementById('nav-menu');

// Dentro do botão, procura o elemento <i> (ícone da fonte Font Awesome)
const menuIcon = menuBtn.querySelector('i');
// querySelector() -> método reservado do JavaScript usado para buscar
// o primeiro elemento que corresponde a um seletor CSS dentro de outro elemento.


// Adiciona um "ouvinte de evento" (listener) que detecta o clique no botão do menu.
menuBtn.addEventListener('click', () => {
    // addEventListener() -> método reservado usado para executar uma função
    // toda vez que um evento específico ocorre (nesse caso, um clique).
  
  // Alterna (liga/desliga) a classe "show" no menu de navegação.
  // Isso faz o menu aparecer ou desaparecer visualmente via CSS.
  navMenu.classList.toggle('show');  // classList.toggle() -> adiciona a classe se ela não existir; remove se já existir.


  // Troca o ícone (de hambúrguer para "X" e vice-versa), dependendo do estado atual.
  // Verifica se o ícone atual tem a classe "fa-bars" (ícone de hambúrguer)
  if (menuIcon.classList.contains('fa-bars')) {
    // classList.contains() -> verifica se o elemento contém uma classe específica (retorna true ou false).

    // Se sim, remove a classe do ícone de hambúrguer...
    menuIcon.classList.remove('fa-bars');
    // ...e adiciona o ícone de "X" para indicar que o menu pode ser fechado.
    menuIcon.classList.add('fa-xmark');
  } else {
    // Caso contrário, volta o ícone para o estado original (hambúrguer).
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});








// 1 - Criar o menu hambúrguer (div e ícone) no HTML.

// 2 - Fora do @media, aplicar display: none na div que guarda o ícone do hambúrguer 
//     e também na lista do menu mobile.

// 3 - Dentro do @media, aplicar display: none no menu desktop.

// 4 - Dentro do @media, aplicar display: flex na div do menu mobile que estava oculta, 
//     tornando-a visível.

// 5 - Realizar a estilização do menu mobile no CSS: alinhamento, cores, transições etc.

// 6 - Fazer o JavaScript interagir com o ícone do menu hambúrguer e executar a ação.
