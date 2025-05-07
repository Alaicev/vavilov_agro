document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch('sendmail.php', { // или ваш endpoint
    method: 'POST',
    body: formData
  })
  .then(response => alert('Сообщение отправлено!'))
  .catch(error => alert('Ошибка: ' + error));
});