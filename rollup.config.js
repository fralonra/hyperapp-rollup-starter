
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const plugins = [
  babel({
    plugins: [['transform-react-jsx', { pragma: 'h' }]]
  }),
  resolve(),
  serve({
    contentBase: '.',
    port: 8080,
    open: true
  }),
  livereload()
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
