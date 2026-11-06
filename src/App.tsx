import { useState } from 'react'
import './App.css'
import Counter from "./assets/components/counter";
 
function App() {
  return (
    <>
      <Counter initialValue={0} />
    </>
  );
}
 
export default App;
 
