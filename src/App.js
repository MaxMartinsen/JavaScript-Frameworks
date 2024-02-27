import './App.css';
import { create } from 'zustand';

const useProductsStore = create((set) => ({
  count: 0,
  addOne: () => set((state) => ({ count: state.count + 1 })),
  clearCount: () => set({ count: 0 }),
}));

function App() {
  const count = useProductsStore((state) => state.count);
  const addOne = useProductsStore((state) => state.addOne);
  const clearCount = useProductsStore((state) => state.clearCount);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>Count: {count}</div>
          <button onClick={addOne}>Click me to add</button>
          <button onClick={clearCount}>Reset Count</button>
        </div>
      </header>
    </div>
  );
}

export default App;

