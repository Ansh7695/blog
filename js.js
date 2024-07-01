document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    const postList = document.getElementById('postList');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addPost();
    });

    function addPost() {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const post = document.createElement('div');
            post.classList.add('post');

            const postTitle = document.createElement('h3');
            postTitle.textContent = title;

            const postContent = document.createElement('p');
            postContent.textContent = content;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function() {
                postList.removeChild(post);
            });

            post.appendChild(postTitle);
            post.appendChild(postContent);
            post.appendChild(deleteButton);

            postList.appendChild(post);

            blogForm.reset();
        }
    }
});
