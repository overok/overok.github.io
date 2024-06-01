import{_ as t,r as o,o as l,c,b as n,d as s,e,a as p}from"./app-dc634640.js";const i={},r=n("h1",{id:"ts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ts","aria-hidden":"true"},"#"),s(" Ts")],-1),u={href:"https://juejin.cn/post/6872111128135073806",target:"_blank",rel:"noopener noreferrer"},d={href:"https://space.bilibili.com/406258607",target:"_blank",rel:"noopener noreferrer"},k=p(`<h2 id="undefined-和-null-类型" tabindex="-1"><a class="header-anchor" href="#undefined-和-null-类型" aria-hidden="true">#</a> undefined 和 null 类型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">// undefined 类型</span>
<span class="token keyword">let</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// null 类型</span>
默认情况下 <span class="token keyword">null</span> 和 <span class="token keyword">undefined</span> 是所有类型的子类型。就是说你可以把 <span class="token keyword">null</span> 和 <span class="token keyword">undefined</span> 赋值给 number 类型的变量。
<span class="token keyword">let</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> <span class="token literal-property property">realName</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="any-类型-和-unknown-顶级类型" tabindex="-1"><a class="header-anchor" href="#any-类型-和-unknown-顶级类型" aria-hidden="true">#</a> Any 类型 和 unknown 顶级类型</h2><ul><li>unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow</li><li>unknown可以可以定义任何类型的值和any一样，是不能调用属性和方法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//unknown 可以定义任何类型的值</span>
<span class="token keyword">let</span> <span class="token literal-property property">value</span><span class="token operator">:</span> unknown<span class="token punctuation">;</span>
value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>             <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>               <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>    <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>               <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>               <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>             <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>        <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// OK</span>

<span class="token comment">//如果是any类型在对象没有这个属性的时候还在获取是不会报错的</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span>any <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>a
 
<span class="token comment">//如果是unknow 是不能调用属性和方法</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span>unknown <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">ccc</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter">number</span><span class="token operator">=&gt;</span><span class="token number">213</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>b
obj<span class="token punctuation">.</span><span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//可选参数：参数后加个问号，代表这个参数是可选的,要放在函数入参的最后面，不然会导致编译错误。</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> y<span class="token operator">?</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token comment">//默认参数：可以不放在函数入参的最后面,只传一个就传的是 x 的话，就会报错.</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token comment">//函数赋值：TS 中函数不能随便赋值，会报错的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h2><p>是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述，让数据的结构满足约束的格式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性</span>
<span class="token comment">//使用接口约束的时候不能多一个属性也不能少一个属性,必须与接口保持一致</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span>Person  <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;213&quot;</span>
<span class="token punctuation">}</span>

<span class="token number">2.</span><span class="token comment">//重名interface  可以合并</span>
<span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token constant">A</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>

<span class="token number">3.</span><span class="token comment">//继承</span>
<span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span>number
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token constant">B</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>

<span class="token number">4.</span><span class="token comment">//可选属性使用? 操作符可选属性的含义是该属性可以不存在</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    b<span class="token operator">?</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span>Person  <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;213&quot;</span>
<span class="token punctuation">}</span>

<span class="token number">5.</span><span class="token comment">//任意属性 [propName: string]</span>
<span class="token comment">//在这个例子当中我们看到接口中并没有定义C但是并没有报错</span>
<span class="token comment">//应为我们定义了[propName: string]: any;允许添加新的任意属性</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
    b<span class="token operator">?</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span>Person  <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;213&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">d</span><span class="token operator">:</span><span class="token string">&quot;hhh&quot;</span>
<span class="token punctuation">}</span>

<span class="token number">6.</span><span class="token comment">//只读属性 readonly</span>
<span class="token comment">//只读属性是不允许被赋值的只能读取,不能重新赋值</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    b<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    readonly a<span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;213&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>
<span class="token punctuation">}</span>
person<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">123</span>  <span class="token comment">//报错，因为重新赋值了</span>

<span class="token number">7.</span><span class="token comment">//函数</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    b<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    readonly a<span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;213&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">cb</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-类型别名" tabindex="-1"><a class="header-anchor" href="#type-类型别名" aria-hidden="true">#</a> type 类型别名</h2><p>type可以定义基本类型、联合类型、交叉类型、元组，interface 不行, interface可以合并重复声明, type 不行.</p><p>一般使用组合或者交叉类型的时用 type，要用类的 extends 或 implements 时用 interface。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>1.//定义类型别名
type str = string
let s:str = &quot;我是小满&quot;

2.//定义函数别名
type str = () =&gt; string
let s: str = () =&gt; &quot;我是小满&quot;

3.//定义联合类型别名
type str = string | number
let s: str = 123
let s2: str = &#39;123&#39;

4.//定义值的别名
type value = boolean | 0 | &#39;213&#39;
let s:value = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//类型加中括号</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">]</span>
<span class="token comment">//这样会报错定义了数字类型出现字符串是不允许的</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span>
<span class="token comment">//操作方法添加也是不允许的</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
 
<span class="token keyword">var</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//数字类型的数组</span>
<span class="token keyword">var</span> <span class="token literal-property property">arr2</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//字符串类型的数组</span>
<span class="token keyword">var</span> <span class="token literal-property property">arr3</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//任意类型的数组</span>

<span class="token number">2.</span><span class="token comment">//数组泛型</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token number">3.</span><span class="token comment">//接口表示数组</span>
<span class="token keyword">interface</span> <span class="token class-name">NumberArray</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">fibonacci</span><span class="token operator">:</span> NumberArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//表示：只要索引的类型是数字时，那么值的类型必须是数字。</span>

<span class="token number">4.</span><span class="token comment">//多维数组</span>
<span class="token keyword">let</span> <span class="token literal-property property">data</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token number">5.</span><span class="token comment">//arguments类数组</span>
<span class="token keyword">function</span> <span class="token function">Arr</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    ❎<span class="token comment">//错误的arguments 是类数组不能这样定义</span>
    <span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> arguments
    ✅<span class="token comment">//ts内置对象IArguments 定义</span>
    <span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>IArguments <span class="token operator">=</span> arguments
<span class="token punctuation">}</span>
<span class="token function">Arr</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">)</span>
<span class="token comment">//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：</span>
<span class="token keyword">interface</span> <span class="token class-name">IArguments</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token literal-property property">callee</span><span class="token operator">:</span> Function<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token number">6.</span><span class="token comment">//any 在数组中的应用</span>
<span class="token keyword">let</span> <span class="token literal-property property">list</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//参数不能多传,也不能少传 必须按照约定的类型来,?表示可选参数,可选参数必须接在必需参数后面</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">,</span>sex<span class="token operator">?</span><span class="token operator">:</span>string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name <span class="token operator">+</span> age
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token number">2.</span><span class="token comment">//函数参数的默认值</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;我是默认值&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token number">3.</span><span class="token comment">//接口定义函数</span>
<span class="token comment">//定义参数 num 和 num2  ：后面定义返回值的类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Add</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>num<span class="token operator">:</span>  number<span class="token punctuation">,</span> <span class="token literal-property property">num2</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">fn</span><span class="token operator">:</span> Add <span class="token operator">=</span> <span class="token punctuation">(</span>num<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">num2</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num <span class="token operator">+</span> num2
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 
<span class="token keyword">interface</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">user</span><span class="token operator">:</span> User</span><span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
  <span class="token keyword">return</span> user
<span class="token punctuation">}</span>

<span class="token number">4.</span><span class="token comment">//定义剩余参数</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>array<span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">...</span>items<span class="token operator">:</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span>items<span class="token punctuation">)</span>
       <span class="token keyword">return</span> items
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">a</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">)</span>

<span class="token number">5.</span><span class="token comment">//函数重载</span>
<span class="token comment">//重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。</span>
<span class="token comment">//如果参数类型不同，则参数类型应设置为 any。</span>
<span class="token comment">//参数数量不同你可以将不同的参数设置为可选。</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">params2</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> 
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> any<span class="token punctuation">,</span> params2<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span><span class="token number">456</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-object-和-类型" tabindex="-1"><a class="header-anchor" href="#object-object-和-类型" aria-hidden="true">#</a> object, Object 和 {} 类型</h2><ul><li>object 类型用于表示非原始类型</li><li>大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)</li><li>{} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let objectCase: object;
objectCase = 1; // error
objectCase = &quot;a&quot;; // error
objectCase = true; // error
objectCase = null; // error
objectCase = undefined; // error
objectCase = {}; // ok

let ObjectCase: Object;
ObjectCase = 1; // ok
ObjectCase = &quot;a&quot;; // ok
ObjectCase = true; // ok
ObjectCase = null; // error
ObjectCase = undefined; // error
ObjectCase = {}; // ok

let simpleCase: {};
simpleCase = 1; // ok
simpleCase = &quot;a&quot;; // ok
simpleCase = true; // ok
simpleCase = null; // error
simpleCase = undefined; // error
simpleCase = {}; // ok

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="联合类型-交叉类型" tabindex="-1"><a class="header-anchor" href="#联合类型-交叉类型" aria-hidden="true">#</a> 联合类型 交叉类型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//联合类型：一个变量既支持 number 类型，又支持 string 类型，就可以这么写</span>
<span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token operator">|</span> string
num <span class="token operator">=</span> <span class="token number">8</span>
num <span class="token operator">=</span> <span class="token string">&#39;eight&#39;</span>

<span class="token number">2.</span><span class="token comment">//交叉类型: Student 在 name 和 age 的基础上还有 grade 属性</span>
<span class="token keyword">interface</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  height： number
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Man</span><span class="token punctuation">{</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">xiaoman</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">man</span><span class="token operator">:</span> People <span class="token operator">&amp;</span> Man</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>man<span class="token punctuation">.</span>age<span class="token punctuation">,</span>man<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token function">xiaoman</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型保护" tabindex="-1"><a class="header-anchor" href="#类型保护" aria-hidden="true">#</a> 类型保护</h2><p>类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型 其主要思想是尝试检测属性、方法或原型，以确定如何处理值</p><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>//typeof 类型保护
function double(input: string | number | boolean) {
  if (typeof input === &quot;string&quot;) {
    return input + input;
  } else {
    if (typeof input === &quot;number&quot;) {
      return input * 2;
    } else {
      return !input;
    }
  }
}

//in 关键字
interface Bird {
  fly: number;
}
interface Dog {
  leg: number;
}
function getNumber(value: Bird | Dog) {
  if (&quot;fly&quot; in value) {
    return value.fly;
  }
  return value.leg;
}

//instanceof 类型保护
class Animal {
  name!: string;
}
class Bird extends Animal {
  fly!: number;
}
function getName(animal: Animal) {
  if (animal instanceof Bird) {
    console.log(animal.fly);
  } else {
    console.log(animal.name);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h2><p><code>语法：值 as 类型 / &lt;类型&gt;值 value as string &lt;string&gt; value</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：</span>
<span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">run</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ❎<span class="token comment">//这样写是有警告的应为B的接口上面是没有定义run这个属性的</span>
    <span class="token keyword">return</span> type<span class="token punctuation">.</span>run
    ✅<span class="token comment">//可以使用类型断言来推断他传入的是A接口的值</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>type <span class="token keyword">as</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">.</span>run
<span class="token punctuation">}</span>

<span class="token number">2.</span><span class="token comment">//any临时断言</span>
❎<span class="token comment">//这样写会报错因为window没有abc这个东西</span>
window<span class="token punctuation">.</span>abc <span class="token operator">=</span> <span class="token number">123</span>
✅<span class="token comment">//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。</span>
<span class="token punctuation">(</span>window <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>abc <span class="token operator">=</span> <span class="token number">123</span>

<span class="token number">3.</span><span class="token comment">//值as类型</span>
<span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg</span><span class="token operator">:</span> number <span class="token operator">|</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> arg <span class="token keyword">as</span> string
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> number <span class="token operator">=</span> arg <span class="token keyword">as</span> number
        <span class="token keyword">return</span> number<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token number">4.</span> 
<span class="token keyword">let</span> <span class="token literal-property property">someValue</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token string">&quot;this is a string&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">strLength</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> string<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象" aria-hidden="true">#</a> 内置对象</h2><p>JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//ECMAScript 的内置对象：Boolean、Number、string、RegExp、Date、Error</span>
<span class="token keyword">let</span> <span class="token literal-property property">b</span><span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">n</span><span class="token operator">:</span> Number <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">s</span><span class="token operator">:</span> String <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;哔哩哔哩关注小满zs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">d</span><span class="token operator">:</span> Date <span class="token operator">=</span> qnew <span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">r</span><span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> <span class="token literal-property property">e</span><span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;error!&quot;</span><span class="token punctuation">)</span>

<span class="token number">2.</span><span class="token comment">//DOM 和 BOM 的内置对象</span>
<span class="token keyword">let</span> <span class="token literal-property property">body</span><span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">allDiv</span><span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//读取div 这种需要类型断言 或者加个判断应为读不到返回null</span>
<span class="token keyword">let</span> <span class="token literal-property property">div</span><span class="token operator">:</span>HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLDivElement
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3.</span><span class="token comment">//定义Promise,如果    不指定返回的类型TS是推断不出来返回的是什么类型</span>
<span class="token keyword">function</span> <span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>Promise<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
       <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class类" tabindex="-1"><a class="header-anchor" href="#class类" aria-hidden="true">#</a> Class类</h2><ul><li>1.在TS是不允许直接在constructor 定义变量的 需要在constructor上面先声明</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token operator">=</span><span class="token number">0</span> <span class="token comment">//如果了定义了变量不用也会报错,通常是给个默认值或进行赋值</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is speaking</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;奥里给&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 新建实例</span>
p1<span class="token punctuation">.</span>name <span class="token comment">// 访问属性和方法</span>
p1<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>2.类的修饰符</p><ul><li>public: 内部访问也可以外部访问,如果不写默认就是public</li><li>private: 只能在内部访问,不能在外部访问</li><li>protected: 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问</li><li>static: 不可以通过this去访问,只能通过类名去调用，静态函数也是一样 <img src="https://www.aoyingtech.net/upload/mt360/img/code/code-7.jpg" style="border-radius:10px;"> 如果两个函数都是static 静态的是可以通过this互相调用 <img src="https://www.aoyingtech.net/upload/mt360/img/code/code-8.jpg" style="border-radius:10px;"></li></ul></li><li><p>3.interface 定义 类</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">PersonClass</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>type<span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">PersonClass2</span><span class="token punctuation">{</span>
    <span class="token literal-property property">asd</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token keyword">implements</span> <span class="token class-name">PersonClass</span><span class="token punctuation">,</span>PersonClass2 <span class="token punctuation">{</span>
    <span class="token literal-property property">asd</span><span class="token operator">:</span> string
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>asd <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span>type<span class="token operator">:</span>boolean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.super关键字</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//继承父类没有定义自己的属性，可以不写 super ，但是如果有自己的属性，就要用到 super 来把父类的属性继承过来。</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> number
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;奥里给&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.抽象类，用一个 abstract 关键字来定义</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//抽象类是指只能被继承，无法被实例化.</span>
abstract <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ❌

<span class="token number">2.</span><span class="token comment">//抽象类中的抽象方法必须被子类实现,没实现会报错</span>
abstract <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    abstract <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;小满&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tuple-元组类型" tabindex="-1"><a class="header-anchor" href="#tuple-元组类型" aria-hidden="true">#</a> tuple 元组类型</h2><p>元组是固定数量的不同类型的元素的组合，<code>元组就是数组的变种</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span>number<span class="token punctuation">,</span>string<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr2</span><span class="token operator">:</span> readonly <span class="token punctuation">[</span>number<span class="token punctuation">,</span>boolean<span class="token punctuation">,</span>string<span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token string">&#39;sring&#39;</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">]</span>

<span class="token comment">//越界元素</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span>number<span class="token punctuation">,</span>string<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//error</span>

<span class="token comment">//应用场景 例如定义execl返回的数据</span>
<span class="token keyword">let</span> <span class="token literal-property property">excel</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> string<span class="token punctuation">,</span> number<span class="token punctuation">,</span> string<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举 Enum</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//特点：数字递增，反向映射</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span>        <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down<span class="token punctuation">)</span>      <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>      <span class="token comment">// Up</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>      <span class="token comment">// Down</span>

<span class="token comment">//例子：后端给你返回的数据状态是乱的，就需要我们手动赋值。</span>
<span class="token keyword">enum</span> ItemStatus <span class="token punctuation">{</span>
    Buy <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
    Send <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span>
    No <span class="token operator">=</span> <span class="token string">&quot;No&quot;</span><span class="token punctuation">,</span> <span class="token comment">//异构混合枚举</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ItemStatus<span class="token punctuation">[</span><span class="token string">&#39;Buy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>      <span class="token comment">// 100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ItemStatus<span class="token punctuation">[</span><span class="token string">&#39;Send&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">// 20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ItemStatus<span class="token punctuation">[</span><span class="token string">&#39;No&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// No</span>

<span class="token comment">//接口枚举</span>
<span class="token keyword">enum</span> Types <span class="token punctuation">{</span>
    yyds<span class="token punctuation">,</span>
    dddd
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">red</span><span class="token operator">:</span>Types<span class="token punctuation">.</span>yyds
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">red</span><span class="token operator">:</span>Types<span class="token punctuation">.</span>yyds
<span class="token punctuation">}</span> 

<span class="token comment">//反向映射,不会为字符串枚举成员生成反向映射。</span>
<span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
   fall
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> Enum<span class="token punctuation">.</span>fall<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>
<span class="token keyword">let</span> nameOfA <span class="token operator">=</span> Enum<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameOfA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//fall</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="never-类型" tabindex="-1"><a class="header-anchor" href="#never-类型" aria-hidden="true">#</a> never 类型</h2><p>将使用 never 类型来表示不应该存在的状态或者永不存在的值的类型。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>1.// 返回never的函数必须存在无法达到的终点
// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
    throw new Error(message);
}
// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
    while (true) {
    }
}

2.//never 与 void 的差异
//void类型只是没有返回值,但本身不会出错
function Void():void {
    console.log();
}
//never只会抛出异常没有返回值
function Never():never {
    throw new Error(&#39;aaa&#39;)
}

3.//举一个我们可能会见到的例子
interface A {
    type: &quot;foo&quot;
}
 
interface B {
    type: &quot;bar&quot;
}
type All = A | B ;
function handleValue(val: All) {
    switch (val.type) {
        case &#39;foo&#39;:
            break;
        case &#39;bar&#39;:
            break
        default:
            //兜底逻辑 一般是不会进入这儿如果进来了就是程序异常了
            const exhaustiveCheck:never = val;
            break
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol类型" tabindex="-1"><a class="header-anchor" href="#symbol类型" aria-hidden="true">#</a> symbol类型</h2>`,50),v={href:"https://blog.csdn.net/qq1195566313/article/details/122463630?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},m=p(`<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>1.//Symbol的值是唯一的
const s1 = Symbol()
const s2 = Symbol()
// s1 === s2 =&gt;false

2.//用作对象属性的键
let sym = Symbol();
let obj = {
    [sym]: &quot;value&quot;
};
console.log(obj[sym]); // &quot;value&quot;

3.//使用symbol定义的属性，是不能通过如下方式遍历拿到的,没有遍历到symbol1,symbol2
const symbol1 = Symbol(&#39;666&#39;)
const symbol2 = Symbol(&#39;777&#39;)
const obj1= {
   [symbol1]: &#39;小满&#39;,
   [symbol2]: &#39;二蛋&#39;,
   age: 19,
   sex: &#39;女&#39;
}
// 3.1 for in 遍历
for (const key in obj1) { 
   console.log(key) // &quot;age&quot;,&quot;sex&quot; 
}
// 3.2 Object.keys 遍历
Object.keys(obj1)
console.log(Object.keys(obj1)) //[&quot;age&quot;, &quot;sex&quot;] 
// 3.3 getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj1)) //[&quot;age&quot;, &quot;sex&quot;] 
// 3.4 JSON.stringfy
console.log(JSON.stringify(obj1)) //&quot;{&quot;age&quot;:19,&quot;sex&quot;:&quot;女&quot;}&quot;

&gt; 如何拿到
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1)) // [Symbol(666), Symbol(777)] 
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj1)
// console.log(Reflect.ownKeys(obj1)) /[&quot;age&quot;, &quot;sex&quot;, Symbol(666), Symbol(777)] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><p>子类对父类的方法进行了重写，子类和父类调同一个方法时会不一样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Student </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span><span class="token comment">//原</span>
<span class="token keyword">function</span> <span class="token function">num</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span> <span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a <span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">num</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">str</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a <span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">str</span><span class="token punctuation">(</span><span class="token string">&#39;独孤&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;求败&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//泛型优化</span>
<span class="token keyword">function</span> Add<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
Add<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
Add<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以</span>
<span class="token keyword">function</span> Sub<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">|</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">params</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">|</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span>
    <span class="token keyword">return</span> params
<span class="token punctuation">}</span>
Sub<span class="token operator">&lt;</span>Boolean<span class="token punctuation">,</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token number">2.</span><span class="token comment">//定义泛型接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IKeyValue</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">T</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">U</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">k1</span><span class="token operator">:</span>IKeyValue<span class="token operator">&lt;</span>number<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;lin&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">k2</span><span class="token operator">:</span>IKeyValue<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;lin&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>

<span class="token number">3.</span><span class="token comment">//对象字面量泛型</span>
<span class="token keyword">let</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span>
<span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token number">4.</span><span class="token comment">//泛型约束</span>
<span class="token comment">//我们期望在一个泛型的变量上获取其length参数，但有的数据类型是没有length属性的，这时候我们就可以使用泛型约束</span>
❎<span class="token keyword">function</span> getLegnth<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>  <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
✅<span class="token keyword">interface</span> <span class="token class-name">Len</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">length</span><span class="token operator">:</span>number
<span class="token punctuation">}</span>
<span class="token keyword">function</span> getLegnth<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Len</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>  <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
getLegnth<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>

<span class="token number">5.</span><span class="token comment">//使用keyof 约束对象，其中使用了TS泛型和泛型约束</span>
<span class="token comment">//keyof是将一个接口对象的全部属性取出来变成联合类型</span>
<span class="token comment">//首先定义了T类型并使用extends关键字继承object类型的子类型</span>
<span class="token comment">//然后使用keyof操作符获取T类型的所有键，它的返回类型是联合类型</span>
<span class="token comment">//最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型</span>
<span class="token keyword">function</span> prop<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
<span class="token function">prop</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> 
<span class="token function">prop</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span> <span class="token comment">//此时就会报错发现找不到</span>

<span class="token number">6.</span><span class="token comment">//泛型类</span>
<span class="token keyword">class</span> <span class="token class-name">Sub</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
   <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token function">add</span> <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sub</span><span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>attr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
 
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sub</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
str<span class="token punctuation">.</span>attr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span>
str<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>

<span class="token number">7.</span><span class="token comment">//希望调用 API 都清晰的知道返回类型是什么数据结构</span>
<span class="token keyword">interface</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string
    <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">function</span> request<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>url<span class="token operator">:</span>string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
request<span class="token operator">&lt;</span>UserInfo<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;user/info&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token number">8.</span><span class="token comment">//泛型约束后端接口参数类型</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">interface</span> <span class="token class-name">API</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/book/detail&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/book/comment&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> number
        <span class="token literal-property property">comment</span><span class="token operator">:</span> string
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> request<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">API</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token constant">API</span><span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/book/comment&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">&#39;非常棒！&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="namespace-命名空间" tabindex="-1"><a class="header-anchor" href="#namespace-命名空间" aria-hidden="true">#</a> namespace 命名空间</h2><ul><li>在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现 <ul><li>内部模块，主要用于组织代码，避免命名冲突。</li><li>命名空间内的类默认私有</li><li>通过 export 暴露</li><li>通过 namespace 关键字定义</li><li>重名的命名空间会合并 ts任何包含顶级import或者export的文件都被当成一个模块。</li></ul></li></ul><p>相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）</p><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>//命名空间中通过export将想要暴露的部分导出
//如果不用export 导出是无法读取其值的
namespace a {
    export const Time: number = 1000
    export const fn = &lt;T&gt;(arg: T): T =&gt; {
        return arg
    }
    fn(Time)
}
a.Time

//抽离命名空间
a.ts
export namespace V {
    export const a = 1
}

b.ts
import {V} from &#39;../observer/index&#39;
console.log(V); //{a:1}

//简化命名空间
namespace A  {
    export namespace B {
        export const C = 1
    }
}
import X = A.B.C
console.log(X); //1

//三斜线指令
//注释的内容会做为编译器指令使用。
//三斜线指令仅可放在包含它的文件的最顶端
//以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件
a.ts
namespace A {
    export const fn = () =&gt; &#39;a&#39;
}

index.ts
///&lt;reference path=&quot;./ia.ts&quot; /&gt;
console.log(A);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="declare-声明文件-d-ts" tabindex="-1"><a class="header-anchor" href="#declare-声明文件-d-ts" aria-hidden="true">#</a> declare 声明文件(d.ts)</h2><p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。</p><ul><li>declare var 声明全局变量</li><li>declare function 声明全局方法</li><li>declare class 声明全局类</li><li>declare enum 声明全局枚举类型</li><li>declare namespace 声明（含有子属性的）全局对象</li><li>interface 和 type 声明全局类型</li><li><code>/// &lt;reference /&gt; 三斜线指令</code> 例如我们有一个express ,发现express 报错了,让我们去下载他的声明文件。</li></ul><p>如果有一些第三方包确实没有声明文件我们可以自己去定义名称.d.ts 创建一个文件去声明。</p><p>例如 express.d.ts</p><p><code>declare const express: ()=&gt; any;</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//declare class Vue 并没有真的定义一个类，只是定义了类 Vue 的类型</span>
<span class="token comment">//仅仅会用于编译时的检查，在编译结果中会被删除。</span>
<span class="token comment">// src/Vue.d.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">VueOption</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> any
<span class="token punctuation">}</span>
declare <span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> VueOption
    <span class="token function">constructor</span><span class="token punctuation">(</span>options<span class="token operator">:</span> VueOption<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/index.ts</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
├── src
<span class="token operator">|</span>  ├── index<span class="token punctuation">.</span>ts
<span class="token operator">|</span>  └── Vue<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts


<span class="token comment">//使用三方库@types</span>
npm install @types<span class="token operator">/</span>lodash <span class="token operator">-</span><span class="token constant">D</span>


<span class="token comment">//react</span>
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">Person</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="decorator-装饰器" tabindex="-1"><a class="header-anchor" href="#decorator-装饰器" aria-hidden="true">#</a> Decorator 装饰器</h2><p>装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。</p><p>若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用编译器选项</p><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>1.//装饰器工厂,其实也就是一个高阶函数 外层的函数接受值 里层的函数最终接受类的构造函数
2.//装饰器组合,可以使用多个装饰器
const watcher = (name: string): ClassDecorator =&gt; {
    return (target: Function) =&gt; {
        target.prototype.getParams = &lt;T&gt;(params: T): T =&gt; {
            return params
        }
        target.prototype.getOptions = (): string =&gt; {
            return name
        }
    }
}
const watcher2 = (name: string): ClassDecorator =&gt; {
    return (target: Function) =&gt; {
        target.prototype.getNames = ():string =&gt; {
            return name
        }
    }
}
 
@watcher2(&#39;name2&#39;)
@watcher(&#39;name&#39;)
class A {
    constructor() {
 
    }
}
 
const a = new A();
console.log((a as any).getOptions());
console.log((a as any).getNames());

2.//方法装饰器(返回三个参数)
:::target: Object 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
:::propertyKey: string | symbol - 方法名
:::descriptor: TypePropertyDescript - 属性描述符
function noEnumerable(
  target: any,
  property: string,
  descriptor: PropertyDescriptor
) {
  console.log(&quot;target.getName&quot;, target.getName);
  console.log(&quot;target.getAge&quot;, target.getAge);
  descriptor.enumerable = false;
}
//重写方法
function toNumber(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  let oldMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    args = args.map((item) =&gt; parseFloat(item));
    return oldMethod.apply(this, args);
  };
}

class Person {
  name: string = &quot;hello&quot;;
  public static age: number = 10;
  constructor() {}
  @noEnumerable
  getName() {
    console.log(this.name);
  }
  @toNumber
  sum(...args: any[]) {
    return args.reduce((accu: number, item: number) =&gt; accu + item, 0);
  }
}

3.//属性装饰器(返回两个参数)
:::对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
:::属性的名字。
//修饰实例属性
function upperCase(target: any, propertyKey: string) {
  let value = target[propertyKey];
  const getter = function () {
    return value;
  };
  // 用来替换的setter
  const setter = function (newVal: string) {
    value = newVal.toUpperCase();
  };
}
class Person {
  @upperCase
  name!: string;
}


4.//参数装饰器(返回三个参数)
:::target: Object 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
:::propertyKey: string | symbol - 方法名
:::parameterIndex: number - 方法中参数的索引值
function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name;
  console.log(\`The parameter in position \${parameterIndex} at \${functionLogged} has been decorated\`);
}
class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
    this.greeting = phrase;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),b={href:"https://blog.csdn.net/qq1195566313/article/details/122708348?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},y={href:"https://xiaoman.blog.csdn.net/article/details/122740383",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="实战ts编写发布订阅模式" tabindex="-1"><a class="header-anchor" href="#实战ts编写发布订阅模式" aria-hidden="true">#</a> 实战TS编写发布订阅模式</h2><img src="https://www.aoyingtech.net/upload/mt360/img/code/code-9.jpg" style="border-radius:10px;"><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>interface EventFace {
    on: (name: string, callback: Function) =&gt; void,    //订阅/监听
    emit: (name: string, ...args: Array&lt;any&gt;) =&gt; void, //发布/注册
    off: (name: string, fn: Function) =&gt; void,         //解除绑定
    once: (name: string, fn: Function) =&gt; void         //只执行一次
}
 
interface List {
    [key: string]: Array&lt;Function&gt;,
}
class Dispatch implements EventFace {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: string, callback: Function) {
        const callbackList: Array&lt;Function&gt; = this.list[name] || [];
        callbackList.push(callback)
        this.list[name] = callbackList
    }
    emit(name: string, ...args: Array&lt;any&gt;) {
        let evnetName = this.list[name]
        if (evnetName) {
            evnetName.forEach(fn =&gt; {
                fn.apply(this, args)
            })
        } else {
            console.error(&#39;该事件未监听&#39;);
        }
    }
    off(name: string, fn: Function) {
        let evnetName = this.list[name]
        if (evnetName &amp;&amp; fn) {
            let index = evnetName.findIndex(fns =&gt; fns === fn)
            evnetName.splice(index, 1)
        } else {
            console.error(&#39;该事件未监听&#39;);
        }
    }
    once(name: string, fn: Function) {
        let decor = (...args: Array&lt;any&gt;) =&gt; {
            fn.apply(this, args)
            this.off(name, decor)
        }
        this.on(name, decor)
    }
}
const o = new Dispatch()
 
 
o.on(&#39;abc&#39;, (...arg: Array&lt;any&gt;) =&gt; {
    console.log(arg, 1);
})
 
o.once(&#39;abc&#39;, (...arg: Array&lt;any&gt;) =&gt; {
    console.log(arg, &#39;once&#39;);
})
// let fn = (...arg: Array&lt;any&gt;) =&gt; {
//     console.log(arg, 2);
// }
// o.on(&#39;abc&#39;, fn)
// o.on(&#39;ddd&#39;, (aaaa: string) =&gt; {
//     console.log(aaaa);
// })
//o.off(&#39;abc&#39;, fn)
 
o.emit(&#39;abc&#39;, 1, true, &#39;小满&#39;)
 
o.emit(&#39;abc&#39;, 2, true, &#39;小满&#39;)
 
// o.emit(&#39;ddd&#39;, &#39;addddddddd&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(w,h){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[n("a",u,[s("一份不可多得的 TS 学习指南"),e(a)]),n("a",d,[s("ts视频"),e(a)])]),k,n("p",null,[s("symbol类型的值是通过Symbol构造函数创建的 "),n("a",v,[s("'小满讲解'"),e(a)])]),m,n("p",null,[n("a",b,[s("Rollup构建TS项目 & webpack构建TS项目"),e(a)]),n("a",y,[s("TS进阶用法proxy & Reflect"),e(a)])]),g])}const j=t(i,[["render",f],["__file","Ts.html.vue"]]);export{j as default};
