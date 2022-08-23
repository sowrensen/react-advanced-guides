import Glossary from "./Glossary";

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
    <Glossary items={items} />
  );
}

export default App;
