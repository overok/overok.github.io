import{_ as n,o as s,c as a,a as e}from"./app-dc634640.js";const t={},p=e(`<h1 id="vueuse" tabindex="-1"><a class="header-anchor" href="#vueuse" aria-hidden="true">#</a> VueUse</h1><h2 id="vueuse-1" tabindex="-1"><a class="header-anchor" href="#vueuse-1" aria-hidden="true">#</a> VueUse</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//安装</span>
npm i @vueuse<span class="token operator">/</span>core

<span class="token comment">//使用</span>
<span class="token comment">// 导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMouse<span class="token punctuation">,</span> usePreferredDark<span class="token punctuation">,</span> useLocalStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// tracks mouse position</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// is user prefers dark theme</span>
    <span class="token keyword">const</span> isDark <span class="token operator">=</span> <span class="token function">usePreferredDark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// persist state in localStorage</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useLocalStorage</span><span class="token punctuation">(</span>
      <span class="token string">&#39;my-storage&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Apple&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> isDark<span class="token punctuation">,</span> store <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//防抖节流</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useThrottle <span class="token punctuation">,</span> useDebounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> throttled <span class="token operator">=</span> <span class="token function">useThrottle</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>  <span class="token comment">// 延迟1s获取 input 的值</span>

<span class="token keyword">const</span> debounced <span class="token operator">=</span> <span class="token function">useDebounce</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>debounced<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment">// 延迟1s 更新input的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","VueUse.html.vue"]]);export{r as default};
