<template>
  <div class="row">
    <div class="col-md-4 col-xs-12">
      <img id="sugarcoinlogo" :src="imgSrc" />
    </div>
    <div class="col-md-8 col-xs-12">
      <span class="project-title">
        <a :href="projectUrl">{{title}}</a>
      </span>
      <p>{{description}}</p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgSrc', 'projectUrl', 'title', 'description']
}
</script>

<style>
.project-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 25px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>


