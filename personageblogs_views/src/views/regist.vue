<template>
<div id="regist">

    <div id="cartoon">
        动画制作规则
    </div>
    <div id="Nav_regist">
        <div class="Nav_left">
            <a href="">
                <i class="iconfont icon-letterboxd "></i>
                <span>Letmi</span>
            </a>
        </div>
        <div class="Nav_right">
            <i></i>
            <div class="feedback">意见反馈</div>
            <div class="Lang">
                <div class="lang_CH">
                    简体中文 &nbsp;
                    <i class="iconfont icon-xiala "></i>
                </div>
                <ul class="Lang_choose active">
                    <li class="lang_zh">繁体中文 </li>
                    <li class="English">English </li>

                </ul>
            </div>
            <div class="rare_moblie">
                <i></i>
                <span>Letmi靓号</span>
                <div class="rare">
                    <div class="rare_search">
                        <input type="text" placeholder="搜索Letmi账号，列如‘9999’,‘6666’ " />
                        <i class="iconfont icon-sousuo">搜索</i>
                    </div>
                    <div class="rare_choose">
                        <a href="">生日</a>
                        <a href="">星宿</a>
                        <a href="">星座</a>
                        <a href="">爱情</a>
                        <a href="">手机</a>

                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- 账号注册 -->
    <div id="regist_contariner">
        <div id="regist_ID">
            <div>
                <h1>欢迎注册Letmi账号</h1>
                <router-link to="/login" class="goback">返回</router-link>
            </div>

            <div class="meet">

                <h2>每一天，与Letmi相遇</h2>
                <a href="">
                    免费靓号
                </a>

            </div>
            <div class="ID_Account">
                <form action="" method="post">
                    <div class="Input-area">
                        <input type="text" placeholder="昵称" />
                        <div class="Input-area-Error-null">
                            <p class="error-trp"><i>图标</i>昵称不可以为空</p>
                        </div>
                        <div class="Input-area-Error-list">
                            <p class="error-trp"><i>图标</i>昵称不可以为空</p>
                        </div>
                    </div>
                    <div class="Input-area">
                        <input type="password" placeholder="秘密">
                        <div class="Input-area-Error-null">
                            <p class="error-trp">秘密不能为空</p>
                        </div>
                        <div class="Input-area-Error-list">
                            <p class="">不能包括空格</p>
                            <p class="">8-16字符以内</p>
                            <p class="">数字、符号、字母必须2种以上</p>
                        </div>
                    </div>

                    <div class="Input-area affirm">
                        <input type="password" placeholder="再次确认秘密">
                        <div class="Input-area-Error-null">
                            <p class="error-trp">秘密不能为空</p>
                        </div>
                        <div class="Input-area-Error-list">
                            <p class="">不能包括空格</p>
                            <p class="">8-16字符以内</p>
                            <p class="">数字、符号、字母必须2种以上</p>
                        </div>
                    </div>
                    <div class="mobile_choose">
                        <div class="mobile_area">
                            <div class="_area">
                                <span> +86</span>
                                <i class="iconfont icon-xiala"></i>
                            </div>
                            <div class="mobile_select">
                                <span class="selected">中国 +86</span>
                                <span>中国香港特别行政区 +852</span>
                                <span>中国澳门行政区 +853</span>
                                <span>中国台湾地区 +886</span>
                                <span>中国 +86</span>
                                <span>中国香港特别行政区 +852</span>
                                <span>中国澳门行政区 +853</span>
                                <span>中国台湾地区 +886</span>
                                <span>中国 +86</span>
                                <span>中国香港特别行政区 +852</span>
                                <span>中国澳门行政区 +853</span>
                                <span>中国台湾地区 +886</span>
                                <span>中国 +86</span>
                                <span>中国香港特别行政区 +852</span>
                                <span>中国澳门行政区 +853</span>
                                <span>中国台湾地区 +886</span>
                            </div>
                        </div>
                        <div class="_mobile">
                            <input type="text" placeholder="手机号码">
                        </div>
                    </div>
                    <div class="mobile_trp">可通过该手机号找回密码</div>
                    <div class="ID_sign-up">
                        <input type="submit" value="立即注册" />
                    </div>
                </form>
            </div>
            <!-- 服务协议政策 treaty pact -->
            <div class="treaty">
                <div class="treaty_checkbox"></div>
                <div class="treaty_choose">
                    <div>我已阅读并同意相关服务条款和隐私政策</div>
                    <div> <a href="">《Letmi号码规则》</a></div>
                    <div> <a href="">《隐私政策》</a></div>
                    <div> <a href="">《Letmi空间服务协议》</a></div>
                    <div> <a href="">《Letmi代理规则》</a></div>
                </div>
                <i class="treaty_icon iconfont icon-xiala"></i>
            </div>
            <!-- copyright 版权 -->
            <div id="copyright">
                <span>Copyright © 2012 Letmi Personage all Rights Reserved</span>
            </div>
        </div>
    </div>

</div>
</template>
