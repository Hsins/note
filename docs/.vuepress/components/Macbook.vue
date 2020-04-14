<template>
  <div class="css-mb">
    <div class="mb-display-position">
      <div class="mb-display">
        <div class="mb-screen-position">
          <div class="mb-screen">
            <img :src="$frontmatter.cover" />       
          </div>
        </div>
      </div>
    </div>
    <div class="mb-body"></div>
    <div class="mb-bottom-cover"></div>
  </div>
</template>

<script>
export default {
  name: 'Macbook'
}
</script>

<style scoped lang="stylus">
.css-mb {
  max-width: 650px; /* Set the desired maximum width of the macbook */
  min-width: 50px; /* Set the desired minimum width of the macbook */
  margin: 50px auto 0; /* Align mockup to center */
}

.css-mb div {
  box-sizing: border-box !important; /* Just in case */
}

/* Center the display */
.css-mb .mb-display-position {
  width: 80%;
  margin: 0 auto;
}

/* The display */
.css-mb .mb-display {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 65.9442%;
  background: #373435;
  
  -webkit-border-top-left-radius:  3.5% 5.3075%;
      -moz-border-radius-topleft:  3.5% 5.3075%;
          border-top-left-radius:  3.5% 5.3075%;
  
  -webkit-border-top-right-radius: 3.5% 5.3075%;
      -moz-border-radius-toptight: 3.5% 5.3075%;
          border-top-right-radius: 3.5% 5.3075%;
}

/* Webcam */
/* Browser may not render a perfect circle */
.css-mb .mb-display:before {
  content: '';
  display: block;
  position: absolute;
  top: 3%;
  left: 50%;
  width: 1%;
  height: 1.5164%;
  margin-left: -0.5%;
  border-radius: 50%;
  background: #525252;
}

/* Glare */
/* Browser may not render the top and right offset evenly */
.css-mb .mb-display:after {
  content: '';
  display: none;
  position: absolute;
  right: 0.4%;
  top: 0.64%; 
  width: 62.5%;
  height: 100%;
  
  background: none; /* Hide the gradient on older browsers */
  background:    -moz-linear-gradient(55deg, rgba(0,0,0,0) 61%, rgba(255,255,255,0.05) 61%); /* FF3.6+ */
  background: -webkit-linear-gradient(36deg, rgba(0,0,0,0) 61%, rgba(255,255,255,0.05) 61%); /* Chrome10+ and Safari5.1+ compute the degree differently */
  background:      -o-linear-gradient(55deg, rgba(0,0,0,0) 61%, rgba(255,255,255,0.05) 61%); /* Opera 11.10+ */
  background:     -ms-linear-gradient(55deg, rgba(0,0,0,0) 61%, rgba(255,255,255,0.05) 61%); /* IE10+ */
  background:         linear-gradient(55deg, rgba(0,0,0,0) 61%, rgba(255,255,255,0.05) 61%);
  
  -webkit-border-top-right-radius: 5.3075%;
      -moz-border-radius-toptight: 5.3075%;
          border-top-right-radius: 5.3075%;
}

/* Only show glare, if the class is applied */
.css-mb.with-glare .mb-display:after { display: block; }

/* Position the screen and give make it the right size, ratio 16:10 */
.css-mb .mb-screen-position {
  position: absolute;
  top: 6.5%;
  width: 93.2%;
  left: 3.4%;
  height: 0;
  margin: 0;
  padding-bottom: 58.25%; /* Ratio */
}

/* Give parent (this element) a "height", so that child elements can use height: 100%;*/
.css-mb .mb-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #4b4b4d; /* bg color if content is not big enough, or rendering is off */
}

/* Image on the screen */
.css-mb .mb-screen img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  max-width: 100%;
  height: auto;
}

/* Macbook body */
.css-mb .mb-body {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 2.3%;
  background: #e6e7e8;
}

/* The groove */
.css-mb .mb-body:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 14.0740%;
  height: 0;
  padding-bottom: 1.4814%;
  margin-left: -7.037%;
  background: #a9abae;
  
  -webkit-border-bottom-left-radius:  7.0370% 50%;
      -moz-border-radius-bottomleft:  7.0370% 50%;
          border-bottom-left-radius:  7.0370% 50%;
  
  -webkit-border-bottom-right-radius: 7.0370% 50%;
      -moz-border-radius-bottomtight: 7.0370% 50%;
          border-bottom-right-radius: 7.0370% 50%;  
}

/* Macbook bottom */
.css-mb .mb-bottom-cover {
  width: 100%;
  height: 0;
  padding-bottom: 0.7407%;
  background: #a9abae;
  
  -webkit-border-bottom-left-radius:  12% 600%;
      -moz-border-radius-bottomleft:  12% 600%;
          border-bottom-left-radius:  12% 600%;
  
  -webkit-border-bottom-right-radius: 12% 600%;
      -moz-border-radius-bottomtight: 12% 600%;
          border-bottom-right-radius: 12% 600%; 
}
</style>
