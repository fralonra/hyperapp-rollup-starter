import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-cpy'
import del from 'rollup-plugin-delete'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  babel({
    presets: [["@babel/preset-env"]],
    plugins: [['transform-react-jsx', { pragma: 'h' }]]
  }),
  resolve(),
  del({
    targets: 'prod',
    verbose: true
  }),
  copy({
    files: ['dist', 'styles', 'index.html'],
    dest: 'prod',
    options: {
      verbose: true,
      parents: true
    }
  })
]

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/main.js',
    sourcemap: true
  },
  plugins
}
