<template>
  <section class="container">
    <div>
      <!-- <logo /> -->
      <img id="headshot" src="https://res.cloudinary.com/dvhvxgxtf/image/upload/v1559353897/Screen_Shot_2019-01-18_at_10.02.19_PM_atferh.png">
      <h3 class="title">
        Semona Igama
      </h3>
      <h4 class="subtitle">
        Software Engineer
        
      </h4>
      <div class="links">
        <a
          href="https://github.com/isemona"
          target="_blank" 
          class="button--grey"
          >GitHub</a
        >
        <!-- linking outside of website use target="_blank" -->
        <a
          href="/about"
          class="button--grey"
          >About</a
        >

        <a
          href="/portfolio"
          class="button--grey"
          >Portfolio</a
        >

        <a
          href="https://sigama.pythonanywhere.com/"
          target="_blank" 
          class="button--grey"
          >Blog</a
        >

        <a
          href="https://www.goodreads.com/user/show/18346324-mona"
          target="_blank"  
          class="button--grey"
          >Reading List</a
        >
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 40px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
