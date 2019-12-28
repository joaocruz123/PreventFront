<template>
    <div id="main-wrapper">
        <Header />
        <Sidebar />
        <slot></slot>
    </div>
</template>
<script>
import Header from '../components/layouts/Header'
import Sidebar from '../components/layouts/Sidebar'

export default {
    name: "MainTemplate",
    components:{
        Header,
        Sidebar
    }
}
</script>