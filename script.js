const submit = document.getElementById('submit-btn').addEventListener('click', function () {
    const name = document.getElementById('user-name');
    const userName = name.value;
    name.value = '';

    const comment = document.getElementById('comment-area');
    const userComment = comment.value;
    comment.value = '';

    const commentShow = document.getElementById('comment-output');

    const commentSet = document.createElement('p');
    commentSet.innerText = userComment;
    const commentWriter = document.createElement('p');
    commentWriter.innerText = userName;

    commentShow.appendChild(commentSet);
    commentShow.appendChild(commentWriter);
});

