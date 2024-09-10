<template>
    <v-progress-linear :indeterminate="true" v-if="bool"></v-progress-linear>
    <div class="about pa-16">
        <v-row>
            <v-col lg="3" v-for="item in this.arr" :key="item">
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
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
        prod: function (prod, bool) {
            localStorage.setItem("prod", JSON.stringify(prod));
            localStorage.setItem("bool", bool);
        },
    },
    async created() {
        await axios
            .get(
                `https://dummyjson.com/products/category/${localStorage.getItem(
                    "cat"
                )}`
            )
            .then((res) => {
                this.arr = res.data.products;
            });
        console.log(this.arr);
        this.bool = false;
    },
    data: function () {
        return {
            arr: [],
            bool: true,
        };
    },
    watch: {
        localStorage() {
            async () => {
                await axios
                    .get(
                        `https://dummyjson.com/products/category/${localStorage.getItem(
                            "cat"
                        )}`
                    )
                    .then((res) => {
                        this.arr = res.data.products;
                    });
                console.log(this.arr);
            };
        },
    },
};
</script>
