<template>
  <section id="wrapper">
    <div
      class="login-register"
      style="background-image:url(static/assets/images/bgPrevent.jpg);"
    >
      <div class="login-box card">
        <div class="card-body">
          <div class="form-horizontal form-material" id="loginform">
            <h3 class="box-title m-b-20">Prevent Senior</h3>
            <div class="form-group">
              <div class="col-xs-12">
                <input class="form-control" v-model="form.email" required placeholder="Email" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12">
                <input class="form-control" v-model="form.password" required placeholder="Senha" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-12">
                <div class="checkbox checkbox-info float-left p-t-0">
                  <input id="checkbox-signup" type="checkbox" class="filled-in chk-col-light-blue" />
                  <label for="checkbox-signup">Lembrar-me</label>
                </div>
                <a href="javascript:void(0)" id="to-recover" class="text-muted float-right">
                  <i class="fa fa-lock m-r-5"></i> Esqueceu a senha?
                </a>
              </div>
            </div>
            <div class="form-group text-center">
              <div class="col-xs-12 p-b-20">
                <button class="btn btn-block btn-lg btn-info btn-rounded" @click="login([form.email, form.password])">Entrar</button>
              </div>
            </div>
            <div class="form-group m-b-0">
              <div class="col-sm-12 text-center">
                Não possui uma conta?
                <a href="pages-register.html" class="text-info m-l-5">
                  <b>Cadastrar</b>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapActions, mapState} from 'vuex'
let unsubscribe;
export default {
    name:'Login',
    data(){
      return{
        form:{
          email: '',
          password:''
        }
      }
    },
    methods:{
      ...mapActions("auth", ["login"])
    },
    mounted() {
    unsubscribe = this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case "auth/LOGIN_SUCCESS":
         this.$router.push({path: 'home'})
          break;
      }
    });
  }
}
</script>