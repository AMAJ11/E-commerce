<template>
    <div class="deteils">
        <v-row>
            <v-col cols="12" md="5" lg="5">
                <img style="width: 100%" :src="prod.thumbnail" alt="" />
                <v-spacer></v-spacer>
                <div class="imgs" style="display: flex; width: 100%">
                    <img
                        v-for="img in prod.images"
                        :src="img"
                        :key="img"
                        alt=""
                        style="width: 150px; height: 150px"
                    />
                </div>
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col class="pt-8" cols="12" md="5" lg="5">
                <h1 class="text-primary">{{ prod.title }}</h1>
                <h2 style="font-weight: 300">
                    product {{ prod.id }}- {{ prod.category }} <br />
                    for sale
                </h2>
                <h4 style="font-weight: 300">
                    BRAND: <span class="text-primary">{{ prod.brand }}</span>
                </h4>
                <v-rating
                    readonly
                    v-model="prod.rating"
                    color="orange"
                    size="x-smal"
                ></v-rating>
                <p>{{ prod.reviews.length }} review</p>
                <br />
                <p>{{ prod.description }}</p>
                <br />

                <p>
                    SKU:
                    <span style="text-align: center"> {{ prod.sku }}</span>
                </p>

                <p class="mt-2">
                    availability:
                    <span
                        class="bg-success"
                        style="
                            padding: 6px;
                            width: 90px;
                            text-align: center;
                            border-radius: 15px;
                        "
                    >
                        {{ prod.availabilityStatus }}</span
                    >
                </p>
                <br />
                <del style="display: inline" class="text-h5 text-red"
                    >{{ prod.price }} $</del
                >
                <p style="display: inline" class="text-orange text-h4 mt-1">
                    {{ `    ` }}
                    {{
                        Math.ceil(
                            prod.price -
                                prod.price * (prod.discountPercentage / 100)
                        ) + "$"
                    }}
                </p>
                <div>
                    <p v-if="this.bool">Size: {{ value }}</p>
                    <v-radio-group v-if="this.bool" v-model="value" row>
                        <v-radio label="XL" value="X-Large"></v-radio>
                        <v-radio label="Large" value="Large"></v-radio>
                        <v-radio label="MD" value="Midium"></v-radio>
                        <v-radio label="Small" value="Small"></v-radio>
                    </v-radio-group>
                </div>
                <p v-if="this.bool">Color: {{ value2 }}</p>
                <div v-if="this.bool">
                    <v-btn-toggle variant="tonal" mandatory v-model="value2">
                        <v-btn
                            style="border-radius: 40%"
                            variant="outlined"
                            color="white"
                            class="bg-white"
                            value="white"
                        ></v-btn>
                        <v-btn
                            style="border-radius: 40%"
                            class="bg-red"
                            variant="outlined"
                            color="red"
                            value="red"
                        ></v-btn>
                        <v-btn
                            style="border-radius: 40%"
                            class="bg-blue"
                            variant="outlined"
                            color="blue"
                            value="blue"
                        ></v-btn>
                        <v-btn
                            style="border-radius: 40%"
                            class="bg-black"
                            variant="outlined"
                            color="black"
                            value="black"
                        ></v-btn>
                    </v-btn-toggle>
                </div>
                <br />
                <p>Quantity</p>
                <v-icon
                    @click="count == 0 ? (count = 0) : count--"
                    style="translate: -5px -40px; cursor: pointer"
                    >mdi-minus</v-icon
                >

                <v-text-field
                    v-model="count"
                    readonly
                    style="width: 200px; display: inline-block"
                    name="name"
                    label="label"
                    id="id"
                ></v-text-field>
                <v-icon
                    @click="count++"
                    style="translate: 5px -40px; cursor: pointer"
                    >mdi-plus</v-icon
                >
                <v-text-field name="name" style="width: 100px">
                    {{
                        Math.ceil(
                            prod.price -
                                prod.price * (prod.discountPercentage / 100)
                        ) * count
                    }}
                </v-text-field>
                $
                <v-btn
                    @click="addcart(prod)"
                    style="width: 300px; border-radius: 20px"
                    color="grey-darken-4"
                    >Add to Cart</v-btn
                >
                <v-icon style="font-size: 45px"> mdi-heart-outline</v-icon>
                <v-icon style="font-size: 45px"> mdi-share-outline</v-icon>
                <v-checkbox
                    label="Iagree with Terms and conditions"
                ></v-checkbox>
                <p style="display: inline">
                    Shipping time: {{ "   " + prod.shippingInformation }}
                </p>
                <v-icon class="ml-4" style="display: inline; font-size: 35px"
                    >mdi-truck-outline</v-icon
                >
                <p>
                    <span class="text-h5 text-red">tags: </span>
                    {{ prod.tags }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.deteils {
    max-width: 97%;
    padding-left: 30px;
    margin: 0;
}
@media (max-width: 600px) {
    .imgs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .imgs img {
        width: 50%;
        height: 50%;
    }
}
</style>

<script>
export default {
    created: function () {
        this.prod = JSON.parse(localStorage.getItem("prod"));
        this.bool = JSON.parse(localStorage.getItem("bool"));
        if (localStorage.getItem("carts")) {
            this.carts = JSON.parse(localStorage.getItem("carts"));
        } else {
            this.carts = [];
        }
    },
    data: function () {
        return {
            total: 0,
            prod: {},
            cartone: {
                title: "",
                total: "",
                count: "",
                color: "",
                size: "",
                category: "",
                img: "",
                id: 0,
            },
            items: ["xl", "lg", "md", "sm"],
            value: "",
            value2: "",
            count: 0,
            bool: true,
            carts: [],
        };
    },
    methods: {
        addcart: function (prod) {
            if (this.count != 0) {
                this.total =
                    Math.ceil(
                        prod.price -
                            prod.price * (prod.discountPercentage / 100)
                    ) * this.count;
                this.cartone.title = prod.title;
                this.cartone.total = this.total;
                this.cartone.count = this.count;
                this.cartone.color = this.value2;
                this.cartone.size = this.value;
                this.cartone.category = prod.category;
                this.cartone.img = prod.thumbnail;
                this.cartone.id = prod.id;
                this.carts.push(this.cartone);
                localStorage.setItem("carts", JSON.stringify(this.carts));
                location.reload();
                console.log(this.total);
            }
        },
    },
};
</script>
