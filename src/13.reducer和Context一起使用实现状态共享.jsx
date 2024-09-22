import ListHead from './components/ListHead.jsx';
import ListContent from './components/ListContent.jsx';
import ListProvider from './provider/ListProvider.jsx';
function App() {
  return (
    <ListProvider>
      <ListHead></ListHead>
      <ListContent></ListContent>
    </ListProvider>
  );
}
export default App;
