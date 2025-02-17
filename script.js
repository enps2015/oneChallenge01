// Variável para armazenar os nomes
const amigos = [];

// Capturando elementos do DOM
const nomeInput = document.getElementById('nomeInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaNomes = document.getElementById('listaNomes');
const sortearBtn = document.getElementById('sortearBtn');
const resultado = document.getElementById('resultado');

// Função para adicionar nomes
adicionarBtn.addEventListener('click', () => {
  const nome = nomeInput.value.trim();

  if (!nome) {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  atualizarLista();
  nomeInput.value = ''; // Limpar o campo
});

// Função para atualizar a lista na tela
function atualizarLista() {
  listaNomes.innerHTML = '';
  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${amigo}`;
    listaNomes.appendChild(li);
  });
}

// Função para sortear um amigo
sortearBtn.addEventListener('click', () => {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia!');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
});

// Capturando o botão Reiniciar
const reiniciarBtn = document.getElementById('reiniciarBtn');

// Função para reiniciar o sorteio
reiniciarBtn.addEventListener('click', () => {
  amigos.length = 0; // Limpar o array de amigos
  atualizarLista(); // Atualizar a lista na tela
  resultado.textContent = ''; // Limpar o resultado
});