import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import CardList from "./components/CardList";
import plus from "./images/plus.png";
import './style/App.css'
import './style/media-style.css'
import {Card} from "./model/Card";
import AddCard from "./components/AddCard";
import Converter from "./components/Converter";

const App: FC = () => {

  const [cardList, setCardList] = useState<Card[]>([]);

  useEffect(() => {
    axios.get<Card[]>('http://127.0.0.1:8000/api/cards')
        .then(res => {
          setCardList(res.data)
        })
        .catch(e => console.log(e))
  }, []);

    return (
        <div className="layout">
          <div className="content">
            <div className="content-header">
                    <span>
                        Пополнить банковской картой
                    </span>
            </div>

            <span>Укажите сумму</span>
            <Converter />


            <div className="card-list">
              <CardList cardList={cardList}/>

              <div className="card-plus">
                <div className="ttt">
                  <img src={plus} alt=""/>
                  <span>Новая карта</span>
                </div>
              </div>
            </div>

            <AddCard setCardList={setCardList}/>
          </div>
        </div>
    );
};

export default App;
