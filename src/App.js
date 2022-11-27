import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { change } from './toolkitRedux/toolkitSlice';


function App() {
  const data = useSelector(state => state.toolkit.data)
  const count = useSelector(state => state.toolkit.count)
  const dispatch = useDispatch()



  return (
    <div className="App">
      <div>
        <div className="card m-3" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Факт о Star Wars №{count}</h5>
            <p className="card-text">{data[count - 1]}</p>
            <input onChange={(e) => dispatch(change(e.target.value))} className="form-control me-2" type="number" placeholder="Search" value={count} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
