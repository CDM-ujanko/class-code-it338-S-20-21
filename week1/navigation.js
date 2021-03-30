let template = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="todo.html">TODO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="cocktails.html">Cocktails</a>
          </li>
        </ul>
    </div>
  </nav>
`;

let div = document.createElement('DIV'),
    app = document.getElementById('vue-app');
div.innerHTML = template;

app.prepend(div, div.firstChild)
