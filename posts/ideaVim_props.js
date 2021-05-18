import projectConfig from '/blog/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/ideaVim.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/ideaVim.html",
    'title': "ideaVim",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ideaVim</h1>\n<blockquote>\n<p>用于基于IntelliJ平台的IDE的Vim仿真插件。</p>\n</blockquote>\n<h2 id="%E6%BA%90%E8%B5%B7">源起<a class="anchor" href="#%E6%BA%90%E8%B5%B7">§</a></h2>\n<p>平常总喜欢喜欢看一些idea插件，</p>\n<p>尤其是看到一些热门的插件，总是想去尝试。</p>\n<p>ideaVim就是我最喜欢的插件之一, 它可以很好的提高你的代码效率，</p>\n<p>vim语法可以通过键盘完成大部分操作，摆脱鼠标和键盘之间来回切换的桎梏。</p>\n<h2 id="vim%E8%AF%AD%E6%B3%95">vim语法<a class="anchor" href="#vim%E8%AF%AD%E6%B3%95">§</a></h2>\n<blockquote>\n<p>动作 -- 指示 -- 标记</p>\n</blockquote>\n<p>比如说选择一个单词，只需按下 vaw 就可以选中当前单词,</p>\n<p>选择大括号中的内容，va{</p>\n<p><img src="../assets/ideaVim/vim_chart.png" alt="vim"></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "ideaVim"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>用于基于IntelliJ平台的IDE的Vim仿真插件。</p>\n</blockquote>\n<h2 id="%E6%BA%90%E8%B5%B7">源起<a class="anchor" href="#%E6%BA%90%E8%B5%B7">§</a></h2>\n<p>平常总喜欢喜欢看一些idea插件，</p>\n<p>尤其是看到一些热门的插件，总是想去尝试。</p>\n<p>ideaVim就是我最喜欢的插件之一, 它可以很好的提高你的代码效率，</p>\n<p>vim语法可以通过键盘完成大部分操作，摆脱鼠标和键盘之间来回切换的桎梏。</p>\n<h2 id="vim%E8%AF%AD%E6%B3%95">vim语法<a class="anchor" href="#vim%E8%AF%AD%E6%B3%95">§</a></h2>\n<blockquote>\n<p>动作 -- 指示 -- 标记</p>\n</blockquote>\n<p>比如说选择一个单词，只需按下 vaw 就可以选中当前单词,</p>\n<p>选择大括号中的内容，va{</p>\n<p><img src="../assets/ideaVim/vim_chart.png" alt="vim"></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%BA%90%E8%B5%B7" }, "\u6E90\u8D77")),
            React.createElement("li", null,
                React.createElement("a", { href: "#vim%E8%AF%AD%E6%B3%95" }, "vim\u8BED\u6CD5")))),
    'author': "Augus",
    'contributors': [
        "Augus"
    ],
    'date': "2021-05-16T00:00:00.000Z",
    'updated': null,
    'excerpt': "源起 平常总喜欢喜欢看一些idea插件， 尤其是看到一些热门的插件，总是想去尝试。 ideaVim就是我最喜欢的插件之一, 它可以很好的提高你的代码效率， vim语法可以通过键盘完成大部分操作，摆脱鼠标和键盘之间来回切换的桎梏。 v...",
    'cover': "../assets/ideaVim/vim_chart.png",
    'categories': [
        "webstorm plugin"
    ],
    'tags': [
        "plugin"
    ],
    'links': "https://plugins.jetbrains.com/plugin/164-ideavim",
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/ideaVim.md",
                "title": "ideaVim",
                "link": "posts/ideaVim.html",
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
