import{_ as e,o as i,c as n,f as d}from"./app.21492397.js";const l={},s=d(`<h1 id="tca-armory-q1\u5DE5\u5177\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#tca-armory-q1\u5DE5\u5177\u4ECB\u7ECD" aria-hidden="true">#</a> TCA-Armory-Q1\u5DE5\u5177\u4ECB\u7ECD</h1><p>TCA-Armory-Q1, \u53C8\u540D tca_ql_cpp \u4E3B\u8981\u7528\u4E8E\u5206\u6790Cpp\u8D28\u91CF\u95EE\u9898\u3002</p><h1 id="\u89C4\u5219\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u8BE6\u60C5" aria-hidden="true">#</a> \u89C4\u5219\u8BE6\u60C5</h1><h2 id="\u7EBF\u7A0B\u9501\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u9501\u68C0\u67E5" aria-hidden="true">#</a> \u7EBF\u7A0B\u9501\u68C0\u67E5</h2><p>\u5305\u542B\u89C4\u5219:</p><ul><li>missing_lock</li><li>dead_lock</li></ul><p>\u5728\u4F7F\u7528\u591A\u7EBF\u7A0B\u5BF9\u6587\u4EF6\u5168\u5C40\u53D8\u91CF\u6216\u7C7B\u6210\u5458\u5728\u8FDB\u884C\u8BFB\u5199\u65F6\uFF0C\u5DE5\u5177\u4F1A\u5BF9\u672A\u6B63\u786E\u7684\u8FDB\u884C\u4E0A\u9501\u64CD\u4F5C\u548C\u4E0A\u9501\u5F02\u5E38\u800C\u5F15\u53D1\u6B7B\u9501\u7684\u60C5\u51B5\u8FDB\u884C\u68C0\u67E5\u3002</p><p>\u652F\u6301\u7684\u591A\u7EBF\u7A0B\u6807\u51C6\u5E93\u5E93\u5305\u62EC\uFF08\u82E5\u6709\u5176\u4ED6\u5E93\u9700\u6C42\u53EF\u63D0issue\uFF09:</p><ul><li>pthread</li><li>thread</li></ul><h4 id="missing-lock" tabindex="-1"><a class="header-anchor" href="#missing-lock" aria-hidden="true">#</a> missing_lock</h4><p>missing_lock \u5982\u679C\u53D1\u73B0\u591A\u7EBF\u7A0B\u4E2D\u67D0\u4E2A\u5168\u5C40\u53D8\u91CF\u5728\u672A\u6301\u6709\u9501\u4FBF\u66F4\u65B0\u65F6\uFF0C\u5219\u4F1A\u4E0A\u62A5\u9519\u8BEF\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A missing_loc \u6848\u4F8B \u5728\u4E0B\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570 increase1, increase2 \u7686\u4EE5\u5C06 counter \u52A0\u5230 1000 \u4E3A\u76EE\u7684\u3002\u5982\u679C\u4F7F\u7528 increase1 \u51FD\u6570\u5219\u6709\u53EF\u80FD\u591A\u4E2A\u7EBF\u7A0B\u7686\u5728 1000 \u65F6\u8FDB\u5165\u5FAA\u73AF\u5BFC\u81F4\u6700\u540E counter\u7ED3\u679C\u5927\u4E8E 1000</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int counter = 0;
std::mutex mtx;  // \u4FDD\u62A4counter
void increase1() {
    while (1) {
        if (counter &lt;= 1000)
            counter++;  // defect: missing_lock
        else
            break;
    }
}
void increase2() {
    while (1) {
        mtx.lock();  // example_lock
        if (counter &lt;= 1000)
            counter++;
        else
            break;
        mtx.unlock();  // example_release
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dead-lock" tabindex="-1"><a class="header-anchor" href="#dead-lock" aria-hidden="true">#</a> dead_lock</h4><p>dead_lock \u5982\u679C\u53D1\u73B0\u6587\u4EF6\u5185\u5B58\u5728 mtx1 -&gt; mtx2 \u7684\u4E0A\u9501\u987A\u5E8F\u65F6\uFF0C\u53E6\u5B58\u5728mtx2 -&gt; mtx1 \u7684\u4E0A\u9501\u987A\u5E8F\uFF0C\u89C6\u4E3A\u6B7B\u9501\u6216\u5B58\u5728\u6B7B\u9501\u7684\u53EF\u80FD\uFF0C\u5219\u4F1A\u4E0A\u62A5\u9519\u8BEF\u3002 \u6B7B\u9501\u53D1\u751F\u65F6\u7A0B\u5E8F\u5C06\u4F1A\u5361\u6B7B\u65E0\u6CD5\u6B63\u5E38\u6267\u884C\u3002</p><h5 id="\u89C4\u5219\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u53C2\u6570" aria-hidden="true">#</a> \u89C4\u5219\u53C2\u6570</h5><ul><li>better-lock: True or False \u9ED8\u8BA4\u4E3A False</li></ul><h5 id="\u4EE3\u7801\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-1" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A dead_lock \u6848\u4F8B</p><p>\u5728\u4E0B\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570 increase \u4EE5\u5C06 counter \u52A0\u5230 1000 \u4E3A\u76EE\u7684\u3002\u4F46\u5728\u7EBF\u7A0B 1 \u4E2D\u7B2C\u4E00\u6B21\u91CA\u653E mtx \u540E\uFF0C\u7EBF\u7A0B 2 \u7684 mtx \u4E0A\u9501\uFF0C\u6B64\u65F6\u7EBF\u7A0B1\u7B49\u5F85\u7EBF\u7A0B2\u91CA\u653Emtx\uFF0C\u7EBF\u7A0B2\u7B49\u5F85\u7EBF\u7A0B1\u91CA\u653Emtx2\uFF0C\u5F62\u6210\u6B7B\u9501\uFF0C\u7A0B\u5E8F\u5361\u6B7B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int counter = 0;
std::mutex mtx;
std::mutex mtx2;
void increase() {
    while (1) {
        mtx.lock();
        mtx2.lock();
        mtx.unlock();
        mtx.lock();  // defect: dead_lock
        if (counter &lt;= 1000)
            counter++;
        else
            break;
        mtx2.unlock();
        mtx.unlock()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0B\u9762\u4EE3\u7801\u4E2D \u7EBF\u7A0B\u51FD\u6570increase1\u5B58\u5728mtx -&gt; mtx2 \u7684\u987A\u5E8F\uFF0Cincrease2\u987A\u5E8F\u4E3A mtx2 -&gt; mtx\uFF1B\u89C6\u4E3A\u51FA\u73B0\u6B7B\u9501\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void increase1() {
    while (1) {
        mtx.lock();
        mtx2.lock();
        if (counter &lt;= 1000)
            counter++;
        else
            break;
        mtx2.unlock();
        mtx.unlock()
    }
}
void increase2() {
    while (1) {
        mtx2.lock();
        mtx.lock();  // defect: dead_lock; 
        if (counter &lt;= 1000)
            counter++;
        else
            break;
        mtx2.unlock();
        mtx.unlock()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u6848\u4F8B\u5728<code>better-lock</code>\u53C2\u6570\u4E3A<code>True</code>\u65F6\u5C06\u4F1A\u751F\u6548 \u4F7F\u7528<code>better-lock</code>\u89C4\u5219\u4F1A\u68C0\u67E5\u5728\u4E0A\u9501\u671F\u95F4\u82E5\u8C03\u7528\u5176\u4ED6\u51FD\u6570\u65F6\u5C06\u89C6\u4E3A\u53EF\u80FD\u4F1A\u51FA\u73B0\u9884\u671F\u4E4B\u5916\u7684\u5F02\u5E38\uFF0C\u4E14\u4E0A\u9501\u671F\u95F4\u5E94\u53EA\u505A\u5BF9\u5168\u5C40\u53D8\u91CF\u64CD\u4F5C\u4EE5\u63D0\u5347\u6027\u80FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void increase1() {
    while (1) {
        mtx.lock();
        if (counter &lt;= 1000)
            counter++;
        else
            break;
        read_counter(counter);  // defect: dead_lock
        mtx.unlock()
    }
}
void read_counter(counter){
    std::cout &lt;&lt; counter &lt;&lt; std::endl;
    do_something_more();
}
void increase1() {
    while (1) {
        std::lock_guard&lt;std::mutex&gt; lk(mtx);  // good: \u4F7F\u7528lock_guard\u4F1A\u81EA\u52A8\u4E0A\u9501\u89E3\u9501\u5C06\u4E0D\u4F1A\u68C0\u67E5dead_lock
        if (counter &lt;= 1000)
            counter++;
        else
            break;
        read_counter(counter);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8D44\u6E90\u6CC4\u6F0F\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u6CC4\u6F0F\u68C0\u67E5" aria-hidden="true">#</a> \u8D44\u6E90\u6CC4\u6F0F\u68C0\u67E5</h2><p>\u5305\u542B\u89C4\u5219</p><ul><li>resource_leak</li></ul><h4 id="resource-leak" tabindex="-1"><a class="header-anchor" href="#resource-leak" aria-hidden="true">#</a> resource_leak</h4><p>resource_leak \u5728\u7A0B\u5E8F\u7533\u8BF7\u4E86\u8D44\u6E90\u4F46\u5E76\u672A\u6309\u65F6\u91CA\u653E\u65F6\u4E0A\u62A5\u9519\u8BEF \u76EE\u524D\u573A\u666F\u5305\u62EC\uFF1A\u53E5\u67C4\u6253\u5F00\u65F6\u672A\u5173\u95ED\uFF0C\u6307\u9488\u5206\u914D\u5185\u5B58\u540E\u6CA1\u6709\u53CA\u65F6\u91CA\u653E</p><h5 id="\u4EE3\u7801\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-2" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u5C06\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Aresource_leak\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int leak_example1(int c) {
    void *p = malloc(10); 
    if(c)
        return -1; // defect: if c &quot;p&quot; is leaked
    free(p);
    return 0;
}

int leak_example2() {
    void *p = malloc(10);
    void *q = malloc(20);
    if(!p || !q)
        return -1; // defect: &quot;p&quot; or &quot;q&quot; may be leaked if the other is NULL 
    /*...*/
    free(q);
    free(p);
    return 0;
}

void leak_example3(int c) {
    FILE *p = fopen(&quot;starwar.anakin&quot;, &quot;rb&quot;);
    if(c)
        return;       // defect: leaking file pointer &quot;p&quot;
    fclose(p);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E0\u6548\u503C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u65E0\u6548\u503C\u68C0\u67E5" aria-hidden="true">#</a> \u65E0\u6548\u503C\u68C0\u67E5</h2><p>\u5305\u542B\u89C4\u5219</p><ul><li>unused_value</li></ul><h4 id="unused-value" tabindex="-1"><a class="header-anchor" href="#unused-value" aria-hidden="true">#</a> unused_value</h4><p>unused_value \u68C0\u67E5\u90A3\u4E9B\u8D4B\u4E88\u7ED9\u53D8\u91CF\u7684\u503C\u662F\u5426\u6B63\u786E\u88AB\u4F7F\u7528\uFF0C\u5B58\u5728\u8FDE\u7EED\u4E24\u6B21\u8D4B\u4E88\u53D8\u91CF\u503C\u7684\u60C5\u51B5\uFF0C\u89C6\u4E3A\u7B2C\u4E00\u6B21\u8D4B\u4E88\u7684\u503C\u672A\u88AB\u6B63\u786E\u4F7F\u7528\uFF0C\u62A5\u51FA\u9519\u8BEF\u3002 \u4E24\u6B21\u8FDE\u7EED\u8D4B\u503C\u53EF\u80FD\u5B58\u5728\u6761\u4EF6\u63A7\u5236\u8BED\u53E5\u51FA\u73B0\u9519\u8BEF\u3001\u53D8\u91CF\u540D\u62FC\u5199\u9519\u8BEF\u7B49\u60C5\u51B5\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-3" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Aunused_value\u6848\u4F8B</p><p>\u4EE5\u4E0B\u51FD\u6570\u4F1A\u56E0\u4E3Akey\u7684\u4E0D\u540C\u53BB\u4E0D\u4E00\u6837\u7684\u795E\u660E\uFF0C\u4F46\u5B9E\u9645\u4E0A Zeus Hades\u5374\u6C38\u8FDC\u4E0D\u4F1A\u4F7F\u7528\u5230\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const char* key_value(const int key) {
    const char * value = 0;
    if (key != 0) {
        value = &quot;Zeus&quot;;
    } else if (key != 1) {
        value = &quot;Hades&quot;;
    } 
    if (key != 2) { // Should be &#39;else if&#39; here.
        value = &quot;Poseidon&quot;;  // defect: unused_value Zeus Hades  never used
    }
    else {
        value = &quot;Unknow
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u7EE7\u7EED\u63D0\u4F9B\u51E0\u4E2Aunused_value\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const char* key_value1(const int key) {
    const char * value = 0;
    value = &quot;Zeus&quot;;  // defect: Zeus never used
    if (key == 1) {
        value = &quot;Hades;
    } else if (key == 2) {
        value = &quot;Poseidon&quot;;
    } else {  // May else need not be here
        value = &quot;Unknow&quot;;
    }
    return value
}

const char* key_value2(const int key) {
    const char * value = 0;
    value = &quot;Zeus&quot;;  // better Zeus used
    if (key == 1) {
        value = &quot;Hades;
    } else if (key == 2) {
        value = &quot;Poseidon&quot;;
    }
    return value
}

const char* key_value3(const int key) {
    const char * value = 0;
    if (key == 1) {
        value = &quot;Hades;
    } else {
        value = &quot;Poseidon&quot;;
    }
    value = &quot;Zeus&quot;;  // defect: Hades Poseidon never used
    return value
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u7EC4\u6EA2\u51FA\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u6EA2\u51FA\u68C0\u67E5" aria-hidden="true">#</a> \u6570\u7EC4\u6EA2\u51FA\u68C0\u67E5</h2><p>\u5305\u542B\u89C4\u5219</p><ul><li>array_overflow</li><li>buff_overflow</li></ul><h4 id="array-overflow" tabindex="-1"><a class="header-anchor" href="#array-overflow" aria-hidden="true">#</a> array_overflow</h4><p>array_overflow \u68C0\u67E5\u6570\u7EC4\u8D8A\u754C\u7684\u60C5\u51B5\u3002\u4E0D\u6B63\u786E\u7684\u7F13\u5B58\u533A\u8BBF\u95EE\u53EF\u80FD\u635F\u574F\u5185\u5B58\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83\u6216\u8BFB\u53D6\u5230\u6743\u9650\u5916\u7684\u5185\u5B58\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-4" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Aarray_overflow\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void foo() {
    int array[10];
    int i = get();
    // i = 9;
    if (i &gt; 8 &amp;&amp; i &lt;= length(array)) {  // Shoud be i &lt; length(array)
        array[i] = 1;  // defect: array[10] overflow
    }
    array[i] = 1;  // defect: array[10] overflow
}


void test(int i) {
    int n= 10;
    char *p = malloc(sizeof(int) * 10);
    int y = n;
    p[y] = &#39;a&#39;; // defect: writing to buffer[y] overflow
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="buff-overflow" tabindex="-1"><a class="header-anchor" href="#buff-overflow" aria-hidden="true">#</a> buff_overflow</h4><p>buff_overflow \u68C0\u67E5<code>strcpy</code>,<code>strcat</code>\u5B57\u7B26\u4E32\u590D\u5236/\u62FC\u63A5\u8FC7\u7A0B\u4E2D\u957F\u5EA6\u4E0D\u5F53\u5BFC\u81F4\u7684\u6EA2\u51FA\uFF0C \u540C\u6837<code>gets</code> <code>scanf</code>\u51FD\u6570\u4E5F\u89C6\u4E3A\u4E0D\u5B89\u5168</p><h5 id="\u4EE3\u7801\u793A\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-5" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Abuff_overflow\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void overflow1() {

    char a[4]={0};
        strcpy(a, &quot;Poseidon&quot;);  // defect: len(&quot;Poseidon&quot;) &gt; 4 strncpy is better
    return;
}

void overflow2() {
    char s1[10] = &quot;1&quot;;
    char s2[] = &quot;1234567890&quot;;
    strcat(s1, s2);  // defect: len(s1 + s2) &gt; 10
    // strncat(s1, s2, 6)  // strncat is better
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6307\u9488\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u68C0\u67E5" aria-hidden="true">#</a> \u6307\u9488\u68C0\u67E5</h2><p>\u5305\u542B\u89C4\u5219</p><ul><li>func_ret_null</li><li>func_ret_null_full</li><li>use_after_free</li><li>forward_null</li><li>reverse_null</li><li>glob_null_pointer</li></ul><h4 id="func-ret-null" tabindex="-1"><a class="header-anchor" href="#func-ret-null" aria-hidden="true">#</a> func_ret_null</h4><p>func_ret_null \u51FD\u6570\u8FD4\u56DE\u503C\u53EF\u80FD\u4E3Anullpointer\uFF0C\u4F46\u662F\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\u6307\u9488\u672A\u7ECF\u5224\u7A7A\u4FBF\u8FDB\u884C\u4F7F\u7528<br> \u5728\u9009\u7528func_ret_null_full \u65F6, \u68C0\u67E5\u5668\u4F1A\u5728\u9879\u76EE\u5185\u5168\u5C40\u641C\u7D22\u7A7A\u6307\u9488\u51FD\u6570\u7684\u8C03\u7528\u60C5\u51B5\uFF0C\u5426\u5219\u53EA\u4F1A\u5728\u76F8\u5173\u6587\u4EF6\u5185\u8FDB\u884C\u68C0\u67E5\u3002</p><h4 id="\u4EE3\u7801\u793A\u4F8B-6" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-6" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h4><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Afunc_ret_null\u4EE3\u7801\u6848\u4F8B</p><p>\u5728\u4E0B\u9762\u4EE3\u7801\u4E2D<code>test</code>\u51FD\u6570\u4E2D\u8C03\u7528<code>get_name</code>\u53EF\u80FD\u8FD4\u56DE\u7A7A\u6307\u9488\uFF0C\u5728\u540E\u7EED\u4F7F\u7528<code>name</code>\u6307\u9488\u524D\u5E94\u8BE5\u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u6307\u9488</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// name.hpp

char* get_name(int id) {
    char* name = 0;
    if (id == 1) {
        name = &quot;Zeus&quot;;
    } else if (id == 2) {
        name = &quot;Hades&quot;
    } else {
        return nullpointer;
    }
    return name;
}

void test(int i) {
    char* name = get_name(i);
    dosomething(name);  // defect: name may nullpointer should check it
    if (name != nullpointer) {
        dosomething(name);  // good
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9009\u7528full_ret_null_full\u65F6\uFF0C\u5C06\u4F1A\u5168\u5C40\u5206\u6790\u51FD\u6570<code>get_name</code>\u8C03\u7528\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// third.cpp
# include &quot;name.h&quot;

void name_test(int i) {
    char* name = get_name(i);
    dosomething(name); // defect
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-after-free" tabindex="-1"><a class="header-anchor" href="#use-after-free" aria-hidden="true">#</a> use_after_free</h4><p>use_after_free \u68C0\u67E5\u5F53\u6307\u9488\u5DF2\u7ECF\u88AB\u91CA\u653E\u4F46\u5728\u540E\u7EED\u4ECD\u7136\u4F7F\u7528\u8BE5\u6307\u9488\u7684\u60C5\u51B5\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B-7" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-7" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Ause_after_free\u4EE3\u7801\u6848\u4F8B</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\u5DF2\u7ECF\u91CA\u653E\u7684\u6307\u9488\u53EA\u5141\u8BB8\u7F6E\u7A7A\u6216\u91CD\u65B0\u6307\u5411\u65B0\u7684\u503C\uFF0C\u4E0D\u5141\u8BB8\u5B58\u5728\u8BFB\u53D6\u6216\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
void UAR() {
    int* p = new int[];
    p = get_array();
    dosomething(p);
    delete p;
    p = NULL;  // allow
    p = get_array();  // allow: get array again
    delete p;
    dosomething(p);  // defect: use as param
    std::cout &lt;&lt; &quot;p[0] = &quot; &lt;&lt; p[0] &lt;&lt; std::endl;  // defect: read p
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="forward-null" tabindex="-1"><a class="header-anchor" href="#forward-null" aria-hidden="true">#</a> forward_null</h4><p>forward_null \u68C0\u67E5\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u7EC8\u6B62\u6216\u8FD0\u884C\u65F6\u5F02\u5E38\u7684\u9519\u8BEF\u3002\u5B83\u67E5\u627E\u6307\u9488\u6216\u5F15\u7528\u88AB\u68C0\u67E5\u662F\u5426\u4E3A null \u6216\u88AB\u8D4B\u503C\u4E3A null\uFF0C\u4E14\u4E4B\u540E\u88AB\u89E3\u5F15\u7528\u7684\u5F88\u591A\u60C5\u51B5\u3002</p><h5 id="\u89C4\u5219\u53C2\u6570-1" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u53C2\u6570-1" aria-hidden="true">#</a> \u89C4\u5219\u53C2\u6570</h5><ul><li>trust_param True or False \u9ED8\u8BA4\u4E3A True</li></ul><h5 id="\u4EE3\u7801\u793A\u4F8B-8" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-8" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Aforward_null\u4EE3\u7801\u6848\u4F8B</p><p>\u6307\u9488\u66FE\u7ECF\u6709\u8FC7\u68C0\u67E5null\u7684\u64CD\u4F5C\u5219\u4F1A\u89C6\u4E3A\u6709\u53EF\u80FD\u4E3A\u7A7A\u6307\u9488\uFF0C\u4E4B\u540E\u5728\u672A\u88AB\u786E\u8BA4\u4E3A\u975E\u7A7A\u6307\u9488\u60C5\u51B5\u4E0B\u76F4\u63A5\u4F7F\u7528\u3002\u5C06\u4F1A\u89C6\u4E3A<code>forward_null</code>\u9519\u8BEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void forward_null_1() {
    int * p;
    p = get_int_pointer();
    dosomething(p);
    if (p == NULL) {
        std::cout &lt;&lt; &quot;Null Pointer Find&quot; &lt;&lt; srd::endl;
        // return;      // prefer: if return here
    } else {
        dosomething(p);     // good: p is not NULL
    }
    dosomething(p);     // defect forward_null: p may NULL
}


void forward_null_2(int *p) {
    dosomething(p);
    if (p == NULL) {
        return;
    } else {
        dosomething(p);     // good: p is not NULL
    }
    dosomething(p);     // good
    ...
    if (p != NULL) {    // means p may nullpointer here
        dosomething(p);
    }
    dosomething(p);     // defect forward_null:p may NULL
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u6848\u4F8B\u5728\u8BBE\u7F6E<code>trust_param</code>\u4E3A<code>False</code>\u65F6\u5C06\u4F1A\u751F\u6548\uFF0C\u5176\u5C06\u4F1A\u9ED8\u8BA4\u8BA4\u4E3A\u51FD\u6570\u53C2\u6570\u5B58\u5728\u7A7A\u6307\u9488\u53EF\u80FD\uFF0C\u5FC5\u987B\u786E\u8BA4\u65E0\u7A7A\u6307\u9488\u53EF\u80FD\u65F6\u65B9\u53EF\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void forward_null_2(int *p) {
    dosomething(p);     // defect: param p may NULL
    if (p != NULL) {    // means p may nullpointer here
        dosomething(p);
    }
    dosomething(p);     // defect forward_null:p may NULL
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reverse-null" tabindex="-1"><a class="header-anchor" href="#reverse-null" aria-hidden="true">#</a> reverse_null</h4><p>reverse_null \u68C0\u67E5\u5DF2\u7ECF\u4F7F\u7528\u8FC7\u6307\u9488\uFF0C\u4F46\u5728\u540E\u7EED\u53C8\u5BF9\u6307\u9488\u8FDB\u884C\u4E86\u5224\u7A7A\u64CD\u4F5C\uFF1B\u4F1A\u88AB\u8BA4\u4E3A\u4E4B\u524D\u4F7F\u7528\u6307\u9488\u4E5F\u6709\u53EF\u80FD\u662F\u7A7A\u6307\u9488\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B-9" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-9" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u5C06\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Areverse_null\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void reverse_null(int *p) {
    dosomething(p);      // use p
    if (p != NULL) {    // defect reverse_null: It means p may NULL
        dosomething(p);
    }
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="glob-null-pointer" tabindex="-1"><a class="header-anchor" href="#glob-null-pointer" aria-hidden="true">#</a> glob_null_pointer</h4><p>glob_null_pointer \u68C0\u67E5\u6587\u4EF6\u5185\u5168\u5C40\u6307\u9488\u662F\u5426\u4E3A\u7A7A\uFF0C\u6307\u9488\u8D4B\u503C\u5C06\u4F1A\u88AB\u8BA4\u4E3A\u4E0D\u4E3A\u7A7A\u6307\u9488\uFF0C\u4F46\u68C0\u6D4B\u5230\u7A7A\u6307\u9488\u5224\u65AD\u5219\u89C6\u4E3A\u6307\u9488\u6B64\u65F6\u53EF\u80FD\u4E3A\u7A7A\uFF0C\u5982\u679C\u5728\u53EF\u80FD\u4E3A\u7A7A\u65F6\u4F7F\u7528\u5219\u4F1A\u62A5\u9519</p><h5 id="\u4EE3\u7801\u793A\u4F8B-10" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-10" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u5C06\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Aglob_null_pointer\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>int *p;


void thread1() {
    p = get_int_pointer();      // p is not NULL
    dosomething(p);     // good
    if (p != NULL) {
        something(p);   // good
    }
    something(p);  // defect: p may NULL, because check p before
}


void thread2() {
    *p = 6;     // defect: p may NULL
    if (p != NULL) {
        something(p);   // good
    }
    something(p);  // defect: p may NULL
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u5199" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u5199</h2><p>\u5305\u542B\u89C4\u5219</p><ul><li>function_override</li></ul><p>\u4EC5\u7C7B\u865A\u62DF\u51FD\u6570\u5141\u8BB8\u91CD\u5199\u3002</p><h4 id="function-override" tabindex="-1"><a class="header-anchor" href="#function-override" aria-hidden="true">#</a> function_override</h4><p>function_override \u68C0\u67E5\u975E\u865A\u62DF\u51FD\u6570\u91CD\u5199\u7684\u60C5\u51B5\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B-11" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-11" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Afunction_override\u4EE3\u7801\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

class father{
    public:
        father(){};
        ~father(){};
    
    private:
        virtual void test(){};
        void test2(){ std::cout&lt;&lt;&quot;hello&quot;;};
};

class man{};


class son: public father, public man{
    public:
        son(){};
        ~son(){};
    private:
        void test(){ std::cout&lt;&lt;&quot;hello&quot;;};  // allow: virtual function override
        void test2(){ std::cout&lt;&lt;&quot;hello&quot;;};  // defect: bad override
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6B7B\u4EE3\u7801\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6B7B\u4EE3\u7801\u68C0\u67E5" aria-hidden="true">#</a> \u6B7B\u4EE3\u7801\u68C0\u67E5</h2><h4 id="dead-code" tabindex="-1"><a class="header-anchor" href="#dead-code" aria-hidden="true">#</a> dead_code</h4><p>dead_code \u68C0\u67E5\u6C38\u8FDC\u4E0D\u4F1A\u6267\u884C\u5230\u7684\u4EE3\u7801\uFF0C\u4E3B\u8981\u4E3A\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u5185 return, break \u540E\u7684\u4EE3\u7801</p><h5 id="\u4EE3\u7801\u793A\u4F8B-12" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-12" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Adead_code\u4EE3\u7801\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// C/Cpp
void dead_code(int t) {
    int sum = 0;
    for (int i = 1; i &lt;= 100; i++) {
        if (i == t) {
            break;
            sum = t;    // Defect: dead_code
        }
        sum += i;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dead-branch" tabindex="-1"><a class="header-anchor" href="#dead-branch" aria-hidden="true">#</a> dead_branch</h4><p>dead_branch \u68C0\u67E5\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u6267\u884C\u5230\u7684\u5206\u652F\u4EE3\u7801\uFF0C\u5176\u539F\u56E0\u53EF\u80FD\u662F\u5177\u6709\u76F8\u540C\u6548\u679C\u7684\u63A7\u5236\u8BED\u53E5\u6216\u67D0\u4E9B\u6761\u4EF6\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u6C38\u8FDC\u4E0D\u4F1A\u6267\u884C\u3002</p><h5 id="\u4EE3\u7801\u793A\u4F8B-13" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-13" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2Adead_branch\u4EE3\u7801\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
void dead_branch(int i) {
    if (i &lt; 100) {
        if ( i &gt; 100) {     // Defect: dead_branch, i \u5C5E\u4E8E (-inf, 100) \u4E0D\u5B58\u5728 (100, inf)\u7684\u53EF\u80FD
            dosomething() ;
        }
        return;
    } else if (i &gt;= 100) {
        if ( i &lt; 99 ) {     // Defect: dead_branch, i \u5C5E\u4E8E[100, inf) \u4E0D\u5B58\u5728 (-inf, 99)\u7684\u53EF\u80FD
            dosomething();
        }
        return;
    } else if (i &lt; 10){     // Defect: dead_branch, \u5728\u524D\u9762\u5206\u652F\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86\u6240\u6709i\u7684\u53EF\u80FD\uFF0C\u8FD9\u91CC\u5DF2\u7ECF\u4E0D\u5B58\u5728 (-inf, 10)\u7684\u53EF\u80FD
        dosomething();
    }
    else {                  // Defect: dead_branch, \u5728\u524D\u9762\u5206\u652F\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86\u6240\u6709i\u7684\u53EF\u80FD
        dosomething();
    }
    return;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D8\u91CF\u521D\u59CB\u5316\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u521D\u59CB\u5316\u68C0\u67E5" aria-hidden="true">#</a> \u53D8\u91CF\u521D\u59CB\u5316\u68C0\u67E5</h2><p>\u5305\u542B\u89C4\u5219</p><ul><li>uinit</li></ul><h4 id="uinit" tabindex="-1"><a class="header-anchor" href="#uinit" aria-hidden="true">#</a> uinit</h4><p>uinit \u68C0\u67E5\u53D8\u91CF\u5728\u5B9A\u4E49\u540E\u76F4\u63A5\u4F7F\u7528\uFF0C\u5374\u6CA1\u6709\u521D\u59CB\u5316\u7684\u573A\u666F\uFF1B\u4F7F\u7528\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF \u53EF\u80FD\u5BFC\u81F4\u65E0\u6CD5\u9884\u6D4B\u7684\u884C\u4E3A\u3001\u5D29\u6E83\u548C\u5B89\u5168\u6F0F\u6D1E\u3002</p><h5 id="\u89C4\u5219\u53C2\u6570-2" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u53C2\u6570-2" aria-hidden="true">#</a> \u89C4\u5219\u53C2\u6570</h5><ul><li>deep_level: true, false \u8BBE\u7F6E\u4E3Atrue\u65F6\u5C06\u4F1A\u5206\u6790\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u7684\u60C5\u51B5\uFF0C\u5426\u5219\u65E0\u89C6\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u7684\u4F7F\u7528\u3002</li></ul><h5 id="\u4EE3\u7801\u793A\u4F8B-14" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-14" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h5><p>\u4EE5\u4E0B\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A uinit \u4EE3\u7801\u6848\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
void test(char* t) {
    std::cout&lt;&lt; t &lt;&lt; std::endl;     // Defect: p \u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\uFF0C\u6B64\u5904\u672A\u521D\u59CB\u5316\u3002
    return;
}


int uinit(int i) {
    int a;
    char * p;
    test(p);    // deep_level = true
    if (i &lt; 10)
        a = 1;
    else
        i = 1;
    return a;   // Defect: i\u5927\u4E8E10\u65F6\uFF0Ca\u5E76\u672A\u8D4B\u503C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,125),a=[s];function r(v,u){return i(),n("div",null,a)}const t=e(l,[["render",r],["__file","TCA-Armory-Q1.html.vue"]]);export{t as default};
