import{_ as a,r as s,o as d,c,b as e,d as i,e as r,a as l}from"./app-dc634640.js";const t={},v=e("h1",{id:"基础知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基础知识","aria-hidden":"true"},"#"),i(" 基础知识")],-1),o={href:"https://mp.weixin.qq.com/s/hN2yTtFLyFBWmOrKF-E8lQ",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/m0_52578688/article/details/125284019",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/youqiancheng/p/15718529.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/qq_39200185/article/details/114662626",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/darabiuz/article/details/121962153",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/lutwelve/p/16173898.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/qq_39200185/article/details/114662626",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/h118264/article/details/116033833",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端" aria-hidden="true">#</a> 微前端</h2><p>微前端不是一门具体的技术，而是整合了技术、策略和方法，可能会以脚手架、辅助插件和规范约束这种生态圈形式展示出来，是一种宏观上的架构。微前端并没有技术栈的约束。每一套微前端方案的设计，都是基于实际需求出发。</p><p>iframe虽然基本能做到微前端所要做的所有事情，但它的最大问题也在于他的隔离性无法被突破，导致应用间上下文无法被共享.</p><p>iframe的特性导致搜索引擎无法获取到其中的内容，进而无法实现应用的seo</p><ul><li>各解决方案的利弊：</li></ul><p>1.iframe可以直接加载其他应用，但无法做到单页导致许多功能无法正常在主应用中展示。</p><p>2.web Components及ESM是浏览器提供给开发者的能力，能在单页中实现微前端，不过后者需要做好代码隔离，并且他们都是浏览器的新特性，都存在兼容性问题，微前端方面的探索也不成熟，只能作为面向未来的微前端手段。</p><p>3.qiankun基本上可以称为单页版的iframe，具有沙箱隔离及资源预加载的特点，几乎无可挑剔。但可能存在以下几点不足：</p><p>3.1对于React 深度定制项目来说，无法做到状态管理很好的传递 3.2对于非标准的AMD、UMD、SystemJS 等加载方式的库会存在依赖问题(需要针对性改造) 3.3多框架实现体积过大以及存在一定的调试成本</p><p>4EMP作为最年轻微前端解决方案，也是吸收了许多web优秀特性才诞生的，它在实现微前端的基础上，扩充了跨应用状态共享、跨框架组件调用、远程拉取ts声明文件、动态更新微应用等能力。同时，细心的小伙伴应该已经发现，EMP能做到第三方依赖的共享，使代码尽可能地重复利用，减少加载的内容。</p><h2 id="margin塌陷问题" tabindex="-1"><a class="header-anchor" href="#margin塌陷问题" aria-hidden="true">#</a> margin塌陷问题</h2><p>其实盒子的初始状态是标准的盒子，当想让它触发了BFC规范以后,形成了相对独立的容器，是不会受外其他外界影响的。</p><h3 id="父子塌陷" tabindex="-1"><a class="header-anchor" href="#父子塌陷" aria-hidden="true">#</a> 父子塌陷</h3><ul><li>给父元素添加一个上边框</li><li>给父元素添加overflow：hidden</li><li>display属性设置成 inline-block</li><li>给父元素添加padding属性</li></ul><h3 id="兄弟塌陷" tabindex="-1"><a class="header-anchor" href="#兄弟塌陷" aria-hidden="true">#</a> 兄弟塌陷</h3><ul><li>下面一层添加overflow:hidden</li></ul><h2 id="如何实现移动端-1px-边框" tabindex="-1"><a class="header-anchor" href="#如何实现移动端-1px-边框" aria-hidden="true">#</a> 如何实现移动端 1px 边框</h2><ul><li>使用border-image实现</li></ul><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>.background-image{
  background: url(../img/line.png) repeat-x left bottom;
  -webkit-background-size: 100% 1px;
  background-size: 100% 1px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用box-shadow模拟边框</li></ul><p>.box-shadow-1px {box-shadow: inset 0px -1px 1px -1px #c8c7cc;}</p><h2 id="vue中style-scoped" tabindex="-1"><a class="header-anchor" href="#vue中style-scoped" aria-hidden="true">#</a> vue中style scoped</h2><p>实现原理:style 标签中添加 scoped 属性后，vue 就会为当前组件中的 DOM 元素添加唯一的一个自定义属性（唯一性的标记）【data-v-xxx】,即CSS带属性选择器，以此完成类似作用域的选择方式，从而达到样式私有化，不污染全局的作用。</p><h2 id="vue和react的diff算法的区别" tabindex="-1"><a class="header-anchor" href="#vue和react的diff算法的区别" aria-hidden="true">#</a> vue和react的diff算法的区别</h2><ul><li><p>共同点：vue和diff算法，都是不进行跨层级比较，只做同级比较</p></li><li><p>不同点：</p><ul><li>1.vue进行diff时，调用patch打补丁函数，一边比较一边给真实的dom打补丁，vue对比节点时，当节点元素类型相同，类名不同时，认为是不同的元素，删除重新创建，而react认为是同类型的节点，进行修改操作</li><li>2.vue列表对比的时候，采用从两端到中间的方式，旧集合和新集合两端各存在两个指针，两两进行比较，每次对比结束后，指针向队列中间移动；react则是从左往右一次对比，利用元素的index和lastindex进行比较</li><li>3.当一个集合把最后一个节点移动到最前面，react会把前面的节点依次向后移动，而Vue只会把最后一个节点放在最前面，这样的操作来看，Vue的diff性能是高于react的</li></ul></li></ul><h2 id="pwa-和-web-workers-和-service-worker" tabindex="-1"><a class="header-anchor" href="#pwa-和-web-workers-和-service-worker" aria-hidden="true">#</a> PWA 和 web workers 和 Service Worker</h2><h3 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h3><ul><li>原理：PWA（Progressive Web App，渐进式网页应用，逐渐接近原生app的web app）是一种理念，PWA仍然是网站，只是在缓存、通知、后台功能等方面表现更好</li></ul><h3 id="web-workers" tabindex="-1"><a class="header-anchor" href="#web-workers" aria-hidden="true">#</a> web workers</h3>`,29),w={href:"https://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"原理：Web Workers为WEB前端网页上的脚本，提供了一种能在后台进程中运行的方法。一旦它被创建，Web Workers就可以通过postMessage()向任务池发送任务请求， 执行完之后再通过postMessage()返回消息给创建者指定的事件处理程序(通过onmessage进行捕获)。",-1),_=e("li",null,"注意点：同源限制 ，DOM 限制，通信联系，Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。",-1),W=e("li",null,"因为js是单线程，如果存在大数据运算的时候会影响用户使用体验，出现卡顿的情况。",-1),S=e("li",null,"通过使用Web Worker， 我们可以在浏览器后台运行Javascript， 而不占用浏览器自身线程（Web work实现多线程）。",-1),y=e("li",null,[i("web workers的几个使用场景可以参考下： "),e("ul",null,[e("li",null,"当大图片canvas转base64的时候非常耗时，就可以使用wokers"),e("li",null,"端对端加密的时候，要大量计算，可以使用wokers"),e("li",null,"拼写检查，检索的所有工作可以让wokers来完成，不会阻塞UI"),e("li",null,"indexdb ，在网络不稳定情况下,使用indexdb api的时候，可以交给wokers，这样不会阻塞主线UI")])],-1),j=l(`<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var worker = new Worker(&#39;work.js&#39;);
//主线程调用worker.postMessage()方法，向 Worker 发消息
worker.postMessage(&#39;Hello World&#39;);
worker.postMessage({method: &#39;echo&#39;, args: [&#39;Work&#39;]});
//主线程通过worker.onmessage指定监听函数，接收子线程发回来的消息
worker.onmessage = function (event) {
  console.log(&#39;Received message &#39; + event.data);
  doSomething();
}
function doSomething() {
  // 执行任务
  worker.postMessage(&#39;Work done!&#39;);
}
//主动关闭woker
worker.terminate();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-worker" tabindex="-1"><a class="header-anchor" href="#service-worker" aria-hidden="true">#</a> Service Worker</h3><p>一个服务器与浏览器之间的中间人角色，如果网站中注册了service worker那么它可以拦截当前网站所有的请求，进行判断（需要编写相应的判断程序），如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器。从而大大提高浏览体验。</p><ul><li>原理：Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。</li><li>注意：Service Worker 不能直接操作 DOM,可以通过事件机制postMessage来处理。处于安全性考虑，必须在 HTTPS 环境下才能工作。当然在本地调试时，使用localhost则不受HTTPS限制。</li><li>Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。</li></ul><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>//确认浏览器支持 Service Worker 以后，会注册一个 Service Worker。
if (&#39;serviceWorker&#39; in navigator) {
  window.addEventListener(&#39;load&#39;, function() {
    navigator.serviceWorker.register(&#39;/service-worker.js&#39;);
  });
}
//拦截请求的例子
self.addEventListener(&#39;fetch&#39;, (event) =&gt; {
  event.waitUntil(
    if (event.request.url.includes(&#39;/product&#39;) {
      let productId = event.data.productId
      let productCount = getProductData(productId)
      indexedDB.open(&#39;store&#39;, 1, (db) =&gt; {
        let productStore = db.createObjectStore(&#39;products&#39;, { keyPath: &#39;id&#39; })
        productStore.put({ id: productId, count: ++productCount })
      })
    })
  )
})

1.注册Service worker 在你的index.html加入以下内容
/* 判断当前浏览器是否支持serviceWorker */
if (&#39;serviceWorker&#39; in navigator) {
    /* 当页面加载完成就创建一个serviceWorker */
    window.addEventListener(&#39;load&#39;, function () {
        /* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。 
        //在这个例子里，我们指定了 &#39;/&#39;，表示 根网域下的所有内容。这也是默认值。 */
        navigator.serviceWorker.register(&#39;./serviceWorker.js&#39;, {scope: &#39;./&#39;})
            .then(function (registration) {
                console.log(&#39;注册成功 &#39;, registration.scope);
            })
            .catch(function (err) {
                console.log(&#39;注册失败&#39;, err);
            });
    });
}
2. 在前端项目public文件夹下新建sw-my.js，并定义需要缓存的文件路径：
// 定义需要缓存的文件
var cacheFiles = [
  &#39;./lib/weui/weui.min.js&#39;,
  &#39;./lib/slider/slider.js&#39;,
  &#39;./lib/weui/weui.min.css&#39;
]
var cacheName = &#39;20190301&#39;// 定义缓存的key值
3.监听install事件，来进行相关文件的缓存操作：
/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
this.addEventListener(&#39;install&#39;, function (event) {
    3.1// 找到key对应的缓存并且获得可以操作的cache对象
    var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
        // 将需要缓存的文件加进来
        return cache.addAll(cacheFiles)
    })
    e.waitUntil(cacheOpenPromise)

    3.2/* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
    event.waitUntil(
        /* 创建一个名叫V1的缓存版本 */
        caches.open(&#39;v1&#39;).then(function (cache) {
            /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
            return cache.addAll([
                &#39;./index.html&#39;
            ]);
        })
    );
});

4.监听fetch事件来使用缓存数据：
/* 注册fetch事件，拦截全站的请求 */
this.addEventListener(&#39;fetch&#39;, function(event) {
    console.log(&#39;现在正在请求：&#39; + e.request.url)
    event.respondWith(
        // 判断当前请求是否需要缓存
        caches.match(e.request).then(function (cache) {
            // 有缓存就用缓存，没有就从新发请求获取
            return cache || fetch(e.request)
        }).catch(function (err) {
            // 缓存报错还直接从新发请求获取
            return fetch(e.request)
        })
    );
});
5. 监听activate事件来更新缓存数据：
// 监听activate事件，激活后通过cache的key来判断是否更新cache中的静态资源
self.addEventListener(&#39;activate&#39;, function (e) {
  var cachePromise = caches.keys().then(function (keys) {
    // 遍历当前scope使用的key值
    return Promise.all(keys.map(function (key) {
      // 如果新获取到的key和之前缓存的key不一致，就删除之前版本的缓存
      if (key !== cacheName) {
        return caches.delete(key)
      }
    }))
  })
  e.waitUntil(cachePromise)
  // 保证第一次加载fetch触发
  return self.clients.claim()
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html手机端字体抗锯齿" tabindex="-1"><a class="header-anchor" href="#html手机端字体抗锯齿" aria-hidden="true">#</a> html手机端字体抗锯齿</h2><p>写一个 <code>transfrom:scale(1)</code>;scale内部有一个属性是抗锯齿的,写在html根属性上。</p><h2 id="h5适配rem计算" tabindex="-1"><a class="header-anchor" href="#h5适配rem计算" aria-hidden="true">#</a> h5适配rem计算</h2>`,8),P={href:"https://blog.csdn.net/weixin_44803046/article/details/106380088",target:"_blank",rel:"noopener noreferrer"},M=l(`<h2 id="h5初始化放在那里" tabindex="-1"><a class="header-anchor" href="#h5初始化放在那里" aria-hidden="true">#</a> H5初始化放在那里</h2><ul><li>Vue 放在main.js里引用初始化加载</li><li>纯html5页面 可以写一个js文件，通过meta引入</li></ul><h2 id="transition和animation的区别" tabindex="-1"><a class="header-anchor" href="#transition和animation的区别" aria-hidden="true">#</a> transition和animation的区别</h2><p>● transition是过渡属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。</p><p>● animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。</p><h2 id="flex-1-表示什么" tabindex="-1"><a class="header-anchor" href="#flex-1-表示什么" aria-hidden="true">#</a> flex:1 表示什么</h2><p>flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 auto，它还有另外两种完整写法, 分别是 initial (0 1 auto) 和 none (0 0 auto)：</p><h2 id="margin重叠问题-如何解决" tabindex="-1"><a class="header-anchor" href="#margin重叠问题-如何解决" aria-hidden="true">#</a> margin重叠问题？如何解决？</h2><ul><li>（1）兄弟之间重叠</li></ul><p>● 底部元素变为行内盒子：display: inline-block,底部元素设置浮动：float,底部元素的position的值为absolute/fixed</p><ul><li>（2）父子之间重叠 ● 父元素加入：overflow: hidden,父元素添加透明边框：border:1px solid transparent,子元素变为行内盒子：display: inline-block,子元素加入浮动属性或定位</li></ul><h2 id="如何提取高度嵌套的对象里的指定属性" tabindex="-1"><a class="header-anchor" href="#如何提取高度嵌套的对象里的指定属性" aria-hidden="true">#</a> 如何提取高度嵌套的对象里的指定属性？</h2><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>const school = {
   classes: {
      stu: {
         name: &#39;Bob&#39;,
         age: 24,
      }
   }
}
方法：const { classes: { stu: { name } }} = school // &#39;Bob&#39;
       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function E(q,B){const n=s("ExternalLinkIcon");return d(),c("div",null,[v,e("ul",null,[e("li",null,[e("a",o,[i("webpack 打包优化"),r(n)])]),e("li",null,[e("a",u,[i("虚拟dom概念"),r(n)])]),e("li",null,[e("a",h,[i("node bff层做了哪些东西"),r(n)])]),e("li",null,[e("a",b,[i("es6以及以后新特性"),r(n)])]),e("li",null,[e("a",m,[i("symbol使用场景"),r(n)])]),e("li",null,[e("a",p,[i("new vue过程"),r(n)])]),e("li",null,[e("a",f,[i("es6以及以后新特性"),r(n)])]),e("li",null,[e("a",k,[i("WebPack打包机制及处理过程"),r(n)])])]),g,e("ul",null,[e("li",null,[e("a",w,[i("web worker"),r(n)])]),x,_,W,S,y]),j,e("p",null,[i("初始化rem的值，可以用插件"),e("a",P,[i("flexible.js插件"),r(n)]),i("，自动适配.")]),M])}const A=a(t,[["render",E],["__file","BasicKnowledge.html.vue"]]);export{A as default};
