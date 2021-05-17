import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "关于",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>关于</h1>\n<p>你好！很高兴认识你！</p>\n<p>我的网名是流浪小猫，英文是 xcatliu，基本上在任何社交网站上看到这个 id 就是我啦！</p>\n<p>我毕业于武汉大学，前后就职于美团、微软、腾讯。</p>\n<p>我非常热爱开源项目，以下是我开发或维护的一些开源项目：</p>\n<ul>\n<li><a href="https://github.com/xcatliu/pagic">Pagic</a>：Deno + React 驱动的静态网站生成器，本博客也是用 Pagic 生成的哦！</li>\n<li><a href="https://github.com/AlloyTeam/eslint-config-alloy">eslint-config-alloy</a>：国内最广泛使用的 ESLint 配置，也是你配置个性化 ESLint 规则的最佳参考。</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5173\u4E8E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>你好！很高兴认识你！</p>\n<p>我的网名是流浪小猫，英文是 xcatliu，基本上在任何社交网站上看到这个 id 就是我啦！</p>\n<p>我毕业于武汉大学，前后就职于美团、微软、腾讯。</p>\n<p>我非常热爱开源项目，以下是我开发或维护的一些开源项目：</p>\n<ul>\n<li><a href="https://github.com/xcatliu/pagic">Pagic</a>：Deno + React 驱动的静态网站生成器，本博客也是用 Pagic 生成的哦！</li>\n<li><a href="https://github.com/AlloyTeam/eslint-config-alloy">eslint-config-alloy</a>：国内最广泛使用的 ESLint 配置，也是你配置个性化 ESLint 规则的最佳参考。</li>\n</ul>'
        } }),
    'toc': null,
    'author': "Augus",
    'contributors': [
        "Augus"
    ],
    'date': "2021-05-17T17:31:43.000Z",
    'updated': null,
    'excerpt': "你好！很高兴认识你！ 我的网名是流浪小猫，英文是 xcatliu，基本上在任何社交网站上看到这个 id 就是我啦！ 我毕业于武汉大学，前后就职于美团、微软、腾讯。 我非常热爱开源项目，以下是我开发或维护的一些开源项目： - Pagi...",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/2016_summery.md",
                "title": "ideaVim",
                "link": "posts/2016_summery.html",
                "date": "2021-05-16T00:00:00.000Z",
                "updated": null,
                "author": "Augus",
                "contributors": [
                    "Augus"
                ],
                "categories": [
                    "webstorm plugin"
                ],
                "tags": [
                    "plugin"
                ],
                "excerpt": "源起 平常总喜欢喜欢看一些idea插件， 尤其是看到一些热门的插件，总是想去尝试。 ideaVim就是我最喜欢的插件之一, 它可以很好的提高你的代码效率， vim语法可以通过键盘完成大部分操作，摆脱鼠标和键盘之间来回切换的桎梏。 v...",
                "cover": "../assets/ideaVim/vim_chart.png"
            }
        ],
        "categories": [
            {
                "name": "webstorm plugin",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "plugin",
                "count": 1
            }
        ]
    }
};
