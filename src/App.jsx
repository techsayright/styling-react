import { useState } from 'react';
import './App.css';
import DataShower from './components/DataShower';
import FormDesign from './components/FormDesign';

function App() {

  const data=[
    {
      id: 1,
      activity: "Web Developer",
    },
    {
      id: 2,
      activity: "React Developer",
    },
    {
      id: 3,
      activity: "Mern Developer",
    },
  ]

  const [addData, setAddData]=useState(data);

  const onSubmitData = (value)=>{
    console.log(value);

    // if value dosnt exist
    if(value.trim().length===0){
      return
    }
    

    const dummyObj={
      id: addData.length+1,
      activity: value
    }
    setAddData((preVal)=>{
      return [dummyObj, ...preVal]
    })

  }

  const onClickHandler=(e)=>{
    console.log(typeof +e.target.id);

    let newData= addData.filter((v)=>{
        return v.id !== +e.target.id
      })

    setAddData([...newData])
    console.log(newData);
  }

  return (
    <div className="App">
      <FormDesign addValue={onSubmitData} />
      {
        addData.map((item)=>{

        return <DataShower data={item} key={item.id} id={item.id} onClicks={onClickHandler}/>
        })
      }
    </div>
  );
}

export default App;
