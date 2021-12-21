import './App.css'
import { Provider } from 'react-redux';
import store from './store'
//import Conatctform from'./component/contact'
import Form from './articles';
function App() {
  return (
    <div className="App">
       <Provider store={store}>
       <Form></Form>
      </Provider>
    </div>
  );
}

export default App;