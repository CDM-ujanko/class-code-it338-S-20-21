<template>
  <div class="row">
    The user data is: {{ $store.state.loggedUser.user }}
  </div>
</template>

<script>

export default {
  name: 'User',
  props: ['id']
}
</script>

<style scoped></style>