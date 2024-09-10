<template>
    <v-layout>
        <v-navigation-drawer
            width="320"
            class="py-4 px-7"
            color="white"
            location="right"
            temporary
            v-model="open"
        >
            <p class="text-h5" style="text-align: left">Shopping Carts</p>
            <p style="text-align: left" class="text-h5 text-grey mt-3">
                { {{ itemCount }} } Items
            </p>
            <p
                v-if="itemCount == 0"
                class="mt-5 text-grey"
                style="text-align: left; font-size: 15px"
            >
                Free Shipping For all Oreders over 800$
            </p>
            <p class="mt-5" v-if="itemCount == 0">Your Cart is empty</p>

            <v-card
                style="padding-bottom: 6px"
                v-for="cart in this.carts"
                :key="cart"
            >
                <img style="width: 80%; height: 70%" :src="cart.img" alt="" />
                <h3>{{ cart.title }}</h3>
                <p style="text-align: left">{{ cart.category }}</p>
                <p style="text-align: left">Count: {{ cart.count }}</p>
                <p style="text-align: left">Total: {{ cart.total }} $</p>
                <p v-if="cart.size != ''" style="text-align: left">
                    Size: {{ cart.size }}
                </p>
                <v-badge v-if="cart.color != ''" :color="cart.color"> </v-badge
                ><br />
                <v-btn
                    @click="del(cart.id)"
                    class="mr-2"
                    variant="outlined"
                    color="red"
                    >Delete</v-btn
                >
                <v-btn variant="outlined" color="success">CheckOut</v-btn>
                <v-divider class="mt-2"></v-divider>
            </v-card>

            <v-btn
                v-if="itemCount != 0"
                style="width: 100%"
                class="mt-3"
                variant="outlined"
                color="success"
                >CheckOut All</v-btn
            >
            <v-btn
                v-if="itemCount != 0"
                @click="del(15000)"
                style="width: 100%"
                class="mt-3"
                variant="outlined"
                color="red"
                >Delete All</v-btn
            >
            <v-btn
                style="width: 100%"
                class="mt-4"
                variant="outlined"
                color="orange"
                @click="open = false"
                >Continue Shopping</v-btn
            >
        </v-navigation-drawer>
        <v-navigation-drawer
            class="hidden-md-and-up pt-5"
            temporary
            color="blue-darken-3"
            location="left"
            v-model="nav"
        >
            <v-list>
                <v-list-item
                    @click="cat('+')"
                    to="/cat"
                    color="orange"
                    title="laptops"
                    value="laptops"
                ></v-list-item>
                <v-list-item
                    @click="cat('smartphones')"
                    to="/cat"
                    color="orange"
                    value="smartphones"
                    title="smartphones"
                ></v-list-item>
                <v-list-item
                    @click="cat('womens-dresses')"
                    to="/cat"
                    color="orange"
                    value="Dresses"
                    title="Dresses"
                ></v-list-item>
                <v-list-item
                    @click="cat('furniture')"
                    to="/cat"
                    color="orange"
                    value="furniture"
                    title="furniture"
                ></v-list-item>
                <v-list-item
                    @click="cat('mens-shirts')"
                    to="/cat"
                    color="orange"
                    value="mens-shirts"
                    title="Shirts"
                ></v-list-item>
                <v-list-item
                    @click="cat('motorcycle')"
                    to="/cat"
                    color="orange"
                    value="motorcycle"
                    title="Motors"
                ></v-list-item>
                <v-list-item
                    @click="cat('mens-watches')"
                    to="/cat"
                    color="orange"
                    value="mens-watches"
                    title="watches"
                ></v-list-item>

                <v-list-item class="mt-5" color="orange">
                    <v-text-field
                        name="name"
                        label="Search"
                        variant="solo"
                    ></v-text-field>
                    <v-btn color="orange"><v-icon>mdi-magnify</v-icon></v-btn>
                </v-list-item>
            </v-list>
            <v-icon
                color="orange"
                @click="nav = false"
                style="translate: 400% 200%; cursor: pointer"
                >mdi-arrow-left</v-icon
            >
        </v-navigation-drawer>
        <v-app-bar color="primary" class="nav" style="height: fit-content">
            <v-row>
                <v-col class="hidden-md-and-up" cols="2">
                    <v-app-bar-nav-icon
                        @click="
                            nav = true;
                            open = false;
                        "
                    ></v-app-bar-nav-icon
                ></v-col>
                <v-col class="hidden-xs" cols="3" md="3" lg="3"
                    ><h2 class="hidden-sm-and-down">
                        <img src="../assets/logo.png" alt="" />
                    </h2>
                    <h4
                        class="hidden-md-and-up hidden-xs"
                        style="translate: -15px 10px"
                    >
                        <img src="../assets/logo.png" alt="" />
                    </h4>
                    <p
                        style="translate: 0 9px"
                        class="hidden-sm-and-up text-button"
                    >
                        AMAJ
                    </p>
                </v-col>
                <v-col cols="3" class="hidden-sm-and-down">
                    <input
                        class="bg-white"
                        append-icon="mdi-heart"
                        type="search"
                        name="inpsearch"
                        id="inpsearch"
                        placeholder="Search"
                        style="
                            padding: 6px;
                            width: 80%;
                            border: 1px white solid;
                            outline: none;
                            border-radius: 10px;
                        "
                    />
                    <v-icon class="ml-3">mdi-magnify</v-icon>
                </v-col>
                <v-spacer class="hidden-sm-and-down"></v-spacer>
                <v-col xs="10" sm="7" md="4" lg="4">
                    <v-row>
                        <v-col cols="4"
                            ><v-icon color="orange">mdi-heart-outline</v-icon>
                            <p>Wish list</p>
                        </v-col>

                        <v-col cols="4"
                            ><v-icon color="orange">mdi-account-outline</v-icon>
                            <p>Sign in</p>
                        </v-col>

                        <v-col cols="4" style=""
                            ><v-icon
                                @click="
                                    open = !open;
                                    nav = false;
                                "
                                style="cursor: pointer"
                                color="orange"
                                >mdi-cart-outline</v-icon
                            >
                            <v-badge
                                top
                                style="translate: 0px -19px"
                                :content="this.itemCount"
                                color="orange"
                            >
                            </v-badge>
                            <p>Cart</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <!-- <v-app-bar-nav-icon @click="open = !open"></v-app-bar-nav-icon> -->

            <!-- <v-btn to="/">Home</v-btn>
                <v-btn to="/about">about</v-btn> -->
        </v-app-bar>
        <v-toolbar
            class="hidden-sm-and-down"
            style="height: 70px; margin-top: 75px"
            color="primary"
        >
            <v-btn color="orange" to="/">Home</v-btn>
            <v-btn @click="cat('laptops')" to="/cat" color="light">laptop</v-btn
            ><v-btn @click="cat('smartphones')" to="/cat" color="light"
                >phones</v-btn
            ><v-btn @click="cat('womens-dresses')" to="/cat" color="light"
                >Dresses</v-btn
            >
            <v-btn @click="cat('mens-shirts')" to="/cat" color="light"
                >Shirts</v-btn
            >
            <v-btn @click="cat('mens-watches')" to="/cat" color="light"
                >Watches</v-btn
            >
            <v-btn @click="cat('motorcycle')" to="/cat" color="light"
                >Motors</v-btn
            >
            <v-btn @click="cat('furniture')" to="/cat" color="light"
                >furniture</v-btn
            >
            <v-spacer></v-spacer>
            <div class="help" style="display: flex; align-items: flex-end">
                <v-btn
                    size="sm"
                    color="orange"
                    prepend-icon="mdi-help"
                    style="translate: -20px -15px"
                    >HELP</v-btn
                >
                <v-select
                    class="hidden-md-and-down"
                    style="translate: -6px 18px"
                    solo
                    flat
                    color="orange"
                    item-text="state"
                    :items="items"
                    v-model="value"
                    label="Lang"
                    width="130px"
                    height="50px"
                ></v-select>
            </div>
        </v-toolbar>
        <v-dialog
            v-model="dia"
            persistent
            max-width="500px"
            color="primary"
            transition="dialog-transition"
        >
            <v-card style="height: 20%" class="px-5 pb-2">
                <v-card-title style="text-align: left">
                    Are You sure to delete??
                </v-card-title>
                <div style="display: flex; justify-content: space-between">
                    <v-btn color="success" @click="dia = false">cencel</v-btn>
                    <v-btn color="red" @click="delet">Delete</v-btn>
                </div>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {
    created: function () {
        if (localStorage.getItem("carts")) {
            this.carts = JSON.parse(localStorage.getItem("carts"));
            this.itemCount = this.carts.length;
        }
    },
    name: "AppLayout",
    data: function () {
        return {
            open: false,
            items: ["EN/USD", "AR/ADE", "FR/EURO"],
            value: "",
            nav: false,
            itemCount: 0,
            carts: [],
            dia: false,
            id: 0,
        };
    },
    methods: {
        cat: function (cat) {
            localStorage.setItem("cat", cat);
            if (this.$route.path == "/cat") {
                window.location.reload();
            }
        },
        del: function (id) {
            this.dia = true;
            this.id = id;
        },
        delet: function () {
            if (this.id == 15000) {
                this.carts = [];
                localStorage.setItem("carts", JSON.stringify(this.carts));
            } else {
                for (let i = 0; i < this.carts.length; i++) {
                    if (this.carts[i].id == this.id) {
                        this.carts.splice(i, 1);
                    }
                    location.reload();
                    localStorage.setItem("carts", JSON.stringify(this.carts));
                }
            }
            location.reload();
        },
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    text-align: center;
}
.nav {
    padding: 5px;
    padding-left: 0;
    padding-right: 0;
}
@media (max-width: 800px) {
    .nav {
        padding: 0;
    }
}
</style>
