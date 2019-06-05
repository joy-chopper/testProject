<!--
    components: header.vue
    note: 导航栏
    author：lsh
-->
<template>
    <section class="home w100p">
        <nav class="navBar">
            <div class="logo disp_inb h100p">logo</div>
            <div class="navDiv disp_inb h100p">
                <ul class="navUl">
                    <!-- <li class="fl">
                        logo
                    </li> -->
                    <li class="fl">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li  class="fl">
                        <a href="javascript:;">产品</a>
                        <!-- <router-link to="/products">产品</router-link> -->
                        <div class="navList" v-if="false">
                            <div class="row">
                                <div style="width: 30%;display: inline-block;">产品1</div>
                                <div style="width: 65%;display: inline-block;">
                                    <div style="display: inline-block;">a1 |</div>
                                    <div style="display: inline-block;">a2</div>
                                </div>
                            </div>
                            <div class="row">产品2</div>
                            <div class="row">产品3</div>
                            <div class="row">产品4</div>
                            <div class="row">产品5</div>.
                        </div>
                    </li>
                    <li  class="fl">
                        <router-link to="/products">OEM</router-link>
                    </li>
                    <li  class="fl">
                        <router-link to="/products">公司介绍</router-link>
                    </li>
                    <!-- <li  class="fl">
                        <router-link to="/products">产品视频</router-link>
                    </li> -->
                </ul>
            </div>
            <div class="search-box pull-right">
                <span class="search_icon hidden-xs search-btn"></span>
            </div>
            <div class="chiToEn" style="display: inline-block;">
                中/En
            </div>
        </nav>
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
.home {
    background: rgba(10, 10, 10, 0.9);
    position: fixed;
}
.navBar {
    width: 60%;
    padding: 10px 0;
    height: 50px;
    line-height: 50px;
    /* margin: 10px; */
    /* border: 1px solid red; */
    display: inline-block;
    /* background: rgba(0, 0, 0, 0.7); */
    color: aliceblue !important;
}
.navUl {
    list-style: none;
    height: 50px;
    margin: 0;
    line-height: 50px;
}
.navUl>li {
    margin: 0 10px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
}
.navUl>li a {
    color: aliceblue !important;
    text-decoration: none;
}
.navDiv {
    /* width: 60%; */
    height: auto;
    /* float: right; */
}
.logo {
    width: 20%;
    vertical-align: top;
    float: left;
}
.search-box {
    position: relative;
    padding: 12px 0;
    float: right;
}
.search-box .search_icon {
    float: right;
    width: 40px;
    height: 26px;
    text-indent: 1000px;
    border: none;
    overflow: hidden;
    cursor: pointer;
    background: url(../assets/img/img.png) no-repeat 7px -329px;
    outline: none;
}
.chiToEn {
    height: 50px;
    margin: 0;
    line-height: 50px;
    display: inline-block;
    position: absolute;
    float: right;
    margin-left: 200px;
}
.navList {
    width: 500px;
    height: auto;
    background-color: black;
    color: #fff;
    margin: 20px 0;
    position: absolute;
}
.navList ul li {
    list-style: none;
}
.row {
    display: inline-block;
    width: 100%;
}
</style>
