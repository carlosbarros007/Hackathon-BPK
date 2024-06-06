document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var userName = document.getElementById('user-name').value;
    var postTitle = document.getElementById('post-title').value;
    var postContent = document.getElementById('post-content').value;


    console.log('Nome do usuário:', userName);
    console.log('Título da postagem:', postTitle);
    console.log('Conteúdo da postagem:', postContent);

  
    document.getElementById('user-name').value = '';
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});
