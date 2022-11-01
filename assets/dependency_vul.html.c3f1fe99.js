import{_ as e,o as n,c as i,f as t}from"./app.21492397.js";const l={},a=t(`<h1 id="\u4F9D\u8D56\u6F0F\u6D1E\u626B\u63CF\u89C4\u5219\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u6F0F\u6D1E\u626B\u63CF\u89C4\u5219\u5305" aria-hidden="true">#</a> \u4F9D\u8D56\u6F0F\u6D1E\u626B\u63CF\u89C4\u5219\u5305</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8BE5\u89C4\u5219\u5305\u53EF\u5206\u6790\u9879\u76EE\u4F9D\u8D56\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u4F9D\u8D56\u7EC4\u4EF6\u4E2D\u662F\u5426\u5B58\u5728\u6F0F\u6D1E\u7B49\u95EE\u9898\u3002\u8F85\u52A9\u5F00\u53D1\u8005\u51C6\u786E\u5206\u6790\u5230\u4F9D\u8D56\u7EC4\u4EF6\u7684\u5B89\u5168\u6027\uFF0C\u9009\u7528\u5B89\u5168\u53EF\u9760\u7684\u4F9D\u8D56\u7EC4\u4EF6\u3002</p><p>\u89C4\u5219\u5305\u4E2D\u5C06\u6F0F\u6D1E\u89C4\u5219\u5206\u4E3A\u201C\u4F4E\u5371\u6F0F\u6D1E\u201D\u3001\u201C\u4E2D\u5371\u6F0F\u6D1E\u201D\u3001\u201C\u9AD8\u5371\u6F0F\u6D1E\u201D\u4E09\u4E2A\u7B49\u7EA7\uFF0C\u626B\u63CF\u51FA\u6709\u6F0F\u6D1E\u7684\u7EC4\u4EF6\uFF0CTCA\u4F1A\u63D0\u4F9B\u95EE\u9898\u7EC4\u4EF6\u540D\u79F0\u548C\u7248\u672C\u3001\u6F0F\u6D1E\u60C5\u51B5\u4ECB\u7ECD\uFF0C\u4EE5\u53CA\u53EF\u7528\u7684\u4FEE\u590D\u7248\u672C\uFF08\u5982\u83B7\u53D6\u5230\uFF09\u3002</p><p>\u5DF2\u652F\u6301\u8BED\u8A00\uFF1AC/C++\u3001C#\u3001Go\u3001Java\u3001JavaScript\u3001PHP\u3001Python\u3001Ruby\u3001Scala\u3001TypeScript\u7B49\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.javaweb.vuln&lt;/groupId&gt;
        &lt;artifactId&gt;javaweb-vuln&lt;/artifactId&gt;
        &lt;version&gt;3.0.3&lt;/version&gt;
    &lt;/parent&gt;

    &lt;dependencies&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.apache.struts&lt;/groupId&gt;
            &lt;artifactId&gt;struts2-core&lt;/artifactId&gt;
            &lt;!-- \u89E6\u53D1\u89C4\u5219  --&gt;
            &lt;version&gt;2.1.8&lt;/version&gt;
            &lt;exclusions&gt;
                &lt;exclusion&gt;
                    &lt;groupId&gt;org.freemarker&lt;/groupId&gt;
                    &lt;artifactId&gt;freemarker&lt;/artifactId&gt;
                &lt;/exclusion&gt;

                &lt;exclusion&gt;
                    &lt;groupId&gt;org.springframework&lt;/groupId&gt;
                    &lt;artifactId&gt;spring-test&lt;/artifactId&gt;
                &lt;/exclusion&gt;

                &lt;exclusion&gt;
                    &lt;groupId&gt;commons-fileupload&lt;/groupId&gt;
                    &lt;artifactId&gt;commons-fileupload&lt;/artifactId&gt;
                &lt;/exclusion&gt;
            &lt;/exclusions&gt;
        &lt;/dependency&gt;

    &lt;/dependencies&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4F53\u9A8C" aria-hidden="true">#</a> \u5FEB\u901F\u4F53\u9A8C</h2><p>TCA \u73B0\u5DF2\u652F\u6301\u4F9D\u8D56\u6F0F\u6D1E\u626B\u63CF\u89C4\u5219\u5305\uFF0C\u53EF\u4EE5\u5728 TCA \u5206\u6790\u65B9\u6848\u4E2D\u641C\u7D22\u52FE\u9009\u8BE5\u89C4\u5219\u5305\uFF0C\u5FEB\u901F\u4F53\u9A8C\u3002</p><h3 id="\u542F\u7528\u89C4\u5219\u5305" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u89C4\u5219\u5305" aria-hidden="true">#</a> \u542F\u7528\u89C4\u5219\u5305</h3><p>\u5206\u6790\u65B9\u6848 -&gt; \u4EE3\u7801\u68C0\u67E5 -&gt;\u3010Objective-C\u3011\u4EE3\u7801\u89C4\u8303\u89C4\u5219\u5305 -&gt; \u542F\u7528/\u67E5\u770B\u89C4\u5219\u3002</p><h3 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h3><p>\u66F4\u591A\u573A\u666F\u652F\u6301\uFF0C\u6B22\u8FCE\u63D0 issue \u8FDB\u884C\u54A8\u8BE2\u6269\u5C55\u3002</p>`,13),d=[a];function s(r,c){return n(),i("div",null,d)}const u=e(l,[["render",s],["__file","dependency_vul.html.vue"]]);export{u as default};
