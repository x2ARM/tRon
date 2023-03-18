const commentBtn = document.querySelector('.comment-btn');
commentBtn.addEventListener('click', () => {
  const commentForm = document.createElement('form');
  const commentInput = document.createElement('input');
  const commentSubmitBtn = document.createElement('button');

  commentInput.type = 'text';
  commentSubmitBtn.type = 'submit';
  commentSubmitBtn.innerText = 'Submit';

  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentSubmitBtn);
  commentBtn.parentNode.appendChild(commentForm);
});
