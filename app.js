// Event listeners
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file
function getText() {
  fetch('test.txt')
    .then(res => res.text())
      .then(handleErrors)
        .then(data => document.getElementById('output').innerHTML = data)
          .catch(err => console.log(err))
}

// Get local JSON data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
      .then(handleErrors)
        .then(data => 
          document.getElementById('output').innerHTML = 
            data.map(json => `<li>${json.title} - ${json.body}</li>`).join(''))
              .catch(err => console.log(err))
}

// Get from external API (GitHub)
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
      .then(handleErrors)
        .then(data => 
          document.getElementById('output').innerHTML = 
            data.map(user => `<li>${user.login} - ${user.html_url}</li>`).join(''))
              .catch(err => console.log(err))
}

// Error Handler
function handleErrors(res) {
  if (!res) throw new Error(res.error);
  return res;
}