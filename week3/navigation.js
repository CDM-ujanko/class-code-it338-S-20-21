Vue.component('site-nav', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page, i) in pages" class="nav-item">
            <a class="nav-link" 
                v-bind:class="{active: page.link === activePage}" 
                aria-current="page"
                v-bind:href="page.link"
                >
                 {{ page.label }}
             </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`,
  data() {
    return {
      activePage: '',
      pages: [
        {
          link: 'index.html',
          label: 'Components',
        }, {
          link: 'example.html',
          label: 'Example',
        }
      ]
    }
  },

  mounted() {
    let parts = location.pathname.split('/');
    this.activePage = parts[parts.length -1]
  }
});
