import projectConfig from '/blog/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/README.md",
    'layoutPath': "tags/_layout.tsx",
    'outputPath': "tags/index.html",
    'title': "标签",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>标签</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6807\u7B7E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "Augus",
    'contributors': [
        "Augus"
    ],
    'date': "2021-09-13T02:33:52.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/Maintaining Separation of Concerns Through Angular Directives.md",
                "title": "Maintaining Separation of Concerns Through Angular Directives",
                "link": "posts/Maintaining Separation of Concerns Through Angular Directives.html",
                "date": "2021-09-13T02:33:52.000Z",
                "updated": null,
                "author": "Augus",
                "contributors": [
                    "Augus"
                ],
                "excerpt": "We have a date picker component in our application. We send an event each time a user changes the date to our analytics provider. We have one use of it so far, so the analytics code was inside the component tha...",
                "cover": "https://miro.medium.com/max/1400/1*z72M1pr8-q5k2QJ4SaUR8g.png"
            },
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
