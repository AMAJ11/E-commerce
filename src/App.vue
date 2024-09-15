// eslint-disable-next-line
<template>
    <AppLayoutVue />
    <router-view />
</template>

<script>
import AppLayoutVue from "./components/AppLayout.vue";
export default {
    name: "App",
    components: { AppLayoutVue },
};
</script>
