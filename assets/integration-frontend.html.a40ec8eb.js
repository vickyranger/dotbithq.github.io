import{_ as i,r as p,o as c,c as l,a as n,b as a,w as t,d as s,e as r}from"./app.6dc8cf16.js";const d={},u=n("h1",{id:"\u524D\u7AEF\u96C6\u6210-bit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u96C6\u6210-bit","aria-hidden":"true"},"#"),s(" \u524D\u7AEF\u96C6\u6210 .bit")],-1),k={id:"das-sdk-js",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#das-sdk-js","aria-hidden":"true"},"#",-1),_=s(),v={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},b=s("das-sdk-js"),m={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},g=s("das-sdk-js"),f=s(" \u662F\u4E00\u4E2A npm \u5305\uFF0C\u5C01\u88C5\u4E86\u5BF9\u4E8E indexer \u7684 JSON-RPC \u7684\u8C03\u7528\u3002"),x=s("Dapp \u53EA\u9700\u96C6\u6210\u8BE5 SDK\uFF0C\u5E76\u8C03\u7528\u5BF9\u5E94\u7684\u63A5\u53E3\uFF08\u6570\u636E\u7531 .bit "),y=s("das-account-indexer"),j=s("\uFF09\uFF0C\u5373\u83B7\u5F97\u6240\u9700\u7684\u6570\u636E\u3002"),q=n("blockquote",null,[n("p",null,"\u6CE8\u610F\uFF0C\u5E94\u7528\u5728\u5F97\u5230\u7528\u6237\u8BBE\u7F6E\u7684\u6570\u636E\u7684\u503C\u540E\uFF0C\u8981\u5BF9\u5176\u503C\u7684\u6709\u6548\u6027\u8FDB\u884C\u6821\u9A8C")],-1),E={href:"https://github.com/dotbitHQ/das-sdk-js",target:"_blank",rel:"noopener noreferrer"},w=s("das-sdk-js \u6587\u6863"),D=n("h3",{id:"\u4F9D\u8D56",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F9D\u8D56","aria-hidden":"true"},"#"),s(" \u4F9D\u8D56")],-1),N=s("\u4F7F\u7528\u8BE5 SDK \u9700\u8981\u4F9D\u8D56 "),z=s("das-account-indexer"),C=s(" \u6240\u63D0\u4F9B\u7684 JSON-RPC \u670D\u52A1\u3002"),I=n("p",null,"\u6211\u4EEC\u63A8\u8350\u5F00\u53D1\u8005\u81EA\u5EFA .bit Indexer\uFF0C\u4F46\u662F\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u5F00\u53D1\u9636\u6BB5\u4F7F\u7528\u5B98\u65B9\u7684 .bit Indexer \u670D\u52A1\u6765\u505A\u5F00\u53D1\u3001\u6D4B\u8BD5\uFF0C\u8BE6\u89C1\uFF1A",-1),S=s("\u5B98\u65B9 Indexer \u670D\u52A1"),B=r(`<h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Das <span class="token keyword">from</span> <span class="token string">&#39;das-sdk&#39;</span>

<span class="token keyword">const</span> das <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Das</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://indexer-not-use-in-production-env.did.id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u907F\u514D\u5728\u6B63\u5F0F\u73AF\u5883\u4F7F\u7528\u8BE5 indexer</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

das<span class="token punctuation">.</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token string">&#39;dasloveckb.bit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F93\u51FA</strong></p><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token property unquoted">key</span><span class="token operator">:</span> <span class="token string">&#39;address.eth&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">label</span><span class="token operator">:</span> <span class="token string">&#39;coinbase&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">value</span><span class="token operator">:</span> <span class="token string">&#39;0x1234...4567&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">ttl</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property unquoted">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://identicons.da.systems/identicon/dasloveckb.bit&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token property unquoted">key</span><span class="token operator">:</span> <span class="token string">&#39;address.eth&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">label</span><span class="token operator">:</span> <span class="token string">&#39;onchain&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">value</span><span class="token operator">:</span> <span class="token string">&#39;0x2345...6789&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">ttl</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property unquoted">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://identicons.da.systems/identicon/dasloveckb.bit&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0B\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u6B65" aria-hidden="true">#</a> \u4E0B\u4E00\u6B65</h4>`,5),L=s("\u5982\u679C\u9700\u8981\u540E\u7AEF\u63A5\u5165 .bit\uFF0C\u8BF7\u9605\u8BFB "),R=s("\u540E\u7AEF\u63A5\u5165"),V=s("\u5982\u679C\u9700\u8981\u67E5\u770B\u8BBE\u8BA1\u6307\u5357\uFF0C\u8BF7\u67E5\u770B "),A=s("\u8BBE\u8BA1\u6307\u5357");function H(Q,J){const o=p("ExternalLinkIcon"),e=p("RouterLink");return c(),l("div",null,[u,n("h2",k,[h,_,n("a",v,[b,a(o)])]),n("p",null,[n("a",m,[g,a(o)]),f]),n("p",null,[x,a(e,{to:"/zh/developers/integration-backend.html#das-account-indexer"},{default:t(()=>[y]),_:1}),j]),q,n("blockquote",null,[n("p",null,[n("a",E,[w,a(o)])])]),D,n("p",null,[N,a(e,{to:"/zh/developers/integration-backend.html"},{default:t(()=>[z]),_:1}),C]),I,n("blockquote",null,[n("p",null,[a(e,{to:"/zh/developers/integration-backend.html#%E5%AE%98%E6%96%B9-indexer-%E6%9C%8D%E5%8A%A1"},{default:t(()=>[S]),_:1})])]),B,n("ul",null,[n("li",null,[L,a(e,{to:"/zh/developers/integration-backend.html"},{default:t(()=>[R]),_:1})]),n("li",null,[V,a(e,{to:"/zh/developers/design-guide.html"},{default:t(()=>[A]),_:1})])])])}var O=i(d,[["render",H],["__file","integration-frontend.html.vue"]]);export{O as default};
