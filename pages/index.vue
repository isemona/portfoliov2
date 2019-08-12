<template>
  <div>
    <section class="container">
      <div>
        <img
          id="headshot"
          src="https://res.cloudinary.com/dvhvxgxtf/image/upload/v1559353897/Screen_Shot_2019-01-18_at_10.02.19_PM_atferh.png"
        />
        <h3 class="title">Semona Igama</h3>
        <h4 class="subtitle">Software Engineer</h4>
        <div class="links">
          <a href="https://github.com/isemona" target="_blank" class="button--grey">GitHub</a>
          <!-- linking outside of website use target="_blank" -->
          <a
          href="/about"
          class="button--grey"
          >About</a
          >
          <!-- <a
          href="/portfolio"
          class="button--grey"
          >Portfolio</a
          >-->
          <a href="https://sigama.pythonanywhere.com/" target="_blank" class="button--grey">Blog</a>
          <a
            href="https://www.goodreads.com/user/show/18346324-mona"
            target="_blank"
            class="button--grey"
          >Reading List</a>
          <!-- <a
          href="/art"
          class="button--grey"
          >Art</a
          >-->
        </div>
      </div>
    </section>
    <div class="col-9" style="margin: 0 auto">
      <Projects 
      :imgSrc="'https://res.cloudinary.com/dvhvxgxtf/image/upload/v1554499906/logo_with_text_zstjng.png'"
      :projectUrl="'http://sugarcoin.io/'"
      :title="'SugarCoin'"
      :description="'SugarCoin is a gamified Flask web application with user authenticated API that tracks and budgets sugar consumption. Using D3 visualization, this app will pinpoint any sweet-tooth dependency factors. And since added sugar directly affects weight and glucose levels, the app will monitor these data points using Charts.js. Lastly, a text reminder is integrated through Twilio API called - SugarWallet - which reports the user\'s current balance.'"/>
      
      <Projects
      :imgSrc="'https://res.cloudinary.com/dvhvxgxtf/image/upload/v1565578143/Screen_Shot_2019-08-11_at_7.30.58_PM_pzowtt.png'"
      :projectUrl="'https://sigama.pythonanywhere.com/'"
      :title="'Django Blog'"
      :description="'I spent a day building a blog with some amazing women at a Django Girls meetup. This blog was built on Python\'s Django web framework.'"/>
      
      <Projects
      :imgSrc="''"
      :projectUrl="'https://github.com/isemona/TomeRater'"
      :title="'TomeRater'"
      :description="'An application that rates books based on an individual user\'s input. Ratings include: Most positive user, Highest rated book, Most read book.'"/>
      <div class="row">
        <div class="col-12"></div>
    </div>
  </div>
  </div>
</template>
<script>

import Projects from '~/components/Projects.vue'

export default {
  components: {
    Projects
  }
}
</script>

<style>
#sugarcoinlogo {
  width: 200px;
  height: auto;
}
.col-4 {
  display: inline-block;
  text-align: center;
}
.col-8 {
  text-align: left;
}
.col-9 {
  padding: 1em;
}
.col-12 {
  height: 100px;
}
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
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
