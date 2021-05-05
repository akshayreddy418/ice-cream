import './App.css';
import {useEffect, useState} from 'react';
import {get} from './server';
import Header from './Header';
import BusinessList from './BusinessList';
import {testJson} from './sample';

function App() {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    get('search?location=alpharetta').then((rsp) => {
      debugger
      const {businesses} = rsp;
      setBusinessData(businesses);
    });
  }, []);
  return (
    <div className="App">
      <Header>
        
      </Header>
      <BusinessList businessData={businessData}/>
    </div>
  );
}

export default App;
