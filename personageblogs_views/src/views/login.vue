<template>
<!-- login 登录 -->
<div id="login">
    <div id="Nav_login">
        <div class="logo">
            <i class="iconfont icon-letterboxd " title="Letmi"></i>
            <span>Letmin</span>
        </div>
        <div class="featrue">
            <div v-for=" (item , i) in featrue" :key="i">
                <i :title="item.title" class="iconfont  selected" :class="item.icon"></i>
            </div>

        </div>
    </div>
    <div id="profile">
        <div class="profile_default">
            <i class="iconfont icon-letterboxd"></i>
            <span>Letmin</span>
        </div>
    </div>
    <div id="login_sign">
        <!-- <form action=" " method=""> -->
        <div class="Input_text " :class="  textflag  ? 'selected': ''">
            <i class="iconfont icon-letterboxd " :class="  textflag  ? 'selected': '' "></i>
            <input placeholder="Letmin号码/手机/邮箱" id="username" @focus="focus('textflag')" @blur="blur('textflag')" />
            <i class="iconfont icon-xiala1"></i>
            <div class=""></div>
        </div>
        <div class="Input_pw" :class="  psflag ? 'selected': ''">
            <i class="iconfont  " :class=" psflag   ? 'selected icon-lock1': 'icon-shangsuo'"></i>
            <input type="password" placeholder="密码" id="password" @focus="focus('psflag')" @blur="blur('psflag')" />
            <i class="iconfont icon-jianpan2" title="打开软键盘"></i>
        </div>
        <div class="Input_ck">
            <div>
                <input type="checkbox" name="proudect" value="自动登录" />
                <span>自动登录</span>
            </div>
            <div>
                <input type="checkbox" name="proudect" value="记住秘密" />
                <span>记住秘密</span>
            </div>
            <span>找回秘密</span>
        </div>
        <div class="Input_login">
            <i class="iconfont icon-icon_anquan"></i>
            <input type="submit" value="安全登录" @click="Login()" />
        </div>
        <!-- </form> -->
    </div>
    <div id="Bottom_login">
        <router-link to="/regist">
            <span>注册账号</span>
        </router-link>
        <i class="iconfont icon-erweima" title="二维码登录"> </i>
    </div>
    <!-- 二维码登录 -->
    <div id="RQ_code">

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            textflag: false,
            psflag: false,
            dataList: [],
            featrue: [{
                    title: '设置',
                    icon: 'icon-shezhi2'
                },
                {
                    title: '最小化',
                    icon: 'icon-zuixiaohua'
                },
                {
                    title: '关闭',
                    icon: 'icon-guanbi'
                }
            ],
        }
    },
    methods: {
        focus(flag) {
            if (flag == 'textflag') {
                this.textflag = !this.textflag;
                let inputText = document.getElementById('username');
                inputText.placeholder = ' ';
                this.psflag = false;
            } else if (flag == 'psflag') {
                this.psflag = !this.psflag
                let inputPs = document.getElementById('password');
                inputPs.placeholder = ''
                this.textflag = false;
            }
        },
        blur(flag) {
            if (flag == 'textflag') {
                this.textflag = !this.textflag;
                let inputText = document.getElementById('username');
                inputText.placeholder = 'Letmin号码/手机/邮箱'
            } else if (flag == 'psflag') {
                this.psflag = !this.psflag;
                let inputPs = document.getElementById('password');
                inputPs.placeholder = '密码'
            }
        },
        Login() {
            let valText = document.getElementById('username');
            let valPs = document.getElementById('password')
            // this.$http.post('/login')
            this.$http.post('/login', {
                    params: {
                        Letmi: `${valText.value}`
                    }
                })
                .then((res) => {
                    if (res.status == 200) {
                        this.dataList = res.data.data
                    }
                    for (let key in this.dataList) {
                        if (valText.value == this.dataList[key].Letmi && valPs.value.toString() == this.dataList[key].Letpassword) {
                            console.log('登录成功')
                            this.$router.push({
                                name: "home",
                                params: {
                                    Letmi: this.dataList[key].Letmi,
                                    alert: "页面跳转成功"
                                }
                            })
                        } else {
                            return
                        }
                    }
                })
                .catch(() => {
                    console.log('请求有误')
                })

        },
        mounted() {
            this.focus();
            this.blur();
            this.Login()
        },
    }
}
</script>
