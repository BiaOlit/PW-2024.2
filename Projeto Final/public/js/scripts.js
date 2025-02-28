// Função que lida com o clique do botão "Curtir"
document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', async (event) => {
      event.preventDefault();
      const form = event.target.closest('form');
      
      // Enviar o request para o servidor (código de like)
      const response = await fetch(form.action, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              postId: form.dataset.postId,
          }),
      });

      if (response.ok) {
          const likesElement = form.querySelector('.likes-count');
          const likesCount = parseInt(likesElement.innerText, 10) + 1;
          likesElement.innerText = likesCount;
      } else {
          alert('Ocorreu um erro ao tentar curtir o post.');
      }
  });
});

// Função para mostrar um alerta caso algum erro aconteça com o envio do formulário
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form?.addEventListener('submit', (event) => {
      event.preventDefault();
      // Código para enviar os dados do formulário, pode ser POST ou GET conforme necessário
      console.log('Post enviado');
  });
});
