<template>
  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">

      <router-link to="/">
        <a class="navbar-brand" href="#">Home</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li v-if="!isLog" class="nav-item">
            <router-link to="/user">
              <a class="nav-link" href="#">User registration</a>
            </router-link>
          </li>

          <li v-if="!isLog" class="nav-item">
            <router-link  to="/user/login">
              <a class="nav-link" href="#">Login</a>
            </router-link>
          </li>

          <li v-if="isLog" class="nav-item">
            <router-link to="/user/settings">
              <a class="nav-link" href="#">User Info</a>
            </router-link>
          </li>

          <li v-if="isAuth" class="nav-item">
            <router-link to="/users">
              <a class="nav-link" href="#">Users</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
