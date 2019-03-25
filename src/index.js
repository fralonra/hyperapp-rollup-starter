import { h, app } from 'hyperapp'

const state = {
  text: 'Hello Hyper'
}

const actions = {
}

const view = (state, actions) => (
  <div>{state.text}</div>
)

app(state, actions, view, document.getElementById('app'))

