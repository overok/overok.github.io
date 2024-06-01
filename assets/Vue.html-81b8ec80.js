import{_ as e,o as n,c as i,a as s}from"./app-dc634640.js";const r={},d=s(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1><h2 id="nprogress-页面顶部加载条" tabindex="-1"><a class="header-anchor" href="#nprogress-页面顶部加载条" aria-hidden="true">#</a> Nprogress 页面顶部加载条</h2><ul><li>安装 cnpm install --save nprogress</li></ul><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>//进度条颜色
#nprogress .bar {
    z-index: 9999;
    background: #48AD98;
}

//router.js 文件内输入
import NProgress from &#39;nprogress&#39;
import &#39;nprogress/nprogress.css&#39; 
NProgress.configure({     
  easing: &#39;ease&#39;,  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) =&gt; { //beforeEach是router的钩子函数，在进入路由前执行
  NProgress.start();
  if (to.meta.title) { //判断是否有标题
    document.title = to.meta.title
  }
  next() //执行进入路由，如果不写就不会进入目标页
})
router.afterEach(() =&gt; {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})


//或 axios.js 文件内引入  http response 拦截器
axios.interceptors.response.use(
  response =&gt; {
      if(typeof response.config.nprogress != undefined &amp;&amp; !response.config.nprogress) { // 发送axios请求时 可以设置 nprogress=false 来设置是否需要进度条
        NProgress.done()
      }
      return response;
    }
  },
  error =&gt; {
    v.$message.error(&#39;未知错误&#39;)
    return Promise.reject(error);
  }
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function a(v,c){return n(),i("div",null,l)}const u=e(r,[["render",a],["__file","Vue.html.vue"]]);export{u as default};
