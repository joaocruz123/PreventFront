<template>
  <div style="float:right;">
    <!-- Botão para acionar modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAdd">Novo</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalAdd"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cadastrar novo Beneficiario</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="text" class="form-control" placeholder="Nome" v-model="form.nome" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="text" class="form-control" placeholder="Email" v-model="form.email" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  v-mask="'###.###.###-##'"
                  placeholder="CPF"
                  v-model="form.cpf"
                />
              </div>
              <div class="col-sm-6">
                <v-select
                  v-model="form.sexo"
                  :options="options"
                  :reduce="text => text.value"
                  label="text"
                ></v-select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Endereço"
                  v-model="form.endereco"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6">
                <input
                  type="date"
                  class="form-control"
                  title="Data de Nascimento"
                  v-model="form.data_nascimento"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Telefone"
                  v-mask="'(##)#####-####'"
                  v-model="form.telefone"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <!-- <input type="text" class="form-control" placeholder="Plano" v-model="form.plano_id" /> -->
                <v-select
                  v-model="form.plano_id"
                  :options="dados"
                  :reduce="nome => nome.id"
                  label="nome"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="Create()"
            >Salvar mudanças</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Add",
  data() {
    return {
      options: [
        { value: "Masculino", text: "Masculino" },
        { value: "Feminino", text: "Feminino" },
        { value: "Não Informado", text: "Não Informado" }
      ],
      form: {
        nome: "",
        email: "",
        cpf: "",
        sexo: "Selecione Sexo",
        endereco: "",
        data_nascimento: "",
        telefone: "",
        matricula: "0002020",
        plano_id: "Selecione Plano"
      }
    };
  },
  created() {
    this.getPlanos();
  },
  computed: {
    ...mapState("plano", ["dados"])
  },
  methods: {
    ...mapActions("beneficiario", ["createBeneficiario"]),
    ...mapActions("plano", ["getPlanos"]),

    Create() {
      this.createBeneficiario(this.form);
    }
  }
};
</script>