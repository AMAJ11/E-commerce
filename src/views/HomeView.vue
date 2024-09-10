<template>
    <div class="home">
        <PageOneVue />
        <OurServices />
        <OurFutures />
        <WhyShop />
    </div>
</template>

<script>
import PageOneVue from "@/components/PageOne.vue";
import OurServices from "@/components/OurServices.vue";
import OurFutures from "@/components/OurFutures.vue";
import WhyShop from "@/components/WhyShop.vue";
// @ is an alias to /src
export default {
    name: "HomeView",
    components: { PageOneVue, OurServices, OurFutures, WhyShop },
};
</script>
