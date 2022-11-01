import{_ as i,r as d,o as n,c as r,a as e,b as c,d as s,f as l}from"./app.21492397.js";const t={},o=e("h1",{id:"\u5728-centos-\u5B89\u88C5-redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5728-centos-\u5B89\u88C5-redis","aria-hidden":"true"},"#"),s(" \u5728 CentOS \u5B89\u88C5 Redis")],-1),h=e("h2",{id:"\u6CE8\u610F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6CE8\u610F","aria-hidden":"true"},"#"),s(" \u6CE8\u610F")],-1),u=s("\u672C\u6587\u6863\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u9002\u7528\u4E8E\u6B63\u5F0F\u73AF\u5883\u90E8\u7F72\uFF0C\u6B63\u5F0F\u73AF\u5883\u5EFA\u8BAE\u4F7F\u7528\u4E13\u4E1A\u7684Redis\u670D\u52A1\uFF08\u6BD4\u5982"),v={href:"https://cloud.tencent.com/product/crs",target:"_blank",rel:"noopener noreferrer"},b=s("\u817E\u8BAF\u4E91\u7684Redis\u4EA7\u54C1"),m=s("\uFF09"),_=l(`<h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><p>CentOS 7.3 \u7248\u672C</p><h2 id="yum-\u5B89\u88C5-redis" tabindex="-1"><a class="header-anchor" href="#yum-\u5B89\u88C5-redis" aria-hidden="true">#</a> yum \u5B89\u88C5 redis</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum install redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u5B89\u88C5redis\u53EF\u80FD\u4F1A\u51FA\u73B0&quot;no package redis available&quot;\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u8BF7\u6267\u884C<code>yum install epel-release</code>\u540E\u91CD\u8BD5redis\u5B89\u88C5\u547D\u4EE4\u3002</p><h2 id="\u4FEE\u6539redis\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539redis\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539redis\u5BC6\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vi /etc/redis.conf

# \u627E\u5230 requirepass foobared
# \u590D\u5236\u4E00\u884C\u5E76\u6839\u636E\u81EA\u5DF1\u9700\u8981\u8C03\u6574\u5BC6\u7801\uFF0C\u6BD4\u5982
requirepass tca123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8redis" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8redis" aria-hidden="true">#</a> \u542F\u52A8redis</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770Bredis\u8FD0\u884C\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBF\u95EEredis" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EEredis" aria-hidden="true">#</a> \u8BBF\u95EEredis</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ redis-cli

127.0.0.1:6379&gt; auth tca123
OK # \u9274\u6743\u901A\u8FC7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function p(g,f){const a=d("ExternalLinkIcon");return n(),r("div",null,[o,h,e("p",null,[u,e("a",v,[b,c(a)]),m]),_])}const y=i(t,[["render",p],["__file","install_redis_on_centos.html.vue"]]);export{y as default};
