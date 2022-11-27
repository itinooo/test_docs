module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/test_docs/', // github的仓库名称

    themeConfig: {
        // 侧边栏
        sidebar: [
            '/',
            '/category1/',
            {
                title: 'category2_nest',
                path: '/category2/',
                children:[
                    '/category2/test.md',
                    '/category2/test2.md',
                ]
            }
        ]
    }

}