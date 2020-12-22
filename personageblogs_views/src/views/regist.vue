<template>
  <div id="regist">
    <!-- <div id="cartoon">
        动画制作规则
    </div> -->
    <div
      id="Nav_regist"
      @change="
        getScroll;
        Scroll;
      "
    >
      <div class="Nav_left">
        <a href="">
          <i class="iconfont icon-letterboxd"></i>
          <span>Letmi</span>
        </a>
      </div>
      <div class="Nav_right">
        <i></i>
        <div class="feedback">意见反馈</div>
        <div class="Lang">
          <div class="lang_CH">
            简体中文 &nbsp;
            <i class="iconfont icon-xiala"></i>
          </div>
          <ul class="Lang_choose active">
            <li class="lang_zh">繁体中文</li>
            <li class="English">English</li>
          </ul>
        </div>
        <div class="rare_moblie">
          <i></i>
          <span>Letmi靓号</span>
          <div class="rare">
            <div class="rare_search">
              <input
                type="text"
                placeholder="搜索Letmi账号，列如‘9999’,‘6666’ "
              />
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
          <a href=""> 免费靓号 </a>
        </div>
        <div class="ID_Account">
          <!-- <form action="#" method="post"> -->
          <div class="Input-area">
            <input
              type="text"
              placeholder="昵称"
              :class="
                error_text_null || error_text
                  ? 'error_active'
                  : active == 0
                  ? 'active '
                  : ''
              "
              @focus="textfocus()"
              @blur="textblur()"
            />
            <div class="Input-area-Error-list">
              <p
                class="error-trp"
                :class="error_text_null || error_text ? 'error_active_p' : ' '"
                v-show="error_text_null"
              >
                <i> </i>昵称不能为空
              </p>
              <p
                class="error-trp"
                :class="error_text_null || error_text ? 'error_active_p' : ' '"
                v-show="error_text"
              >
                <i> </i>只能为中文，不能包括空格，且不能超过9个字符
              </p>
            </div>
          </div>
          <div class="Input-area">
            <input
              type="password"
              placeholder="秘密"
              :class="
                error_pw_null || error_pw
                  ? 'error_active'
                  : active == 1
                  ? 'active '
                  : ''
              "
              @focus="pwfocus()"
              @blur="pwblur()"
            />
            <div class="Input-area-Error-null">
              <p
                class=""
                v-show="error_pw_null"
                :class="error_pw_null || error_pw ? 'error_active_p' : ''"
              >
                秘密不能为空
              </p>
              <p
                v-show="error_pw"
                :class="error_pw_null || error_pw ? 'error_active_p' : ''"
              >
                以字母开头，长度在6~18之间，只能包含字母、数字和下划线
              </p>
            </div>
          </div>
          <div class="Input-area affirm">
            <input
              type="password"
              placeholder="再次确认秘密"
              :class="
                error_affirmpw_null || error_affirmpw
                  ? 'error_active'
                  : active == 2
                  ? 'active '
                  : ' '
              "
              @focus="affirmfocus()"
              @blur="affirmblur()"
            />
            <div class="Input-area-Error-null">
              <p
                class=""
                v-show="error_affirmpw_null"
                :class="
                  error_affirmpw_null || error_affirmpw ? 'error_active_p' : ''
                "
              >
                密码不能为空
              </p>
              <p
                v-show="error_affirmpw"
                :class="
                  error_affirmpw_null || error_affirmpw ? 'error_active_p' : ''
                "
              >
                密码与之前的密码不相同，请重新输入
              </p>
            </div>
          </div>
          <div class="mobile_choose">
            <div class="mobile_area">
              <div class="_area">
                <span> {{ prop }}</span>
                <i
                  class="iconfont icon-xiala"
                  :class="dispalyselect ? 'icon-xiala1' : 'icon-xiala'"
                  @click="DispalySelect()"
                ></i>
              </div>
              <div
                class="mobile_select"
                v-show="dispalyselect"
                @click="MobileSelect()"
              >
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
              <input
                type="text"
                placeholder="手机号码"
                :class="
                  error_mobile_null || error_mobile
                    ? 'error_active'
                    : mobileNum == true
                    ? 'active '
                    : ' '
                "
                @focus="Mobilefocus()"
                @blur="Mobileblur()"
              />
              <div class="Input-area-Error-null">
                <p
                  class=""
                  v-show="error_mobile_null"
                  :class="
                    error_mobile_null || error_mobile ? 'error_active_p' : ''
                  "
                >
                  手机号不能为空
                </p>
                <p
                  v-show="error_mobile"
                  :class="
                    error_mobile_null || error_mobile ? 'error_active_p' : ''
                  "
                >
                  手机号必须是以13|15|17|18开头,且长度为11
                </p>
              </div>
            </div>
          </div>
          <div class="mobile_trp">可通过该手机号找回密码</div>
          <div class="ID_sign-up">
            <input type="submit" value="立即注册" @click="regist()" />
          </div>
          <!-- </form> -->
        </div>
        <!-- 服务协议政策 treaty pact -->
        <div class="treaty">
          <div class="treaty_checkbox"></div>
          <div class="treaty_choose">
            <div>我已阅读并同意相关服务条款和隐私政策</div>
            <div><a href="">《Letmi号码规则》</a></div>
            <div><a href="">《隐私政策》</a></div>
            <div><a href="">《Letmi空间服务协议》</a></div>
            <div><a href="">《Letmi代理规则》</a></div>
          </div>
          <i class="treaty_icon iconfont icon-xiala"></i>
        </div>
        <!-- copyright 版权 -->
        <div id="copyright">
          <span>Copyright © 2012 Letmi Personage all Rights Reserved</span>
        </div>
      </div>
    </div>
    <div id="res_ID" v-show="registerID">
      <div>
        <h2>注册成功，账号如下：</h2>
        <span @click="close()">X</span>
      </div>
      <span class="letmi_ID">{{ Letmi }}</span>
      <button @click="gologin()">立即去登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      //错误提示相关变量
      error_text_null: false,
      error_text: false,
      error_pw_null: false,
      error_pw: false,
      error_affirmpw_null: false,
      error_affirmpw: false,
      active: -1,
      //下拉列表相关变量
      dispalyselect: false,
      prop: "+86",
      //手机号相关变量
      error_mobile_null: false,
      error_mobile: false,
      mobileNum: false,
      registerID: false,
      Letmi: null,
    };
  },
  methods: {
    //封装兼容性getScroll,
    getScroll() {
      if (window.scrollX || window.scrollY) {
        return {
          scrollX: window.scrollX,
          scrollY: window.scrollY,
        };
      } else {
        return {
          scrollX: document.documentElement.scrollTop,
          srcollY: document.documentElement.scrollLeft,
        };
      }
    },
    //检测Nav_regist模块距离
    Scroll() {
      let { scrollX, scrollY } = this.getScroll();
      console.log(scrollX, scrollY);
      let Nav_regist = document.getElementsByClassName("Nav_regist")[0];
      console.log(Nav_regist.scrollTop);
      // if(scrollY>)
    },
    //获取表单元素
    getInput() {
      let Input_text = document.getElementsByClassName("Input-area")[0]
        .childNodes[0];
      let Input_pw = document.getElementsByClassName("Input-area")[1]
        .childNodes[0];
      let Input_pw_affirm = document.getElementsByClassName("Input-area")[2]
        .childNodes[0];
      let mobile_Input = document.getElementsByClassName("_mobile")[0]
        .childNodes[0];
      return {
        Input_text,
        Input_pw,
        Input_pw_affirm,
        mobile_Input,
      };
    },
    textfocus() {
      let { Input_text } = this.getInput();
      //昵称只能是中文
      let reg = /^[\u4e00-\u9fa5]{0,}$/;
      //text边框变蓝触发条件
      this.active = 0;
      if (!Input_text.value) {
        if (this.error_text_null == true) {
          this.error_text_null = !this.error_text_null;
        }
      } else {
        if (!reg.test(Input_text.value)) {
          this.error_text = !this.error_text;
        }
      }
    },
    textblur() {
      let { Input_text } = this.getInput();
      this.active = -1;
      //昵称只能是中文
      let reg = /^[\u4e00-\u9fa5]{0,9}$/;
      if (!Input_text.value) {
        this.error_text_null = true;
      } else {
        this.error_text_null = false;
      }
      if (Input_text.value) {
        if (!reg.test(Input_text.value)) {
          this.error_text = true;
        } else {
          this.error_text = false;
        }
      }
    },
    pwfocus() {
      let { Input_pw } = this.getInput();
      // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
      let regpw = /^[a-zA-Z]\w{5,17}$/;
      //密码边框变蓝触发条件
      this.active = 1;
      if (!Input_pw.value) {
        if (this.error_pw_null == true) {
          this.error_pw_null = !this.error_pw_null;
        }
      } else {
        if (!regpw.test(Input_pw.value)) {
          this.error_pw = !this.error_pw;
        }
      }
    },
    pwblur() {
      let { Input_pw } = this.getInput();
      this.active = -1;
      // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
      let regpw = /^[a-zA-Z]\w{5,17}$/;
      if (!Input_pw.value) {
        this.error_pw_null = true;
      } else {
        this.error_pw_null = false;
      }
      if (Input_pw.value) {
        if (!regpw.test(Input_pw.value)) {
          this.error_pw = true;
        } else {
          this.error_pw = false;
        }
      }
    },
    affirmfocus() {
      let { Input_pw, Input_pw_affirm } = this.getInput();
      //再次确认密码边框变蓝触发条件
      this.active = 2;
      if (!Input_pw_affirm.value) {
        if (this.error_affirmpw_null == true) {
          this.error_affirmpw_null = !this.error_affirmpw_null;
        }
      } else {
        if (Input_pw_affirm.value !== Input_pw.value) {
          this.error_affirmpw = !this.error_affirmpw;
        }
      }
    },
    affirmblur() {
      let { Input_pw, Input_pw_affirm } = this.getInput();
      // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
      let regpw = /^[a-zA-Z]\w{5,17}$/;
      this.active = -1;
      if (!Input_pw_affirm.value) {
        this.error_affirmpw_null = true;
      } else {
        this.error_affirmpw_null = false;
      }
      if (Input_pw_affirm.value) {
        if (Input_pw_affirm.value !== Input_pw.value) {
          this.error_affirmpw = true;
        } else {
          this.error_affirmpw = false;
        }
      }
    },
    //下拉列表
    DispalySelect() {
      this.dispalyselect = !this.dispalyselect;
    },
    MobileSelect() {
      let mobile_select = document.getElementsByClassName("mobile_select")[0];
      let child = mobile_select.childNodes;
      let len = child.length;
      let res = "";
      for (let i = 0; i < len; i++) {
        (() => {
          child[i].onclick = () => {
            this.prop = child[i].textContent.split(" ").pop();
            if (this.prop == child[i].textContent.split(" ").pop()) {
              this.dispalyselect = !this.dispalyselect;
            }
          };
        })();
      }
    },
    //手机号检测
    Mobilefocus() {
      let { mobile_Input } = this.getInput();
      this.mobileNum = !this.mobileNum;
      //开头必须是以13 或者 15 或者 17 或者 18开头，
      let mobilereg = /^(13[0|1|2|3|4|5|6|7|8|9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
      if (!mobile_Input.value) {
        if (this.error_mobile_null == true) {
          this.error_mobile_null = !this.error_mobile_null;
        }
      } else {
        if (!mobilereg.test(mobile_Input.value) && this.error_mobile == true) {
          this.error_mobile = !this.error_mobile;
        }
      }
    },
    Mobileblur() {
      let { mobile_Input } = this.getInput();
      this.mobileNum = !this.mobileNum;
      //开头必须是以13 或者 15 或者 17 或者 18开头，
      let mobilereg = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
      if (!mobile_Input.value) {
        this.error_mobile_null = true;
      } else {
        this.error_mobile_null = false;
      }
      if (mobile_Input.value) {
        if (!mobilereg.test(mobile_Input.value)) {
          this.error_mobile = true;
        } else {
          this.error_mobile = false;
        }
      }
    },
    //账号注册
    regist() {
      //开头必须是以13 或者 15 或者 17 或者 18开头，
      let mobilereg = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
      let {
        Input_text,
        Input_pw,
        Input_pw_affirm,
        mobile_Input,
      } = this.getInput();
      if (
        !Input_text.value &&
        !Input_pw.value &&
        !Input_pw_affirm.value &&
        !mobilereg.test(mobile_Input.value)
      ) {
        this.error_text_null = true;
        this.error_pw_null = true;
        this.error_affirmpw_null = true;
        this.error_mobile_null = true;
      }
      if (
        Input_text.value &&
        Input_pw.value &&
        Input_pw_affirm.value &&
        mobilereg.test(mobile_Input.value)
      ) {
        this.$http
          .post("/user/regist", {
            params: {
              name: Input_text.value,
              LetmiPassword1: Input_pw.value,
              LetmiPassword2: Input_pw_affirm.value,
              mobile: mobile_Input.value,
              Lt: "Lt_A" + Math.floor(Math.random() * 1e20),
            },
          })
          .then((res) => {
            console.log(res);
            this.Letmi = res.data.Letmi;
            this.registerID = !this.registerID;
          })
          .catch((err) => {
            console.log("注册请求发送失败");
          });
      }
    },
    close() {
      this.registerID = !this.registerID;
    },
    gologin() {
      console.log(this.Letmi);
      if (this.Letmi) {
        this.$router.push({
          path: "/login",
          name: "login",
          params: {
            Letmi: this.Letmi,
          },
        });
      }
    },
  },
  mounted() {},
};
</script>
