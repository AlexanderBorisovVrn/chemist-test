import './App.css';
import Home from './pages/Home';
import data1 from './data.json';
import data2 from './data1.json';
import { useRef, useState } from 'react';

const getRandomItems = (list) => {
  const random = Math.floor(Math.random() * (list.length + 1));
  return list[random]
}

function App() {
  const [currentTab, setCurrentTab] = useState(2);
  const ref = useRef(2);
  const saveCurrentTab = (tab)=>{
    ref.current=tab;
    setCurrentTab(tab)
  }
  const randomData = [];
  const data = ref.current === 1 ? data1 : data2;
  for (let i = 0; i < 5; i++) {
    randomData.push(getRandomItems(data))
  }

  const tabClass = 'mx-2 p-3 bg-slate-300 rounded text-lg hover:bg-slate-400 cursor-pointer hover:text-white'
  const hover = ' bg-slate-400'
  return (
    <div className="w-screen flex justify-center flex-col">
      <ul className='flex flex-row justify-center bg-red-300 p-2'>
        <li className={tabClass} onClick={() => saveCurrentTab(1)}>Test 1</li>
        <li className={tabClass}  onClick={() => saveCurrentTab(2)}>Test 2</li>
      </ul>
      <div className='flex py-3 justify-center text-xl font-bold'>Test {currentTab}</div>
      <Home data={randomData} />
    </div>
  );
}

export default App;
