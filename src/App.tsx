import { store } from '@/store/index'
import { Provider } from 'react-redux'
import HelloWorld from '@/components/hello/hello-world'

const App = () => {
  return (
    <Provider store={store}>
      <HelloWorld></HelloWorld>
    </Provider>
  )
}

export default App
