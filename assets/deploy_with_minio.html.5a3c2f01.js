import{_ as e,o as n,c as i,f as a}from"./app.21492397.js";const d={},s=a(`<h1 id="\u57FA\u4E8Eminio\u90E8\u7F72\u6587\u4EF6\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Eminio\u90E8\u7F72\u6587\u4EF6\u670D\u52A1\u5668" aria-hidden="true">#</a> \u57FA\u4E8EMinIO\u90E8\u7F72\u6587\u4EF6\u670D\u52A1\u5668</h1><p>TCA\u7684<code>file</code>\u670D\u52A1\u652F\u6301\u5BF9\u63A5<code>MinIO</code>\u4F5C\u4E3A\u5E95\u5C42\u5B58\u50A8\uFF0C\u5C06\u6587\u4EF6\u8F6C\u53D1\u5230\u5DF2\u90E8\u7F72\u7684MinIO\u5E73\u53F0\u4E0A\u8FDB\u884C\u6301\u4E45\u5316\u5B58\u50A8</p><h2 id="\u672C\u5730\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u90E8\u7F72" aria-hidden="true">#</a> \u672C\u5730\u90E8\u7F72</h2><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u4E4B\u524D\u5DF2\u7ECF\u4F7F\u7528\u672C\u5730\u8FDB\u884C\u5B58\u50A8\uFF0C\u5207\u6362\u4E3AMinIO\u540E\uFF0C\u4E4B\u524D\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u5230\u670D\u52A1\u90E8\u7F72\u7684\u76EE\u5F55<code>server/projects/file/data</code>\u67E5\u770B\uFF0C\u4E0D\u652F\u6301\u901A\u8FC7\u9875\u9762\u8FDB\u884C\u4E0B\u8F7D</p></blockquote><h3 id="\u524D\u7F6E\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6B65\u9AA4" aria-hidden="true">#</a> \u524D\u7F6E\u6B65\u9AA4</h3><p>\u83B7\u53D6MinIO\u5E73\u53F0\u767B\u5F55\u7684\u8D26\u53F7\u5BC6\u7801\uFF0C\u7528\u4E8E\u4E0A\u4F20\u6587\u4EF6</p><h3 id="\u914D\u7F6E\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6B65\u9AA4" aria-hidden="true">#</a> \u914D\u7F6E\u6B65\u9AA4</h3><h4 id="_1-\u8C03\u6574file\u670D\u52A1\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u8C03\u6574file\u670D\u52A1\u7684\u914D\u7F6E" aria-hidden="true">#</a> 1. \u8C03\u6574<code>file</code>\u670D\u52A1\u7684\u914D\u7F6E</h4><p>\u4FEE\u6539<code>server/configs/django/local_file.py</code>\u6587\u4EF6\uFF0C\u53D6\u6D88\u4EE5\u4E0B\u4EE3\u7801\u7684\u6CE8\u91CA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># MINIO
STORAGE = {
    &quot;CLIENT&quot;: os.environ.get(&quot;FILE_STORAGE_CLIENT&quot;, &quot;MINIO&quot;),  # \u5B58\u50A8\u65B9\u5F0F
    &quot;OPTIONS&quot;: {
        &quot;MINIO_ENTRYPOINT&quot;: os.environ.get(&quot;FILE_MINIO_ENTRYPOINT&quot;),
        &quot;MINIO_ACCESS_KEY&quot;: os.environ.get(&quot;FILE_MINIO_ACCESS_KEY&quot;),
        &quot;MINIO_SECRET_KEY&quot;: os.environ.get(&quot;FILE_MINIO_SECRET_KEY&quot;),
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539<code>server/scripts/config.sh</code>\u6587\u4EF6\uFF0C\u586B\u5199MinIO\u7684\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>export FILE_MINIO_ENTRYPOINT=&lt;MinIO\u5E73\u53F0\u7684\u5730\u5740&gt;
export FILE_MINIO_ACCESS_KEY=&lt;MinIO\u5E73\u53F0\u7684\u767B\u5F55\u8D26\u53F7&gt;
export FILE_MINIO_SECRET_KEY=&lt;MinIO\u5E73\u53F0\u7684\u767B\u5F55\u5BC6\u7801&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5B8C\u914D\u7F6E\u540E\uFF0C\u5982\u679C\u670D\u52A1\u5DF2\u7ECF\u6B63\u5728\u8FD0\u884C\uFF0C\u5219\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F\u670D\u52A1</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>$ cd server
$ ./scripts/deploy.sh start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u4FEE\u6539nginx\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539nginx\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2. \u4FEE\u6539nginx\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6</h4><p>\u5220\u9664nginx\u5DF2\u6709\u7684\u6587\u4EF6\u670D\u52A1\u5668\u914D\u7F6E\u6587\u4EF6<code>/etc/nginx/conf.d/tca_file_local.conf</code>\u6587\u4EF6\uFF0C\u7136\u540E\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rm /etc/nginx/conf.d/tca_file_local.conf
ln -s $CURRENT_PATH/configs/nginx/tca_file_minio.conf /etc/nginx/conf.d/tca_file_local.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E5F\u53EF\u4EE5\u4FEE\u6539<code>server/scripts/init_config.sh</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code># \u6CE8\u91CA\u8FD9\u4E00\u884C
ln -s $CURRENT_PATH/configs/nginx/tca_file_local.conf /etc/nginx/conf.d/tca_file_local.conf
# \u53D6\u6D88\u6CE8\u91CA\u8FD9\u4E00\u884C
ln -s $CURRENT_PATH/configs/nginx/tca_file_minio.conf /etc/nginx/conf.d/tca_file_local.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>\u4FEE\u6539\u5B8C\u914D\u7F6E\u540E\uFF0C\u5982\u679Cnginx\u5DF2\u7ECF\u6B63\u5728\u8FD0\u884C\uFF0C\u5219\u6267\u884C<code>nginx -s reload</code></p><h3 id="\u7ED3\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5C3E" aria-hidden="true">#</a> \u7ED3\u5C3E</h3><p>\u4EE5\u4E0A\u4E24\u4E2A\u6B65\u9AA4\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7<code>MinIO</code>\u5B58\u50A8\u6587\u4EF6\u4E86~</p>`,21),c=[s];function o(l,r){return n(),i("div",null,c)}const u=e(d,[["render",o],["__file","deploy_with_minio.html.vue"]]);export{u as default};
