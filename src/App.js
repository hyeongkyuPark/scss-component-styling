import Button from './components/Button'
import './app.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size='large'>BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size='small'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color='gray' size='large'>BUTTON</Button>
        <Button color='gray'>BUTTON</Button>
        <Button color='gray' size='small'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color='pink' size='large'>BUTTON</Button>
        <Button color='pink'>BUTTON</Button>
        <Button color='pink' size='small'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' outline>BUTTON</Button>
        <Button color='gray' outline>BUTTON</Button>
        <Button color='pink' outline size='small'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button onClick={() => console.log('click~!!')} size='large' fullWidth>CLICK</Button>
        <Button onMouseMove={() => console.log('mouse-move~!!')} size='large' color='gray' fullWidth>MOUSE_MOVE</Button>
        <Button onClick={() => console.log('click~!!')} size='large' color='pink' fullWidth>CLICK</Button>
      </div>
    </div>
  );
}

export default App;
