import './App.css';
import ToggleComponent from './task1/ToggleComponents';
import CounterComponent from './task2/CounterComponent';
import InputComponent from './task3/InputComponent';
import LocalStorageComponent from './task4/LocalStorageComponent';
import FetchComponent from './task5/FetchComponent';
import DocumentTitleComponent from './task6/DocumentTitleComponent';
import WindowResizeComponent from './task7/WindowResizeComponent';
import DebouncedSearchComponent from './task8/DebouncedSearchComponent';
// import InfiniteScrollComponent from './task9/InfiniteScrollComponent';
import GeolocationComponent from './task10/GeolocationComponent';
function App() {
  return (
    <div className="App">
      <ToggleComponent/>
      <CounterComponent/>
      <InputComponent/>
      <LocalStorageComponent/>
      <FetchComponent/>
      <DocumentTitleComponent/>
      <WindowResizeComponent/>
      <DebouncedSearchComponent/>
      {/* <InfiniteScrollComponent/> */}
      <GeolocationComponent/>
    </div>
  );
}

export default App;
