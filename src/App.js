import ParentComp from "./ContextApi/ParentComponent";
import Home from "./customHooks/HomePage";
import Counter from "./useReducer";

function App() {
  return (
   <>
    <Counter/>
    <Home/>
    <ParentComp/>
   </>
  );
}

export default App;
