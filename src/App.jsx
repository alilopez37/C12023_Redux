import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Root from './pages/Root'
import Event from './pages/Event'
import Store from './redux/store/Store'

function App() {

  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route index element={<Root/>}/>
          <Route path='/events' element={<Event />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
