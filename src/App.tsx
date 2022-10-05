import { store } from '@/store/index'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello World</div>
    </Provider>
  )
}

export default App
