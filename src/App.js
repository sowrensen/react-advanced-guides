import React, { Suspense } from "react";

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
    <Suspense fallback={<div>Loading...</div>}>
      <Glossary items={items} />
      <Accountant items={items} />
    </Suspense>
  );
}

export default App;
