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
      :imgSrc="'http://book.amtrakvacations.com/images/California%20Academy%20of%20Sciences%20logo.jpg'"
      :projectUrl="'https://www.inaturalist.org/projects/mosquitoes-in-hawaii'"
      :title="'iMosquitoes'"
      :description="'Currently working on a citizen-science project called iMosquitoes, it\’s hosted on a platform called iNaturalist (a web and mobile app in collaboration with National Geographic) that allows anyone to document different plants and animal species to be verified by scientists. More recently a machine learning/computer vision tool has been added to classify mosquito species on the big island of Hawaii esp disease carrying ones, e.g., dengue fever. Lead scientist, Dr. Kapan, is collaborating with Google\’s Verily to double validate the results through genomic sequencing by having students on the island send mosquito samples to his lab. My role is to help to improve the website; I use CSS, HTML, and Bootstrap to style and manage the main website\’s information. The goal is to increase data in Hawaii all the while promoting public health measures to prevent disease occurrence and contain potential spread of illness. I focus on organizing Dr. Kapan\’s information in order to help students and teachers quickly get started. As a result, it will be easier for students to access the instructions they need and the faster they can share photos of the mosquitos and document their location sighting.'"/>
      
      <Projects
      :imgSrc="'https://res.cloudinary.com/dvhvxgxtf/image/upload/v1565800495/Screen_Shot_2019-08-14_at_9.34.29_AM_r9x9la.png'"
      :projectUrl="'https://github.com/isemona/Variant-Search-WebApp'"
      :title="'Variant-Gene Search App'"
      :description="'Gene-variants Search Engine is a Python-Flask backend and React frontend web application that allows users to search for genes and their respective variants and variant-attributes.'"/>

      <Projects
      :imgSrc="'https://res.cloudinary.com/dvhvxgxtf/image/upload/v1565578143/Screen_Shot_2019-08-11_at_7.30.58_PM_pzowtt.png'"
      :projectUrl="'https://sigama.pythonanywhere.com/'"
      :title="'Django Blog'"
      :description="'I spent a day building a blog with some amazing women at a Django Girls meetup. This blog was built on Python\'s Django web framework.'"/>
      
      <Projects
      :imgSrc="''"
      :projectUrl="'https://github.com/isemona/TomeRater'"
      :title="'TomeRater'"
      :description="'A python script that rates books based on an individual user\'s input. Ratings include: Most positive user, Highest rated book, Most read book.'"/>

      <Projects
      :imgSrc="''"
      :projectUrl="''"
      :title="'Portfolio Website'"
      :description="'This website is built on Vue.js.'"/>
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

#headshot {
  width: 200px;
  height: auto;
  border-radius: 100%;
}
#sugarcoinlogo {
  width: 200px;
  height: auto;
}
.col-4 {
  display: inline-block;
  text-align: center;
  padding: 1em;
}
.col-8 {
  text-align: left;
  padding: 1em;
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
