export default {
    srcDir: 'src',
    outDir: 'dist',
    theme: 'blog',
    root: '/blog/',
    plugins: ['blog'],
    title: 'Augus的博客',
    description: '欢迎来到我的博客，这里搜集了我的技术文章和生活感悟，欢迎一起交流成长。',
    github: 'https://github.com/The-spotlight/blog',
    nav: [
        {
            text: '首页',
            link: '/blog/',
            icon: 'czs-home-l'
        },
        {
            text: '分类',
            link: '/blog/categories/',
            icon: 'czs-category-l'
        },
        {
            text: '标签',
            link: '/blog/tags/',
            icon: 'czs-tag-l'
        },
        {
            text: '关于',
            link: '/blog/about/',
            icon: 'czs-about-l'
        },
        {
            text: '归档',
            link: '/blog/archives/',
            icon: 'czs-box-l'
        },
        {
            text: '友情链接',
            link: '/blog/links/',
            icon: 'czs-link-l'
        }
    ],
    blog: {
        root: '/posts/',
        social: {
            github: 'The-spotlight/blog',
            email: 'wei1129@gmail.com',
        }
    }
};
