<template>
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <li>
            <router-link class="waves-effect waves-dark" to="/home">
              <i class="mdi mdi-gauge"></i>
              <span class="hide-menu">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link class="waves-effect waves-dark" to="/beneficiarios">
              <i class="mdi mdi-account"></i>
              <span class="hide-menu">Beneficiarios</span>
            </router-link>
          </li>
          <li>
            <router-link class="waves-effect waves-dark" to="/planos">
              <i class="mdi mdi-table"></i>
              <span class="hide-menu">planos</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>
<script>
export default {
  name: "Sidebar"
};
</script>