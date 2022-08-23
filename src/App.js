import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Glossary = React.lazy(() => import('./Glossary'))
const Accountant = React.lazy(() => import('./Accountant'))

const items = [
  {
    id: 1,
    term: 'Sugar',
    description: 'White smaller bit sugar',
    price: 2.35
  },
  {
    id: 2,
    term: 'Vegetable Oil',
    description: 'Cholesterol free soybean oil',
    price: 3.50
  }
]

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Glossary items={items} />}></Route>
          <Route path="/accounting" element={<Accountant items={items} />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
