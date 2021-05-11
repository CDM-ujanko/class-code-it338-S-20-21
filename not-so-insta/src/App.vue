<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-4">
      <div class="container">
        <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </div>
    </b-navbar>
    <router-view class="container"/>
  </div>
</template>

<style lang="scss">
</style>
