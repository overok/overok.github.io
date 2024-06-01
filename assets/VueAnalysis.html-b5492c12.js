import{_ as n,o as s,c as e,a}from"./app-dc634640.js";const i={},t=a(`<h1 id="vue-源码解析" tabindex="-1"><a class="header-anchor" href="#vue-源码解析" aria-hidden="true">#</a> vue 源码解析</h1><h2 id="vue的基本原理" tabindex="-1"><a class="header-anchor" href="#vue的基本原理" aria-hidden="true">#</a> Vue的基本原理</h2><p>当一个Vue实例创建时，Vue会遍历data中的属性，用 Object.defineProperty（vue3.0使用proxy ）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。</p><h2 id="源码目录" tabindex="-1"><a class="header-anchor" href="#源码目录" aria-hidden="true">#</a> 源码目录</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//</span>
├─ <span class="token punctuation">.</span>circleci                 # 包含CircleCI持续集成<span class="token operator">/</span>持续部署工具的配置文件
├─ benchmarks                # 基准和性能测试文件，vue的跑分demo，例如大数据量的table或者渲染大量的<span class="token constant">SVG</span>
├─ dist                      # 构建后输出的不同版本vue文件（<span class="token constant">UMD</span>、common<span class="token punctuation">.</span>js、生产和开发包）
├─ examples                  # 用vue写的一些小demo
├─ flow                      # <span class="token function">进行静态类型检测，静态类型检测类型声明文件</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">flow.org</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
├─ packages                  # 包含服务端渲染和模块编译器两种不同的<span class="token constant">NPM</span>包，是提供不同使用场景使用的
├─ scripts                   # 存放npm脚本配置文件，结合webpack、rollup进行编译、测试、构建等操作
│   ├── config<span class="token punctuation">.</span>js             # 包含在<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist</span><span class="token template-punctuation string">\`</span></span>中找到的所有文件的生成配置
│   └── build<span class="token punctuation">.</span>js              # 对config<span class="token punctuation">.</span>js中所有的rollup配置进行构建
├─ src                       # 主要源码所在位置，核心内容
│   ├── compiler             # 编译器代码，将template编译成render函数
│   ├── core                 # vue核心代码，包括内置组件、全局<span class="token constant">API</span>封装、vue实例化、观察者、虚拟<span class="token constant">DOM</span>、工具函数等
│   │   ├── components       # 组件相关属性，主要是keep<span class="token operator">-</span>Alive
│   │   ├── global<span class="token operator">-</span>api       # vue全局api。例如：Vue<span class="token punctuation">.</span>use Vue<span class="token punctuation">.</span>extend vue<span class="token punctuation">.</span>mixin
│   │   ├── instance         # 实例化相关内容，生命周期，事件等
│   │   ├── observe          # 响应式核心目录，双向绑定相关文件
│   │   ├── util             # 工具方法
│   │   └── vdom             # 包括虚拟<span class="token constant">DOM</span>，创建（creation）和打补丁（patching）的代码
│   ├── platforms            # 包含平台特有的相关代码，vue是一个跨平台的mvvm框架（web、weex）
│   │   ├── web              # web端
│   │   │   ├── compiler     # web端编译相关代码，用来编译模版或render函数
│   │   │   ├── runtime      # web端运行是相关代码，用来创建vue实例等
│   │   │   ├── server       # 服务端渲染
│   │   │   └── util         # 相关工具类
│   │   └── weex             # 基于通用跨平台的web开发语言和开发经验，来构建Android、ios和web应用
│   ├── server               # 服务端渲染（ssr）
│   ├── sfc                  # 转换单文件组件（<span class="token operator">*</span><span class="token punctuation">.</span>vue）
│   └── shared               # 全局共享的方法和常量
├─ test                      # test测试用例
├─ types                     # vue新版本支持TypeScript，主要是用typeScript声明文件
├─ <span class="token punctuation">.</span>editorconfig             # 文本编码样式配置文件
├─ <span class="token punctuation">.</span>eslintignore             # eslint校验忽略文件
├─ <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js              # eslint配置文件
├─ <span class="token punctuation">.</span>flowconfig               # flow配置文件
├─ <span class="token constant">LICENSE</span>                   # 项目开源协议
<span class="token literal-property property">Flow</span><span class="token operator">:</span> 类型检测工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function c(p,r){return s(),e("div",null,l)}const d=n(i,[["render",c],["__file","VueAnalysis.html.vue"]]);export{d as default};
