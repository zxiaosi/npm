import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index'], // 入口
  outDir: 'dist', // 输出目录
  declaration: true, // 生成声明文件
  rollup: {
    emitCJS: true, // 生成cjs文件
    cjsBridge: true, // es模块兼容cjs
  },
});
