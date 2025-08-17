import { createContext, useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button.jsx';

const expressionContext = createContext();

function App() {
  const [expression, setExpression] = useState("");

  useEffect(() => {
    console.log("Updated expression:", expression);
  }, [expression]);

  const buttons = [
    'DEL', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '=',
    '1', '2', '3', '0'
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-700 via-gray-900 to-slate-800">
      <div className="w-[360px] bg-zinc-900 rounded-3xl shadow-2xl p-6 border border-zinc-800">

        <div className="bg-black text-white text-4xl font-mono rounded-xl p-4 h-24 mb-6 flex items-end justify-end overflow-x-auto shadow-inner">
          <span className="whitespace-nowrap">{expression || '0'}</span>
        </div>


        <expressionContext.Provider value={{ expression, setExpression }}>
          <div className="grid grid-cols-4 gap-4">
            {buttons.map((btn, idx) => (
              <Button key={idx} name={btn} />
            ))}
          </div>
        </expressionContext.Provider>

      </div>
    </div>
  );
}

export default App;
export { expressionContext };
