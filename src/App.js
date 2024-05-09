import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Middle';
import Accordition from './components/Accordition';

function App() {
  return (
   <div className='px-5 lg:px-28'>
    <Header/>
    <Breadcrumb/>
    <Accordition/>
   </div>
  );
}

export default App;
