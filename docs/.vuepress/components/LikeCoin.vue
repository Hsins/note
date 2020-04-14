<template>
  <div class="likecoin-embed likecoin-button">
    <div></div>
    <iframe scrolling="no" frameborder="0" :src="srcLiker"></iframe>
  </div>
</template>

<script>
export default {
  name: 'LikeCoin',
  data () {
    return {
      srcLiker: '',
    }
  },
  created() {
    let { LikerID } = this.$themeConfig.social;
    let currentPath = encodeURIComponent(this.$themeConfig.Host + this.$site.base.replace(/\//g, '') + this.$page.path);
    this.srcLiker = `https://button.like.co/in/embed/${LikerID}/button?referrer=[URL]`;
  },
}
</script>

<style scoped>
.likecoin-button {
  position: relative;
  width: 100%;
  max-width: 485px;
  max-height: 240px;
  margin: 0 auto;
}

.likecoin-button > div {
  padding-top: 49.48454%;
}

.likecoin-button > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>