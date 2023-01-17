import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InlineCSS from './components/InlineCSS';
import './components/appStyle.css'
import Styles from './components/appStyle.module.css'
import Form from './components/Form';
import LifeCycyleA from './components/LifeCycyleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComponents from './components/PureComponents';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <Clock />
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComponents /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycyleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={Styles.success}>success</h1> */}
      {/* <InlineCSS /> */}
      {/* <StyleSheet primary ={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick />  */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="shanu" heroName = "SM" >
        <p>this is Super man</p>
      </Greet> */}
      {/* <Greet name="shau" heroName="hehe">
        <p>this is Iron man<button>action</button></p>
      </Greet> */}
      {/* <Greet name = "gamage"/> */}
      {/* <Welcome name="shanu" heroName = "SM" /> */}
      {/* <Welcome />
      <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
