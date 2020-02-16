<template>
  <div class="admin_test">
    <h1>ADMIN!!!</h1>
  </div>
</template>

<script>
  export default {
    name: 'admin',
    components: {},
    mounted() {
      let netlifyCmsScript = document.createElement('script')
      netlifyCmsScript.setAttribute('src', 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js')
      document.head.appendChild(netlifyCmsScript)
    }
  }
</script>

<style></style>