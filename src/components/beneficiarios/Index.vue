<template>
  <MainTemplate>
    <loading :active.sync="isLoading" :is-full-page="fullPage" color="#124e92"></loading>
    <div class="page-wrapper" style="min-height: 1007px;">
      <div class="container-fluid">
        <div class="row page-titles">
          <div class="col-md-12 align-self-center">
            <h3 class="text-themecolor">Beneficciarios</h3>
            <Add></Add>
          </div>
        </div>

        <div class="row">
          <!-- column -->
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Lista de beneficiarios cadastrados</h4>

                <div class="table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="topo">Id</th>
                        <th class="topo">Nome</th>
                        <th class="topo">Matricula</th>
                        <th class="topo">Plano</th>
                        <th class="topo text-nowrap">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="beneficiario in beneficiarios" :key="beneficiario.id">
                        <td>{{ beneficiario.id }}</td>
                        <td>{{ beneficiario.nome }}</td>
                        <td>{{ beneficiario.matricula }}</td>
                        <td>{{ beneficiario.plano.nome }}</td>
                        <td class="text-nowrap">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modalExemplo"
                            data-original-title="Close"
                            @click="Detalhes(beneficiario)"
                          >
                            <i class="fa fa-eye text-info"></i>
                          </a>
                          <a @click="deleteLocal(beneficiario.id)">
                            <i class="fa fa-close text-danger"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                class="modal fade"
                id="modalExemplo"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="exampleModalLabel"
                      >Beneficiario nº {{ beneficiario.matricula }}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group row">
                        <label class="col-sm-12">Nome: {{beneficiario.nome}}</label>
                        <label class="col-sm-12">Email: {{beneficiario.email}}</label>
                        <label class="col-sm-12">CPF: {{beneficiario.cpf}}</label>
                        <label class="col-sm-12">Sexo: {{beneficiario.sexo}}</label>
                        <label class="col-sm-12">Endereco: {{beneficiario.endereco}}</label>
                        <label class="col-sm-12">Data Nascimento: {{beneficiario.data_nascimento}}</label>
                        <label class="col-sm-12">Telefone: {{beneficiario.telefone}}</label>
                        <label class="col-sm-12">Matricula: {{beneficiario.matricula}}</label>
                      </div>
                      <div class="plano">
                        <label class="col-sm-12">Plano: {{beneficiario.plano.nome}}</label>
                        <label class="col-sm-12">Descrição: {{beneficiario.plano.descricao}}</label>
                        <label class="col-sm-12">Valor: {{beneficiario.plano.valor}}</label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                  </div>
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
import Add from "./Add";
import { mapState, mapActions, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import sweetalert2 from "sweetalert2";
let unsubscribe;

export default {
  name: "Index",
  components: {
    MainTemplate,
    Add,
    Loading
  },
  data() {
    return {
      fullPage: true,
      beneficiario: {
        nome: "",
        email: "",
        cpf: "",
        sexo: "",
        endereco: "",
        data_nascimento: "",
        telefone: "",
        matricula: "",
        plano: {
          nome: "",
          descricao: "",
          valor: ""
        }
      }
    };
  },
  created() {
    this.getBeneficiario();
  },
  computed: {
    ...mapState("beneficiario", ["beneficiarios", "isLoading"])
  },
  methods: {
    ...mapActions("beneficiario", ["getBeneficiario", "deleteBeneficiario"]),

    Detalhes(beneficiario) {
      this.beneficiario = beneficiario;
    },
    deleteLocal(id) {
      this.deleteBeneficiario(id);
    }
  },
  mounted() {
    unsubscribe = this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case "beneficiario/CREATE_SUCCESS":
          sweetalert2.fire({
            title: "Beneficiario cadastrado com sucesso",
            type: "success",
            confirmButtonColor: "#3085d6"
          });
          this.getBeneficiario();
          break;
      }
    });
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
.topo {
  font-weight: 800;
}
.plano {
  background-color: rgb(139, 230, 253);
  padding: 10px;
}
</style>
