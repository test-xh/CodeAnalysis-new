import{_ as s,r as d,o as a,c as v,a as n,b as i,f as r,d as l}from"./app.21492397.js";const t={},c=r(`<h1 id="\u4E3A\u4EC0\u4E48\u8981\u81EA\u5EFA\u5DE5\u5177\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u81EA\u5EFA\u5DE5\u5177\u5E93" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u81EA\u5EFA\u5DE5\u5177\u5E93</h1><ul><li>Github \u5BF9lfs\u6D41\u91CF\u6709\u63A7\u5236\u5BFC\u81F4\u90E8\u5206\u5DE5\u5177\u62C9\u4E0D\u4E0B\u6765</li><li>Github \u4E0B\u8F7D\u901F\u5EA6\u6709\u5DEE\u5F02\uFF0C\u4E3A\u4FDD\u8BC1\u62C9\u53D6\u901F\u5EA6\u5EFA\u8BAE\u4F7F\u7528\u6D41\u7545\u7684\u5DE5\u5177\u5E93</li></ul><h1 id="\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u5DE5\u5177\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u5DE5\u5177\u5E93" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u5176\u4ED6\u5DE5\u5177\u5E93</h1><ol><li>\u5DE5\u5177\u76F8\u5BF9\u5E94\u7684\u4ED3\u5E93\u5730\u5740\uFF0C\u73AF\u5883\u53D8\u91CF\u5168\u90E8\u5B58\u50A8\u5728puppy-tools-config\u4ED3\u5E93\u4E2D\uFF0C\u53EF\u901A\u8FC7fork\u8BE5\u4ED3\u5E93\uFF0C\u4FEE\u6539\u6307\u5B9A\u7684\u5DE5\u5177\u4ED3\u5E93</li><li>\u4FEE\u6539<code>client/config.ini</code>\u4E2D\u7684\u5B57\u6BB5\u6307\u5B9Apuppy-tools-config\uFF0C\u5982\u4E0B</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[COMMON]
; [\u5FC5\u586B]\u5DE5\u5177\u914D\u7F6E\u5E93git\u5730\u5740
; \u5982\u679Cgithub\u7F51\u7EDC\u6162\uFF0C\u5EFA\u8BAE\u4FEE\u6539\u4E3A\u817E\u8BAF\u5DE5\u8702\u5730\u5740\uFF1Ahttps://git.code.tencent.com/TCA/tca-tools/puppy-tools-config.git
; \u8FD9\u91CC\u53EF\u4EE5\u4FEE\u6539\u4E3A\u81EA\u5DF1\u7EF4\u62A4\u7684puppy-tools-config
TOOL_CONFIG_URL=
PASSWORD_KEY=
; [\u53EF\u9009]\u65E5\u5FD7\u7EA7\u522B,\u9ED8\u8BA4\u4E3Ainfo\u7EA7\u522B,\u8BBE\u7F6E\u4E3ATrue\u5219\u8C03\u6574\u4E3Adebug\u7EA7\u522B
DEBUG=
; [\u53EF\u9009]\u662F\u5426\u4F7F\u7528\u672C\u5730\u5DE5\u5177\u76EE\u5F55,\u9ED8\u8BA4\u4E3AFalse,\u5982\u679C\u8BBE\u7F6E\u4E3ATrue,\u4E0D\u4ECEgit\u62C9\u53D6(\u9700\u8981\u4E8B\u5148\u51C6\u5907\u597D\u5DE5\u5177\uFF0C\u5B58\u653E\u5230tools\u76EE\u5F55\u4E0B)
USE_LOCAL_TOOL=

[TOOL_LOAD_ACCOUNT]
; [\u53EF\u9009]\u62C9\u53D6\u5DE5\u5177\u5E93\u7684\u8D26\u53F7\u5BC6\u7801
; \u5982\u679CTOOL_CONFIG_URL\u4F7F\u7528\u7684\u662F\u817E\u8BAF\u5DE5\u8702\uFF0C\u8D26\u53F7\u5BC6\u7801\u5FC5\u586B\uFF08\u5982\u679C\u6CA1\u6709\uFF0C\u53EF\u4EE5\u5148\u53BBhttps://git.code.tencent.com\u6CE8\u518C\uFF09
USERNAME=
PASSWORD=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4FEE\u6539puppy-tools-config\uFF0C\u5982\u4E0B\u4F8B</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; ---------------------------------------------------------------------------------------------------------------------
; \u914D\u7F6E\u6587\u4EF6\u586B\u5199\u8BF4\u660E:
; \u586B\u5199\u8FC7\u7A0B\u4E2D,\u5982\u679C\u6709\u591A\u4E2A\u503C,\u7528\u82F1\u6587\u5206\u53F7\u5206\u9694
; [env_path]    - \u73AF\u5883\u53D8\u91CF\u8DEF\u5F84\u5B9A\u4E49\uFF0C\u57FA\u4E8Etools\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u6BD4\u5982\uFF1APYLINT_HOME : puppy_tools_common/pylint-1.4.5
; [env_value]   - \u73AF\u5883\u53D8\u91CF\u503C\u5B9A\u4E49\uFF0C\u6BD4\u5982\uFF1AGIT_SSL_NO_VERIFY : 1
; [tool_url]    - \u5DE5\u5177\u5E93\u5730\u5740\u5B9A\u4E49\uFF0C\u683C\u5F0F\uFF1A\u5DE5\u5177\u540D:url\uFF0C\u6BD4\u5982 CHECKSTYLE : http://xxxxxx.git
; [common]      - \u516C\u5171\u73AF\u5883\u914D\u7F6E\uFF0C\u6BD4\u5982git\u73AF\u5883\u53D8\u91CF\u7B49, \u5305\u542B\u4EE5\u4E0B4\u4E2A\u5B57\u6BB5
;                 env_path  - \u9700\u8981\u7684\u73AF\u5883\u53D8\u91CF\u8DEF\u5F84,\u586B\u5199[env_path]\u4E2D\u7684KEY\u503C\uFF0C\u6BD4\u5982 env_path : ANDROID_HOME;CHECKSTYLE_HOME
;                 env_value - \u9700\u8981\u7684\u73AF\u5883\u53D8\u91CF\u503C,\u586B\u5199[env_value]\u4E2D\u7684KEY\u503C\uFF0C\u6BD4\u5982 env_value : GIT_SSL_NO_VERIFY
;                 path      - \u9700\u8981\u52A0\u5230path\u73AF\u5883\u53D8\u91CF\u4E2D\u7684\u8DEF\u5F84\uFF0C\u57FA\u4E8Etools\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84,\u63A8\u8350\u4F7F\u7528\u53D8\u91CF\u683C\u5F0F\uFF0C\u6BD4\u5982 path : \${env_path:PYLINT_HOME}/bin
;                 tool_url  - \u9700\u8981\u62C9\u53D6\u7684\u5DE5\u5177\u5E93,\u591A\u4E2A\u5730\u5740\u7528\u82F1\u6587\u5206\u53F7\u5206\u9694\uFF0C\u63A8\u8350\u4F7F\u7528\u53D8\u91CF\u683C\u5F0F\uFF0C\u6BD4\u5982 tool_url : \${tool_url:PYLINT}
; [\u5DE5\u5177\u540D]       - \u5404\u5DE5\u5177\u914D\u7F6E\uFF0C\u5DE5\u5177\u540D\u9700\u8981\u4E0Etool\u76EE\u5F55\u4E0B\u7684\u6A21\u5757\u540D\u5339\u914D\uFF0C\u5B57\u6BB5\u683C\u5F0F\u53C2\u8003[common]
; ---------------------------------------------------------------------------------------------------------------------
[base_value]
git_url=https://github.com/TCATools

;------------------
;  1.\u73AF\u5883\u53D8\u91CF\u8DEF\u5F84\u5B9A\u4E49
;------------------
; \u7528\u6765\u8BB0\u5F55\u5DE5\u5177\u8DEF\u5F84\uFF0C\u4F1A\u5728\u5DE5\u5177\u6267\u884C\u65F6\u5199\u5165\u5230\u73AF\u5883\u53D8\u91CF\u4E2D
[env_path]
CPPLINT_HOME      : cpplint

;------------------
;  2.\u73AF\u5883\u53D8\u91CF\u503C\u5B9A\u4E49
;------------------
; \u8BB0\u5F55\u90E8\u5206\u73AF\u5883\u53D8\u91CF\u5E76\u5728\u6267\u884C\u65F6\u5199\u5165\u73AF\u5883\u53D8\u91CF
[env_value]
PYTHON_VERSION    : 3


;------------------
;  3.\u5DE5\u5177git\u5E93\u5B9A\u4E49
;------------------
; \u62C9\u5DE5\u5177\u7684\u4ED3\u5E93\u5730\u5740
[tool_url]
CPPLINT       : \${base_value:git_url}/cpplint.git

;------------------
;  5.\u5404\u4E2A\u5DE5\u5177\u914D\u7F6E
;------------------
; \u6574\u5408\u5DE5\u5177\u914D\u7F6E
[cpplint]
env_path  : CPPLINT_HOME
env_value : PYTHON_VERSION
path      : \${env_path:CPPLINT_HOME}
tool_url  : \${tool_url:CPPLINT}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u4FEE\u6539\u62C9\u53D6\u5DE5\u5177\u9700\u8981\u7684\u8D26\u53F7\u5BC6\u7801 \u8D26\u53F7\u5BC6\u7801\u9700\u5728<code>client/config.ini</code>\u4E2D\u6307\u5B9A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[TOOL_LOAD_ACCOUNT]
; [\u53EF\u9009]\u62C9\u53D6\u5DE5\u5177\u5E93\u7684\u8D26\u53F7\u5BC6\u7801
; \u5982\u679C\u4F7F\u7528\u7684\u5DE5\u5177\u4ED3\u5E93\u5FC5\u987B\u8D26\u53F7\u5BC6\u7801\u624D\u80FD\u62C9\u53D6\u5219\u5FC5\u987B\u586B\u5199
USERNAME=
PASSWORD=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5176\u4ED6\u5DE5\u5177\u5E93\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5DE5\u5177\u5E93\u5EFA\u8BAE" aria-hidden="true">#</a> \u5176\u4ED6\u5DE5\u5177\u5E93\u5EFA\u8BAE</h1>`,10),o={href:"https://git.code.tencent.com/groups/TCA/tca-tools/-/projects/list",target:"_blank",rel:"noopener noreferrer"},u=l("\u817E\u8BAF\u5DE5\u8702"),m={href:"https://docs.gitlab.cn/jh/install/docker.html",target:"_blank",rel:"noopener noreferrer"},b=l("\u81EA\u5EFAGitLab");function _(p,h){const e=d("ExternalLinkIcon");return a(),v("div",null,[c,n("ol",null,[n("li",null,[n("a",o,[u,i(e)])]),n("li",null,[n("a",m,[b,i(e)])])])])}const O=s(t,[["render",_],["__file","\u4F7F\u7528\u81EA\u5EFA\u5DE5\u5177\u5E93.html.vue"]]);export{O as default};
