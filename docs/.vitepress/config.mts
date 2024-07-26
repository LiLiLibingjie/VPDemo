import { defineConfig } from 'vitepress'
import VitePressSidebar from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  documentRootPath: '/docs',
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  frontmatterTitleFieldName: 'title',
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: false,
  hyphenToSpace: true,
  underscoreToSpace: true,
  capitalizeFirst: false,
  capitalizeEachWords: false,
  collapsed: true,
  collapseDepth: 2,
  sortMenusByName: false,
  sortMenusByFrontmatterOrder: false,
  sortMenusByFrontmatterDate: false,
  sortMenusOrderByDescending: false,
  sortMenusOrderNumericallyFromTitle: false,
  sortMenusOrderNumericallyFromLink: false,
  frontmatterOrderDefaultValue: 0,
  manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
  removePrefixAfterOrdering: false,
  prefixSeparator: '.',
  excludeFiles: ['first.md', 'secret.md'],
  excludeFilesByFrontmatterFieldName: 'exclude',
  excludeFolders: ['secret-folder'],
  includeDotFiles: false,
  includeRootIndexFile: false,
  includeFolderIndexFile: false,
  includeEmptyFolder: false,
  convertSameNameSubFileToGroupIndexPage: false,
  folderLinkNotIncludesFileName: false,
  keepMarkdownSyntaxFromTitle: false,
  debugPrint: false,
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "途游文档中心",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开发者文档', link: '/login/login-ios' }
    ],

    // sidebar: [
    //   {
    //     text: '开发者文档',
    //     items: [
    //       { text: '登录', collapsed: true, items: [{ text: '苹果登录', link: '/login/login-ios' }, { text: 'Android登录', link: '/login/login-android' }] },
    //       { text: '支付', collapsed: true, items: [{ text: '苹果支付', link: '/pay/pay-ios' }, { text: 'Android支付', link: '/pay/pay-android' }] }
    //     ]
    //   }
    // ],
    sidebar: VitePressSidebar.generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true,
  // vite: {
  //   plugins: [
  //     AutoSidebar({
  //       path: '/docs',
  //       collapsed: true,
  //       ignoreList: ['.obsidian', '.git', 'node_modules']
  //     })
  //   ]
  // }
})
