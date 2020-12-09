import { Home } from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initUsers } from './redux/actions/User';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUsers());
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
