<template>
    <div class="one">
        <v-row>
            <v-col cols="12" sm="8" md="6" lg="6">
                <h1 class="text-h2 text-orange hidden-sm-and-down">
                    HUGE Saving
                    <p class="text-white">on Uhd Televisions</p>
                </h1>
                <h1 class="text-orange hidden-md-and-up hidden-xs">
                    HUGE Saving
                    <p class="text-white">on Uhd Televisions</p>
                </h1>
                <h2 class="text-orange hidden-sm-and-up">
                    HUGE Saving
                    <p class="text-white">on Uhd Televisions</p>
                </h2>
                <br />
                <p class="text-h5 text-grey-darken-2">discount more than 10%</p>
                <br />
                <v-btn round color="orange" variant="outlined">shop now</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.one {
    padding: 10%;
    width: 100%;
    height: 75vh;
    background-image: url("../assets/uled-8k-tv-u80g-banner.jpg");
    background-size: cover;
    background-position: center;
}
@media (max-width: 700px) {
    .one {
        margin-top: 75px;
    }
}
@media (max-width: 960px) {
    .one {
        margin-top: 10%;
        padding: 10%;
    }
}
@media (max-width: 1260px) and (min-width: 960px) {
    .one {
        margin-top: 0;
        padding-top: 2%;
    }
}
@media (max-width: 350px) {
    .one {
        padding-top: 24%;
    }
}
</style>

<script>
export default {
    name: "PageOne",
};
</script>
