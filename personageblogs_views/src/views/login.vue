<template>
  <!-- login 登录 -->
  <div id="login">
    <div id="Nav_login">
      <div class="logo">
        <i class="iconfont icon-letterboxd" title="Letmi"></i>
        <span>Letmin</span>
      </div>
      <div class="featrue">
        <div v-for="(item, i) in featrue" :key="i">
          <i
            :title="item.title"
            class="iconfont selected"
            :class="item.icon"
            @click="Module(i)"
          ></i>
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
      <div class="Input_text" :class="textflag ? 'selected' : ''">
        <label for="username" @click="label()"></label>
        <i
          class="iconfont icon-letterboxd"
          :class="textflag ? 'selected' : ''"
        ></i>
        <input
          placeholder="Letmin号码/手机/邮箱"
          id="username"
          :value="Letmi"
          @focus="focus('textflag')"
          @blur="blur('textflag')"
        />
        <i class="iconfont icon-xiala1"></i>
        <div class="tripText" v-show="showTripText">请输入账号之后在登录</div>
        <div class="tripText Textreg" v-show="showTripTextreg">
          账号不能含有英文，特殊字符，只能是数字
        </div>
      </div>
      <div class="Input_pw" :class="psflag ? 'selected' : ''">
        <label for="password" @click="label()"></label>
        <i
          class="iconfont"
          :class="psflag ? 'selected icon-lock1' : 'icon-shangsuo'"
        ></i>
        <input
          type="password"
          placeholder="密码"
          id="password"
          @focus="focus('psflag')"
          @blur="blur('psflag')"
        />
        <i class="iconfont icon-jianpan2" title="打开软键盘"></i>

        <div class="tripPs" v-show="showTripPw">请输入密码之后在登录</div>
        <div class="tripPs Psreg" v-show="showTripPwreg">
          密码：以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        </div>
      </div>
      <div class="Input_ck">
        <div>
          <input type="checkbox" name="proudect" value="自动登录" />
          <span>自动登录</span>
        </div>
        <div>
          <input
            type="checkbox"
            class="checkboxed"
            name="proudect"
            value="记住秘密"
          />
          <span>记住秘密</span>
        </div>
        <router-link to="/findwind"><span>找回秘密</span></router-link>
      </div>
      <div class="Input_login">
        <i class="iconfont icon-icon_anquan"></i>
        <input type="submit" value="安全登录" class="Login" @click="Login()" />
      </div>
      <div class="loading" v-show="loading">
        <div class="mostor">
          <div class="eye">
            <div class="Bayll"></div>
          </div>
          <div class="Bay"></div>
          <div style="font-size: 12px">加载中...</div>
        </div>
      </div>
      <div class="errTrip" v-show="errTrip">
        <div>
          <span>输入的账号或密码有误</span>
          <a href="#" style="color: blue" @click="goback()">点击返回</a>
        </div>
      </div>
      <div class="await_module" v-show="await_module">
        <h3>该模快等待中</h3>
        <a href="#" style="color: blue" @click="gobackmodule()">点击返回</a>
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
    <div id="RQ_code"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textflag: false,
      psflag: false,
      dataList: [],
      disabled: false,
      featrue: [
        {
          title: "设置",
          icon: "icon-shezhi2",
        },
        {
          title: "最小化",
          icon: "icon-zuixiaohua",
        },
        {
          title: "关闭",
          icon: "icon-guanbi",
        },
      ],
      showTripText: false,
      showTripTextreg: false,
      showTripPw: false,
      showTripPwreg: false,
      flag: true,
      errTrip: false,
      loading: false,
      await_module: false,
      Letmi: null,
    };
  },
  methods: {
    Module(i) {
      this.await_module = !this.await_module;
    },
    gobackmodule() {
      this.await_module = !this.await_module;
    },
    getInput() {
      let flag = true;
      let inputText = document.getElementById("username"),
        inputPs = document.getElementById("password"),
        login = document.getElementsByClassName("Login")[0],
        Input_pw = document.getElementsByClassName("Input_pw")[0],
        Input_text = document.getElementsByClassName("Input_text")[0];
      return {
        inputText,
        inputPs,
        login,
        Input_text,
        Input_pw,
      };
    },
    focus(flag) {
      let { inputText, inputPs } = this.getInput();
      if (flag == "textflag") {
        this.textflag = !this.textflag;
        inputText.placeholder = " ";
      } else if (flag == "psflag") {
        this.psflag = !this.psflag;
        inputPs.placeholder = "";
        this.textflag = false;
      }
    },
    blur(flag) {
      let { inputText, inputPs } = this.getInput();
   
        this.Letmi = inputText.value;
    
      if (flag == "textflag") {
        this.textflag = !this.textflag;
        inputText.placeholder = "Letmin号码/手机/邮箱";
      } else if (flag == "psflag") {
        this.psflag = !this.psflag;
        inputPs.placeholder = "密码";
      }
    },
    Login() {
      let { inputText, inputPs, login, Input_text, Input_pw } = this.getInput();
      // 账号不能含有英文，特殊字符，只能是数字
      let regtext = /^\d{0,12}$/;
      // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
      let regps = /^[a-zA-Z]\w{5,17}$/;
      let timer = null,
        timertext = null,
        timerps = null,
        time = 10,
        timetext = 20,
        timeps = 20;
      if (!inputText.value || !inputPs.value) {
        if (!inputText.value) {
          timer = setInterval(() => {
            this.showTripText = true;
            time--;
            if (time <= 0 || inputText.value) {
              clearInterval(timer);
              this.showTripText = !this.showTripText;
              time = 10;
            }
          }, 200);
        } else {
          timer = setInterval(() => {
            this.showTripPw = true;
            time--;
            if (time <= 0 || inputPs.value) {
              clearInterval(timer);
              this.showTripPw = !this.showTripPw;
              time = 10;
            }
          }, 200);
        }
      } else {
        if (inputText.value && !regtext.test(inputText.value)) {
          timertext = setInterval(() => {
            this.showTripTextreg = true;
            timetext--;
            if (timetext <= 0 || regtext.test(inputText.value)) {
              clearInterval(timertext);
              this.showTripTextreg = !this.showTripTextreg;
              timetext = 10;
            }
          }, 200);
        } else {
          if (inputPs.value && !regps.test(inputPs.value)) {
            timerps = setInterval(() => {
              this.showTripPwreg = true;
              timeps--;
              if (timeps <= 0 || regps.test(inputPs.value)) {
                clearInterval(timerps);
                this.showTripPwreg = !this.showTripPwreg;
                timeps = 10;
              }
            }, 200);
          }
        }
      }
      if (regtext.test(inputText.value) && regps.test(inputPs.value)) {
        console.log("ok 验证成功发送请求");
        this.loading = !this.loading;
        setTimeout(() => {
          this.$http
            .post("/user/login", {
              params: {
                Letmi: `${inputText.value}`,
                LetmiPassword: `${inputPs.value}`,
              },
            })
            .then((res) => {
              if (res.data.token) {
                //存储登录成功返回的token
                localStorage.setItem("token", res.data.token);
              }
              if (res.status == 200) {
                this.dataList = res.data.data;
              }
              for (let key in this.dataList) {
                if (
                  inputText.value == this.dataList[key].Letmi &&
                  inputPs.value.toString() == this.dataList[key].LetmiPassword
                ) {
                  this.$router.push({
                    path: "/",
                    name: "home",
                    params: {
                      Letmi: this.dataList[key].Letmi,
                      alert: "页面跳转成功",
                    },
                  });
                } else {
                  this.errTrip = !this.errTrip;
                }
              }
              if (res.data.err < 0) {
                this.errTrip = !this.errTrip;
              }
            })
            .catch((err) => {
              console.log("请求失败", err);
              this.errTrip = !this.errTrip;
            });
        }, 3000);
      }
    },
    goback() {
      this.errTrip = !this.errTrip;
      this.loading = !this.loading;
    },
  },
  mounted() {
    this.getInput();
     console.log("regist路由转过来的数据" + this.$route.params.Letmi);
    if (this.$route.params.Letmi) {
      localStorage.setItem("Letmi", this.$route.params.Letmi);
      this.Letmi = this.$route.params.Letmi; 
    }
  },
};
</script>
