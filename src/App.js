import logo from './logo.svg';
import './App.css';
import TestState from './Component/TestState'
import Effect from './Component/Effect'
import AxiosReq from './Component/AxiosReq'
import AxiosAdd from './Component/AxiosAdd'



function App() {

  return (
    <div>
      {/* <AxiosAdd/> */}
      <AxiosReq/>
      <TestState/>
      <Effect/>
    </div>
  );
}

export default App;
