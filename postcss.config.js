module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"；
      viewportWidth: 750, // 设计稿的视口宽度
      unitPrecision: 6, // 单位转换后保留的小数位数
      propList: ['*'], // 要进行转换的属性列表,*表示匹配所有,!表示不转换
      viewportUnit: 'vw', // 转换后的视口单位
      fontViewportUnit: 'vw', // 转换后字体使用的视口单位
      selectorBlackList: [], // 不进行转换的css选择器，继续使用原有单位
      minPixelValue: 1, // 设置最小的转换数值
      mediaQuery: false, // 设置媒体查询里的单位是否需要转换单位
      replace: true, // 是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/], // 忽略某些文件夹下的文件
    },
  },
};
