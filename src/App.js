import React from 'react';
import {useState} from "react";
import ItemsDisplay from "./ItemsDisplay";
import {datas} from "./datas";
import './App.css';



function App() {
  const [data] = useState({items:[]});
  const [value, setValue] = useState(0);
  const { info } = datas[value];
  const [click, setClick] = useState(false);
  const [edit, setEdit] = useState(info.balance);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  return (
      <main>
      <div className="btn-container">
        {datas.map((item, index) => {
          const { id, button } = item;
          // const id=item.id
          return (

            <button
              className={`btn ${index === value && 'active-btn'}`}
              key={id}
              onClick={() => setValue(index)}
            >
              {button}
            </button>
          );
        })}
      </div>
      <article className="info">
        <p>Account Name: {info.account_holder}</p>
        <p>Account No: {info.account_no}</p>
        <p>
          Balance:
          <div
            className="edit"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click ? (
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    name="edit"
                    id="edit"
                    value={edit}
                    autoFocus
                    onChange={(e) => {
                      setEdit(e.target.value);
                    }}
                  />
                  <button onClick={handleSubmit}>Save</button>
                </form>
              </div>
            ) : (
              edit
            )}
          </div>
        </p>
      </article>
      <div className = "space"></div>
        <div className="row mt-3">
          <ItemsDisplay 
          item = {data["items"]} />
        </div>
        </main>
  );
}

export default App;
