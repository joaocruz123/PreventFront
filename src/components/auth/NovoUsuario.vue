<template>
  <MainTemplate>
    <div class="page-wrapper" style="min-height: 1007px;">
      <div class="container-fluid">
        <div class="row page-titles">
          <div class="col-md-12 align-self-center">
            <h3 class="text-themecolor">Novo Usuario</h3>
          </div>
        </div>

        <div class="row">
          <!-- column -->
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Cadastrar novo Usuario</h4>

                <div class="table-responsive">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainTemplate>
</template>

<script>
import axios from "axios";
import MainTemplate from "../../views/MainTemplate";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "NovoUsuario",
  components: {
    MainTemplate,
  },
  methods: {
    ...mapActions("auth", ["getPlanos"])
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
