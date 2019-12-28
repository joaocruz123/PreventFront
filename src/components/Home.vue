<template>
  <MainTemplate>
    <div class="page-wrapper" style="min-height: 1007px;">
      <div class="container-fluid">
        <div class="col-lg-12">
          <div class="jumbotron">
            <h1 class="display-3">Bem-vindo!</h1>
            <p
              class="lead"
            >Acesse o sistema para realizar o controle de planos e beneficiarios.</p>
          </div>
        </div>
      </div>

      <footer class="footer">© 2017 Admin Pro by wrappixel.com</footer>
    </div>
  </MainTemplate>
</template>

<script>
import MainTemplate from "../views/MainTemplate";
export default {
  name: "Home",
  components: {
    MainTemplate
  },
  data() {
    return {
      msg: "O Italo bb"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
