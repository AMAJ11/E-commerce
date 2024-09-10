<template>
    <div class="services">
        <v-container>
            <v-row style="text-align: center">
                <v-col cols="4">
                    <v-icon size="x-large">mdi-truck</v-icon>
                    <p class="text-button">Free Shipping & returns</p>
                </v-col>
                <v-col cols="4">
                    <v-icon size="x-large">mdi-sale</v-icon>
                    <p class="text-button">Lowest Price</p>
                </v-col>
                <v-col cols="4">
                    <v-icon size="x-large">mdi-gift</v-icon>
                    <p class="text-button">Longest Warranties</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.services {
    background-image: linear-gradient(
        to right,
        white,
        orange,
        rgb(135, 135, 149)
    );
}
</style>
