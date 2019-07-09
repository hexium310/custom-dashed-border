import typescript from 'rollup-plugin-typescript2';

import { main as mainPath, module as modulePath } from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: mainPath,
      format: 'cjs',
    },
    {
      file: modulePath,
      format: 'esm',
    },
  ],
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    typescript(),
  ],
};
