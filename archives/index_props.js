import projectConfig from '/blog/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "archives/README.md",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "archives/index.html",
    'title': "归档",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>归档</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5F52\u6863"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "Augus",
    'contributors': [
        "Augus"
    ],
    'date': "2021-05-19T09:31:24.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
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
