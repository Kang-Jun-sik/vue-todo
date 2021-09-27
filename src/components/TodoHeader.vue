<template>
  <header>
    <h1>{{ this.$store.state.headerText }}</h1>
  </header>
</template>

<script>
export default {
  name: "TodoHeader"
}
</script>

<!-- scoped는 이 컴포넌트에서만 유효하다 -->
<style scoped>
h1 {
  color: #2F3852;
  font-width: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>