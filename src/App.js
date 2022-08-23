import React, { Suspense } from "react";

const Glossary = React.lazy(() => import('./Glossary'))

const items = [
  {
    id: 1,
    term: 'Sugar',
    description: 'White smaller bit sugar'
  },
  {
    id: 2,
    term: 'Vegetable Oil',
    description: 'Cholesterol free soybean oil'
  }
]

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Glossary items={items} />
    </Suspense>
  );
}

export default App;
