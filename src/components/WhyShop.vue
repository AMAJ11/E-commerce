<template>
    <div class="why">
        <v-row>
            <v-col
                class="text-white"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                style="text-align: center"
                ><img src="../assets/cash-back.png" alt="" />

                <h2>Cashback Reward program</h2>
            </v-col>
            <v-col
                class="text-white"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                style="text-align: center"
                ><img src="../assets/discount.png" alt="" />

                <h2>Anual Payment Discount</h2>
            </v-col>
            <v-col
                class="text-white"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                style="text-align: center"
                ><img src="../assets/free-shipping.png" alt="" />

                <h2>Free Shipping with First order</h2>
            </v-col>
            <v-col
                class="text-white"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                style="text-align: center"
                ><img src="../assets/weekly-flash-sales.png" alt="" />

                <h2>Weekly Flash Sale quick</h2>
            </v-col>
        </v-row>
    </div>
    <div class="foot">
        <v-row
            class="mt-5"
            style="width: 70%; margin-right: auto; margin-left: auto"
        >
            <v-col style="text-align: center" cols="12"
                ><h2>
                    Subscribe to our Newsletter
                    <p class="text-grey text-h6">
                        Get The latest Update on our products
                    </p>
                </h2>
            </v-col>
            <br />
            <v-col cols="12" md="10" lg="10" style="text-align: center">
                <input
                    type="text"
                    name=""
                    id=""
                    class="text"
                    placeholder="Enter Your Email Address here"
            /></v-col>
            <v-col cpls="12" lg="2" style="text-align: center">
                <v-btn class="sub" color="primary">submit</v-btn>
            </v-col>
        </v-row>

        <v-row class="footer" style="padding: 50px">
            <v-col xs="12" sm="6" lg="3" style="text-align: center"
                ><h1>Shop</h1>
                <p>Electronics</p>
                <p>laptops & computer</p>
                <p>SmartPhones & Tablets</p>
                <p>Cameras</p>
                <p>Video Games & System</p>
                <p>Home Furniture</p>
                <p>Weekly Special</p>
                <p>laptops</p>
            </v-col>

            <v-col xs="12" sm="6" lg="3" style="text-align: center"
                ><h1>Futured Info</h1>
                <p>About</p>
                <p>Customer Service</p>
                <p>Reward program</p>
                <p>Shipping & return</p>
                <p>Privacy Policy</p>
                <p>Terms & conditions</p>
                <p>Blog</p>
            </v-col>
            <v-col xs="12" sm="6" lg="3" style="text-align: center"
                ><h1>Customer Service</h1>
                <p>Search Terms</p>
                <p>Advanced Search</p>
                <p>Orders & return</p>
                <p>Contact Us</p>
                <p>Theme FAQs</p>
                <p>Consulitant</p>
                <p>Store location</p>
                <p>laptops</p>
            </v-col>
            <v-col xs="12" sm="6" lg="3" style="text-align: right">
                <img src="../assets/footer-logo.webp" alt="" />
                <p>
                    <v-icon>mdi-map-marker</v-icon> 635- midan abo habl streat
                    in the end right
                </p>
                <p><v-icon> mdi-phone</v-icon> Call Us on +9630115464</p>
                <p><v-icon>mdi-gmail</v-icon> EllaShop@gmail.com</p>
                <br />
                <div
                    style="
                        display: flex;
                        text-align: right;
                        justify-content: flex-end;
                    "
                >
                    <v-btn
                        class="ml-3"
                        width="50px"
                        height="50px"
                        color="primary"
                        style="border-radius: 62%"
                        ><v-icon size="x-large">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                        class="ml-3"
                        width="40px"
                        height="50px"
                        color="primary"
                        style="border-radius: 62%"
                        ><v-icon size="x-large">mdi-whatsapp</v-icon>
                    </v-btn>
                    <v-btn
                        class="ml-3"
                        width="50px"
                        height="50px"
                        color="primary"
                        style="border-radius: 62%"
                        ><v-icon size="x-large">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                        class="ml-3"
                        width="50px"
                        height="50px"
                        color="primary"
                        style="border-radius: 62%"
                        ><v-icon size="x-large">mdi-twitter</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.why {
    background-image: url("../assets/why-shop-with-us-banner.webp");
    background-size: cover;
    width: 85%;
    height: 300px;
    margin: 60px auto 0 auto;
    padding: 25px;
    display: flex;
    justify-items: center;
    align-items: center;
}
.text {
    width: 100%;
    border-radius: 30px;
    border: 1px black solid;
    outline: none;
    padding: 6px;
    font-weight: 700;
}
.sub {
    border-radius: 30px;
    border: 1px black solid;
    outline: none;
    padding: 6px;
    width: 100%;
}
.foot {
    margin-top: 30px;
    background-color: rgb(216, 216, 216);
}
.footer p {
    color: gray;
    cursor: pointer;
}
.footer p:hover {
    color: rgb(105, 133, 242);
}
@media (max-width: 1000px) {
    .why {
        height: auto !important;
    }
}
</style>
