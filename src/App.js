import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='bg-orange-100 w-full h-full flex flex-col items-center '>
      <h1 className='bg-white flex rounded-md text-center text-3xl  mt-4 mx-16 h-12 justify-center items-center w-9/12'>GIF GENERATOR</h1>
      <div className='flex flex-col'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
