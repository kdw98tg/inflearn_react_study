import CheckBox from './components/CheckBox.js';
import Select from './components/Select';
import TextArea from './components/TextArea';
import TextInput from './components/TextInput';
import UncontrolledTextInput from './components/UncontrolledTextInput';

function App() {
  return (
    <div className="App">
      <div>
        <TextInput />
      </div>
      <div>
        <TextArea />
      </div>
      <div>
        <Select />
      </div>
      <div>
        <CheckBox />
      </div>
      <div>
        <UncontrolledTextInput />
      </div>
    </div>
  );
}

export default App;
