<template>
    <div class="futures px-10 py-5" style="text-align: center">
        <div class="card"><img src="../assets/playstations.webp" alt="" /></div>
        <div class="card"><img src="../assets/chairs.webp" alt="" /></div>
        <div class="card"><img src="../assets/headset.webp" alt="" /></div>
    </div>
    <div class="mt-3 futures2">
        <div class="card2"><img src="../assets/iphones.webp" alt="" /></div>
        <div class="card2"><img src="../assets/laptops.webp" alt="" /></div>
    </div>
    <div class="mt-16" style="display: flex; justify-content: space-between">
        <h2 class="text-orange text-h4">Flash Deals</h2>
        <a style="cursor: pointer; margin-right: 30px"> See All</a>
    </div>
    <Swiper
        style="padding: 10px"
        :pagination="{ el: '.swiper-pagination' }"
        :modules="modules"
        :space-between="20"
        :slides-per-view="4"
        :navigation="{
            prevIcon: 'chevron_left',
            nextIcon: 'chevron_right',
        }"
        :breakpoints="breakpoints"
        :autoplay="{ delay: 3000 }"
    >
        <swiper-slide v-for="item in arr" :key="item.id">
            <v-card bg-dark variant="solo" style="height: 600px">
                <img
                    :src="item.thumbnail"
                    alt=""
                    style="hieght: 200px; border-radius: 1px solid black"
                />
                <v-card-text style="translate: -10px 0">
                    {{ "(" + item.title + ")" }}
                    {{
                        item.description.split("").length < 30
                            ? item.description
                            : item.description.split("").slice(0, 30).join("")
                    }}
                </v-card-text>
                <v-rating
                    readonly
                    v-model="item.rating"
                    color="orange"
                    size="x-smal"
                ></v-rating
                ><br />
                <del style="font-size: 15px" class="text-red"
                    >{{ item.price }}
                </del>
                <v-icon>mdi-arrow-right</v-icon>
                <p
                    class="text-success"
                    style="display: inline; font-weight: 900"
                >
                    {{ `    ` }}
                    {{
                        Math.ceil(
                            item.price -
                                item.price * (item.discountPercentage / 100)
                        ) + "$"
                    }}
                </p>
                <br />
                <v-btn
                    style="translate: 60px 0"
                    color="orange"
                    rounded
                    variant="outlined"
                    @click="prod(item, true)"
                    to="/prod"
                    >Choose options</v-btn
                >
            </v-card>
        </swiper-slide>
        <div class="swiper-pagination"></div>
    </Swiper>
    <div class="div hidden-sm-and-down"></div>
    <v-container>
        <v-row style="text-align: center" class="px-16" align-center>
            <v-col
                class="mt-5"
                md="3"
                sm="6"
                lg="2"
                v-for="ca in cat"
                :key="ca"
            >
                <img :src="ca.src" style="width: 100px; height: 100px" alt="" />
                <h3>{{ ca.title }}</h3>
            </v-col>
        </v-row>
    </v-container>
    <div>
        <div
            class="mt-16"
            style="display: flex; justify-content: space-between"
        >
            <h2 class="text-orange text-h4">New Laptops</h2>
            <a style="cursor: pointer; margin-right: 30px"> See All</a>
        </div>
        <v-row class="px-6">
            <v-col cols="12" md="7">
                <Swiper
                    style="padding: 10px; overflow: hidden"
                    :pagination="{ el: '.swiper-pagination' }"
                    :modules="modules"
                    :space-between="34"
                    :slides-per-view="2"
                    :navigation="{
                        prevIcon: 'chevron_left',
                        nextIcon: 'chevron_right',
                    }"
                    :breakpoints="breakpoints2"
                    :autoplay="{ delay: 3000 }"
                >
                    <swiper-slide v-for="item in lap" :key="item.id">
                        <v-card bg-dark variant="solo" style="height: 600px">
                            <img
                                :src="item.thumbnail"
                                alt=""
                                style="
                                    hieght: 200px;
                                    border-radius: 1px solid black;
                                "
                            />
                            <v-card-text style="translate: -10px 0">
                                {{ "(" + item.title + ")" }}
                                {{
                                    item.description.split("").length < 29
                                        ? item.description
                                        : item.description
                                              .split("")
                                              .slice(0, 29)
                                              .join("")
                                }}
                            </v-card-text>
                            <v-rating
                                readonly
                                v-model="item.rating"
                                color="orange"
                                size="x-smal"
                            ></v-rating
                            ><br />
                            <del style="font-size: 15px" class="text-red"
                                >{{ item.price }}
                            </del>
                            <v-icon>mdi-arrow-right</v-icon>
                            <p
                                class="text-success"
                                style="display: inline; font-weight: 900"
                            >
                                {{ `    ` }}
                                {{
                                    Math.ceil(
                                        item.price -
                                            item.price *
                                                (item.discountPercentage / 100)
                                    ) + "$"
                                }}
                            </p>
                            <br />

                            <v-btn
                                @click="prod(item, true)"
                                to="/prod"
                                style="translate: 60px 0"
                                color="orange"
                                rounded
                                variant="outlined"
                                >Choose options</v-btn
                            >
                        </v-card>
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                </Swiper>
            </v-col>
            <v-col cols="12" md="5" style="display: flex; align-items: center">
                <img
                    style="width: 100%; height: 500px"
                    src="../assets/vr-banner.webp"
                    alt=""
                />
            </v-col>
        </v-row>
    </div>
    <v-container>
        <div
            class="mt-10 adj"
            style="
                background-color: rgb(113, 113, 170);
                height: 55vh;
                display: flex;
                align-items: center;
                justify-items: center;
            "
        >
            <v-container>
                <v-row>
                    <v-col
                        sm="6"
                        md="4"
                        lg="2"
                        style="min-width: 228px"
                        v-for="ad in adj"
                        :key="ad"
                    >
                        <v-card style="text-align: center" height="250px">
                            <img :src="ad.src" alt="" class="mt-10" />
                            <h2 class="text-h5 mt-5">
                                {{ ad.title }}
                            </h2>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-container>
    <div class="phone mt-16">
        <div
            class="mt-16"
            style="display: flex; justify-content: space-between"
        >
            <h2 class="text-orange text-h4">Top mobile Phones</h2>
            <a style="cursor: pointer; margin-right: 30px"> See All</a>
        </div>
        <v-container>
            <Swiper
                style="padding: 10px"
                :pagination="{ el: '.swiper-pagination' }"
                :modules="modules"
                :space-between="20"
                :slides-per-view="4"
                :navigation="{
                    prevIcon: 'chevron_left',
                    nextIcon: 'chevron_right',
                }"
                :breakpoints="breakpoints3"
                :autoplay="{ delay: 3000 }"
            >
                <swiper-slide v-for="item in mob" :key="item.id">
                    <v-card bg-dark variant="solo" style="height: 500px">
                        <img
                            :src="item.thumbnail"
                            alt=""
                            style="
                                hieght: 200px;
                                border-radius: 1px solid black;
                            "
                        />
                        <v-card-text style="translate: -10px 0">
                            {{ "(" + item.title + ")" }}
                            {{
                                item.description.split("").length < 33
                                    ? item.description
                                    : item.description
                                          .split("")
                                          .slice(0, 33)
                                          .join("")
                            }}
                        </v-card-text>
                        <v-rating
                            readonly
                            v-model="item.rating"
                            color="orange"
                            size="x-smal"
                        ></v-rating
                        ><br />
                        <del style="font-size: 15px" class="text-red"
                            >{{ item.price }}
                        </del>
                        <v-icon>mdi-arrow-right</v-icon>
                        <p
                            class="text-success"
                            style="display: inline; font-weight: 900"
                        >
                            {{ `    ` }}
                            {{
                                Math.ceil(
                                    item.price -
                                        item.price *
                                            (item.discountPercentage / 100)
                                ) + "$"
                            }}
                        </p>
                        <br />
                        <v-btn
                            @click="prod(item, true)"
                            to="/prod"
                            style="translate: 60px 0"
                            color="orange"
                            rounded
                            variant="outlined"
                            >Choose options</v-btn
                        >
                    </v-card>
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </Swiper>
        </v-container>
    </div>
    <v-row class="mt-6">
        <v-col class="hidden-md-and-down" cols="1"></v-col>
        <v-col cols="12" md="6" lg="5" class="pa-sm-10 pa-lg-2 pa-md-10"
            ><img
                src="../assets/band-left-cover.webp"
                style="width: 100%"
                alt=""
        /></v-col>

        <v-col class="pa-md-10 pa-sm-10 pa-lg-2"
            ><img
                style="width: 100%"
                src="../assets/band-right-cover.webp"
                alt=""
        /></v-col>
        <v-col class="hidden-md-and-down" cols="1"></v-col>
    </v-row>

    <div class="mt-16" style="display: flex; justify-content: space-between">
        <h2 class="text-orange text-h4">Top furniture</h2>
        <a style="cursor: pointer; margin-right: 30px"> See All</a>
    </div>
    <v-container class="">
        <Swiper
            style="padding: 10px"
            :pagination="{ el: '.swiper-pagination' }"
            :modules="modules"
            :space-between="20"
            :slides-per-view="4"
            :navigation="{
                prevIcon: 'chevron_left',
                nextIcon: 'chevron_right',
            }"
            :breakpoints="breakpoints3"
            :autoplay="{ delay: 3000 }"
        >
            <swiper-slide v-for="item in furn" :key="item.id">
                <v-card bg-dark variant="solo" style="height: 500px">
                    <img
                        :src="item.thumbnail"
                        alt=""
                        style="hieght: 200px; border-radius: 1px solid black"
                    />
                    <v-card-text style="translate: -10px 0">
                        {{ "(" + item.title + ")" }}
                        {{
                            item.description.split("").length < 40
                                ? item.description
                                : item.description
                                      .split("")
                                      .slice(0, 45)
                                      .join("")
                        }}
                    </v-card-text>
                    <v-rating
                        readonly
                        v-model="item.rating"
                        color="orange"
                        size="x-smal"
                    ></v-rating
                    ><br />
                    <del style="font-size: 15px" class="text-red"
                        >{{ item.price }}
                    </del>
                    <v-icon>mdi-arrow-right</v-icon>
                    <p
                        class="text-success"
                        style="display: inline; font-weight: 900"
                    >
                        {{ `    ` }}
                        {{
                            Math.ceil(
                                item.price -
                                    item.price * (item.discountPercentage / 100)
                            ) + "$"
                        }}
                    </p>
                    <br />
                    <v-btn
                        @click="prod(item, true)"
                        to="/prod"
                        style="translate: 60px 0"
                        color="orange"
                        rounded
                        variant="outlined"
                        >Choose options</v-btn
                    >
                </v-card>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </Swiper>
    </v-container>

    <div class="tele hidden-sm-and-down"></div>

    <div class="mt-16" style="display: flex; justify-content: space-between">
        <h2 class="text-orange text-h4">Top Foodstuffs</h2>
        <a style="cursor: pointer; margin-right: 30px"> See All</a>
    </div>
    <v-container class="">
        <Swiper
            style="padding: 10px"
            :pagination="{ el: '.swiper-pagination' }"
            :modules="modules"
            :space-between="20"
            :slides-per-view="4"
            :navigation="{
                prevIcon: 'chevron_left',
                nextIcon: 'chevron_right',
            }"
            :breakpoints="breakpoints3"
            :autoplay="{ delay: 3000 }"
        >
            <swiper-slide v-for="item in groceries" :key="item.id">
                <v-card bg-dark variant="solo" style="height: 500px">
                    <img
                        :src="item.thumbnail"
                        alt=""
                        style="hieght: 200px; border-radius: 1px solid black"
                    />
                    <v-card-text style="translate: -10px 0">
                        {{ "(" + item.title + ")" }}
                        {{
                            item.description.split("").length < 40
                                ? item.description
                                : item.description
                                      .split("")
                                      .slice(0, 45)
                                      .join("")
                        }}
                    </v-card-text>
                    <v-rating
                        readonly
                        v-model="item.rating"
                        color="orange"
                        size="x-smal"
                    ></v-rating
                    ><br />
                    <del style="font-size: 15px" class="text-red"
                        >{{ item.price }}
                    </del>
                    <v-icon>mdi-arrow-right</v-icon>
                    <p
                        class="text-success"
                        style="display: inline; font-weight: 900"
                    >
                        {{ `    ` }}
                        {{
                            Math.ceil(
                                item.price -
                                    item.price * (item.discountPercentage / 100)
                            ) + "$"
                        }}
                    </p>
                    <br />
                    <v-btn
                        @click="prod(item, false)"
                        to="/prod"
                        style="translate: 60px 0"
                        color="orange"
                        rounded
                        variant="outlined"
                        >Choose options</v-btn
                    >
                </v-card>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </Swiper>
    </v-container>
</template>

<style scoped>
.div {
    width: 95%;
    margin: auto;
    padding-right: 10px;
    background-image: url("../assets/cyber-banner.webp");
    background-position: center;
    height: 70vh;
}
.card {
    width: 30%;
    height: 250px;
    overflow: hidden;
}
.card img {
    width: 100%;
    transition: 0.3s all ease-in-out;
}
.futures {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.card img:hover {
    scale: 1.2;
}
.futures2 {
    padding: 2px 5px 2px 10px;
    display: flex;
    justify-content: space-between;
}
.card2 {
    width: 49%;
    overflow: hidden;
}
.card2 img {
    width: 100%;
    transition: 0.3s all ease-in-out;
}
.card,
.card2 {
    cursor: pointer;
    border-radius: 20px;
}
.card2 img:hover {
    scale: 1.1;
}
.swiper-pagination {
    height: 10px;
}
.tele {
    width: 95%;
    margin: auto;
    margin-top: 35px;
    padding-right: 10px;
    background-image: url("../assets/tv-banner.webp");
    height: 70vh;
}
@media (max-width: 650px) {
    .futures,
    .futures2 {
        flex-direction: column;
        align-items: center;
    }
    .card,
    .card2 {
        width: 80%;
        margin-bottom: 15px;
        height: auto;
    }
    .div {
        width: 100%;
        height: 40vh;
        background-size: cover;
        margin: 0;
    }
}
@media (max-width: 900px) and (min-width: 650px) {
    .card,
    .card2 {
        width: 60%;
        margin-bottom: 5px;
        height: auto;
    }
    .card:nth-child(2) {
        align-self: center;
    }
    .card:nth-child(1) {
        align-self: right;
    }
    .card:nth-child(3) {
        align-self: left;
    }
    .futures {
        flex-direction: column;
    }
    .futures2 {
        flex-direction: column;
        align-items: center;
    }
}
@media (max-width: 1280px) {
    .adj {
        height: auto !important;
    }
}
</style>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
    created: async function () {
        await axios
            .get("https://dummyjson.com/products?limit=500&skip=0")
            .then((res) => {
                this.lap = res.data.products.filter(
                    (el) => el.category === "laptops"
                );
                this.allData = res.data.products;
                console.log(res.data);
                this.furn = res.data.products.filter(
                    (el) => el.category === "furniture"
                );
                this.groceries = res.data.products.filter(
                    (el) => el.category === "groceries"
                );

                this.mob = res.data.products
                    .filter((el) => el.category === "smartphones")
                    .slice(3, 10);
                this.arr = res.data.products.slice(99, 112);
            })
            .catch((err) => console.log(err));

        console.log(this.arr);
        console.log(this.mob);
    },
    methods: {
        prod: function (prod, bool) {
            localStorage.setItem("prod", JSON.stringify(prod));
            localStorage.setItem("bool", bool);
        },
    },
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay],
        };
    },
    data: () => {
        return {
            allData: [],
            arr: [],
            lap: [],
            mob: [],
            furn: [],
            groceries: [],
            showImg: {},
            cat: [
                {
                    title: "mobile",
                    src: "https://cdn.icon-icons.com/icons2/2206/PNG/96/iphone_mobile_phone_smartphone_apple_icon_134096.png",
                },
                {
                    title: "laptop",
                    src: "https://cdn.icon-icons.com/icons2/588/PNG/96/1458264592_laptop_computer_pc_device_notebook_netbook_internet_icon-icons.com_55334.png",
                },
                {
                    title: "tv",
                    src: "https://cdn.icon-icons.com/icons2/2008/PNG/96/television_tv_screen_icon_123445.png",
                },
                {
                    title: "pc ",
                    src: "https://cdn.icon-icons.com/icons2/607/PNG/96/pc-computer-with-monitor_icon-icons.com_56249.png",
                },
                {
                    title: "audio & videon",
                    src: "https://cdn.icon-icons.com/icons2/1754/PNG/96/iconfinder-musicmelodysoundaudio46-4105535_113849.png",
                },
                {
                    title: "gaming ",
                    src: "https://cdn.icon-icons.com/icons2/1381/PNG/96/preferencesdesktopgaming_94752.png",
                },
                {
                    title: "home appliances",
                    src: "https://cdn.icon-icons.com/icons2/1744/PNG/512/3643769-building-home-house-main-menu-start_113416.png",
                },
                {
                    title: "kitchen",
                    src: "https://cdn.icon-icons.com/icons2/2054/PNG/96/kitchen_oven_stove_cooking_icon_124442.png",
                },
                {
                    title: "cameras",
                    src: "https://cdn.icon-icons.com/icons2/24/PNG/96/camera_nikon_photo_2512.png",
                },
                {
                    title: "smart",
                    src: "https://cdn.icon-icons.com/icons2/3694/PNG/96/electronics_chip_wireless_gadget_smart_icon_229600.png",
                },
                {
                    title: "Engineering Tools",
                    src: "https://cdn.icon-icons.com/icons2/7/PNG/128/calculator_accessories_839.png",
                },
                {
                    title: "Watch",
                    src: "https://cdn.icon-icons.com/icons2/1465/PNG/96/634watch_100779.png",
                },
            ],
            adj: [
                {
                    title: "Quality And Saving",
                    src: "https://cdn.icon-icons.com/icons2/1771/PNG/96/4124869-badge-insignia-premium-badge-quality-star-badge_114113.png",
                },
                {
                    title: "Global wareHouse",
                    src: "https://cdn.icon-icons.com/icons2/1849/PNG/96/warehouse_116463.png",
                },
                {
                    title: "Fast shipping",
                    src: "https://cdn.icon-icons.com/icons2/2249/PNG/96/truck_fast_outline_icon_139003.png",
                },
                {
                    title: "Pyment security",
                    src: "https://cdn.icon-icons.com/icons2/1622/PNG/96/3741738-assurance-bussiness-ecommerce-marketplace-onlinestore-store_108896.png",
                },
                {
                    title: "Any Questions",
                    src: "https://cdn.icon-icons.com/icons2/602/PNG/96/Questions_icon-icons.com_55834.png",
                },
            ],
            breakpoints: {
                0: { slidesPerView: 1 },
                580: { slidesPerView: 2 },
                770: { slidesPerView: 3 },
                990: { slidesPerView: 4 },
            },
            breakpoints2: {
                0: { slidesPerView: 1 },
                580: { slidesPerView: 1 },
                770: { slidesPerView: 1 },
                990: { slidesPerView: 2 },
            },
            breakpoints3: {
                0: { slidesPerView: 1 },
                580: { slidesPerView: 2 },
                820: { slidesPerView: 3 },
                1100: { slidesPerView: 4 },
            },
        };
    },
    components: { Swiper, SwiperSlide },
};
</script>
