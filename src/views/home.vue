<!--
    components: home.vue
    note: 首页内容区
    author：lsh
-->
<template>
    <section class="innerHome">
        <!-- 内容区 -->
        <section class="img">
            <img src="../assets/img/bac.jpg" height="100%" width="100%" alt="">
            <div>
            </div>
            首页内容区
        </section>
        <section style="color: #fff">
            <div style="height: 1080px;"></div>
            <div class="info">
                <div class="infoItem">
                    <div class="row">
                        <div style="display: inline-block;width: 30%;">
                            <a href="">
                                <div>
                                    <img src="../assets/img/p1.jpg" alt="">
                                    <h3>PRODUCT 1</h3>
                                    <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                                </div>
                            </a>
                        </div>
                        <div style="display: inline-block;width: 30%;">
                            <a href="">
                                <div>
                                    <img src="../assets/img/p1.jpg" alt="">
                                    <h3>PRODUCT 2</h3>
                                    <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                                </div>
                            </a>
                        </div>
                        <div style="display: inline-block;width: 30%;">
                            <a href="">
                                <div>
                                    <img src="../assets/img/p1.jpg" alt="">
                                    <h3>PRODUCT 3</h3>
                                    <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h700 bor product">
                <div class="productItem">
                    <di>
                        <div>
                            <h3>PRODUCTS</h3>
                            <p>1234135423546666666666666666666666</p>
                        </div>
                    </di>
                    <div class="row">
                        <div style="display: inline-block;width: 20%;">
                            <div>
                                <img src="../assets/img/c1.jpg" alt="">
                                <h3>PRODUCT 2</h3>
                                <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                            </div>
                        </div>
                        <div style="display: inline-block;width: 20%;">
                            <div>
                                <img src="../assets/img/c1.jpg" alt="">
                                <h3>PRODUCT 2</h3>
                                <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                            </div>
                        </div>
                        <div style="display: inline-block;width: 20%;">
                            <div>
                                <img src="../assets/img/c1.jpg" alt="">
                                <h3>PRODUCT 2</h3>
                                <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                            </div>
                        </div>
                        <div style="display: inline-block;width: 20%;">
                            <div>
                                <img src="../assets/img/c1.jpg" alt="">
                                <h3>PRODUCT 2</h3>
                                <p style="padding: 35px;">COMMITMENT TO INNOVATION SPEED TO MARKET</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h700 bor">
                <div style="display: inline-block;width: 50%;">left</div>
                <div style="display: inline-block;width: 50%;">right</div>
            </div>
        </section>
    </section>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style>
.img {
    width: 100%;
    height: 100%;
    /* height: 1080px; */
    /* background:url(../assets/img/bac.jpg) repeat-x fixed; */
    position: fixed;
    z-index: -999;
}
.h700 {
    height: 620px;
    /* background: #fff; */
}
.bor {
    border: 1px solid red;
}
.info {
    height: 620px;
    background: #ddd;
    border: 1px solid #ddd;
}
.infoItem {
    /* border: 1px solid blue; */
    margin: 90px 0 50px 0;
    background: #ddd;
}
.product {
    height: 620px;
    background: #fff;
    border: 1px solid #fff;
}
.productItem {
    /* margin: 90px 0 50px 0; */
    background: #fff;
}
.productItem h3 {
    color: #333;
}
.productItem p {
    color: #333;
}
.row {
    width: 80%;
    margin: 0 auto;
}
</style>
