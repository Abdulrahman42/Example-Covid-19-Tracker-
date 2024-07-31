import React, {useEffect, useState} from "react";

import { Cards, CountryPicker, Chart } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";
import { Datas, Data} from './DataType.type';

const App = () => {
  const initialState = {
    active: 0,
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    last_update: ""
  }
  const [data, setData] = useState<Data>(initialState);

  const fetchedData = async () => {
    const res = await fetchData()
    setData(res)
  } 

  const handleCountry = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log(event);
  }

  useEffect(() => {
    fetchedData()
  },[])

  return (
    <div id="root" className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleChange={handleCountry}/>
      <Chart data={data}/>
    </div>  
  );
}

export default App;
