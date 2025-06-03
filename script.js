const chatbox = document.getElementById('chatbox');

function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  appendMessage('user', msg);
  processInput(msg);
  input.value = '';
}

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = text.replace(/\n/g, '<br>');
  div.appendChild(bubble);
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function processInput(input) {
  let reply = '';
  switch (input) {
    case '1':
      reply = `🍔 <strong>Hambúrgueres</strong><br>
      • Clássico Mania – R$ 28<br>
      • Duplo Sabor – R$ 35<br>
      • Veggie Delícia – R$ 30<br>
      • Frango Crocante – R$ 29<br>
      • Picanha Supreme – R$ 42<br>
      • Mega Bacon Blast – R$ 38<br>
      • Chef's Especial – R$ 40<br>
      • Kids Burger – R$ 20<br>
      • Monte o Seu – R$ 25 (base)<br><br>
      🍟 <strong>Acompanhamentos</strong><br>
      • Batata Tradicional – R$ 12<br>
      • Batata c/ Cheddar e Bacon – R$ 18<br>
      • Anéis de Cebola – R$ 15<br><br>
      🥤 <strong>Bebidas</strong><br>
      • Refrigerantes – R$ 7<br>
      • Água – R$ 5<br>
      • Sucos Naturais – R$ 10`;
      break;
    case '2':
      reply = '🛒 Por favor, digite o nome do produto que deseja pedir. Ex: "Clássico Mania".';
      break;
    case '3':
      reply = '📍 Rua das Delícias, 123 – Centro, Cidade Saborosa.<br>🕒 Segunda a domingo, das 11h às 23h.';
      break;
    case '4':
      reply = '👨‍💼 Transferindo para um atendente humano... Por favor, aguarde.';
      break;
    default:
      reply = '❓ Não entendi. Digite 1, 2, 3 ou 4 para continuar.';
  }
  appendMessage('bot', reply);
}
