module.exports = {
  plugins: {
    autoprefixer: {
      flexbox: 'no-2009',
    },
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false, // 使用base64编码
    },
    'postcss-preset-env': {
      stage: 4, // 稳定阶段
    },
    'postcss-px-to-viewport': {
      viewportWidth: 750, // (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // (String) 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines', '.markdown', '.play-ico'], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名，注意：第三方UI库也要在此添加
      minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // (Boolean) 允许在媒体查询中转换`px`
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
    // "postcss-viewport-units": {
    //   filterRule: (rule) => rule.nodes.findIndex((i) => i.prop === "content") === -1, // 过滤伪类content使用
    // },
    cssnano: {
      'cssnano-preset-advanced': {
        zindex: false, // 防止z-index的值重置为1
        autoprefixer: false, // 有重复调用，关闭
      },
    },
  },
};
