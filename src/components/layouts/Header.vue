<template>
  <header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">
      <div class="navbar-header">
        <a class="navbar-brand" href="index.html">
          <!-- Logo icon -->
          <b>
            <img src="static/assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
          </b>
          <!--End Logo icon -->
          <!-- Logo text -->
          <span>
            <img src="static/assets/images/logo-text.png" alt="homepage" class="dark-logo" />
          </span>
        </a>
      </div>

      <div class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <!-- This is  -->
          <li class="nav-item">
            <a
              class="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
              href="javascript:void(0)"
            >
              <i class="ti-menu"></i>
            </a>
          </li>
        </ul>

        <ul class="navbar-nav my-lg-0">
          <li class="nav-item hidden-xs-down search-box">
            <a class="nav-link hidden-sm-down waves-effect waves-dark" href="javascript:void(0)">
              <i class="ti-search"></i>
            </a>
            <form class="app-search">
              <input type="text" class="form-control" placeholder="Search & enter" />
              <a class="srh-btn">
                <i class="ti-close"></i>
              </a>
            </form>
          </li>
          <!-- ============================================================== -->
          <!-- Profile -->
          <!-- ============================================================== -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle waves-effect waves-dark"
              href
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ user.name }}
            </a>
            <div class="dropdown-menu dropdown-menu-right animated flipInY">
              <ul class="dropdown-user">
                <li>
                  <div class="dw-user-box">
                    <div class="u-text">
                      <h4>{{ user.name }}</h4>
                      <p class="text-muted">{{ user.email }}</p>
                    
                    </div>
                  </div>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">
                    <i class="ti-user"></i> Perfil
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-settings"></i> Configurações
                  </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">
                    <i class="fa fa-power-off"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      user:{
        nome: '',
        email: ''
      }
    }
  },
  created(){
    if(localStorage.token !== ''){
      this.user.name = localStorage.usuario
      this.user.email = localStorage.email
    }
  }
};
</script>