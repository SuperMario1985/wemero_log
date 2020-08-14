<template>
  <div class="kt-error404-v1">
    <div class="kt-error404-v1__content">
      <div class="kt-error404-v1__title">404</div>
      <div class="kt-error404-v1__desc">
        <strong>OOPS!</strong> Something went wrong here.
      </div>
    </div>
    <div class="kt-error404-v1__image">
      <img src="../assets/img/404-bg1.jpg" class="kt-error404-v1__image-content" alt title />
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultPage",
  data() {
    return {};
  },
  methods: {}
  // ,
  // computed: {},
  // created: {},
  // mounted: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kt-error404-v1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 150px 0 150px;
}
@media (max-width: 768px) {
  .kt-error404-v1 {
    padding: 2rem;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
}
.kt-error404-v1 .kt-error404-v1__content {
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media (max-width: 768px) {
  .kt-error404-v1 .kt-error404-v1__content {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
.kt-error404-v1 .kt-error404-v1__content .kt-error404-v1__title {
  font-size: 12rem;
  color: #fb2f73;
  font-weight: 700;
  line-height: 1;
}
.kt-error404-v1 .kt-error404-v1__content .kt-error404-v1__desc {
  font-size: 1.5rem;
}
.kt-error404-v1 .kt-error404-v1__image {
  flex: 1;
  position: relative;
}
@media (max-width: 768px) {
  .kt-error404-v1 .kt-error404-v1__image {
    width: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}
.kt-error404-v1 .kt-error404-v1__image .kt-error404-v1__image-content {
  width: 100%;
}
</style>
