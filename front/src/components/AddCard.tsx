import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import card from "../images/card.png";
import {Card} from "../model/Card";
import axios from "axios";

interface AddCardProps {
    setCardList: Dispatch<SetStateAction<Card[]>>
}

const AddCard: FC<AddCardProps> = ({setCardList}) => {
    const [numberCard, setNumberCard] = useState<string>('')
    const [cvvCard, setCvvCard] = useState<string>('')
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const [numberCardError, setNumberCardError] = useState(false)
    const [cvvCardError, setCvvCardError] = useState(false)
    const [dataCardError, setDataCardError] = useState(false)

    const handleMonthChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setMonth(event.target.value);
    };

    const handleYearChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setYear(event.target.value);
    };

    const handleSubmit = () => {
        if (numberCard.length !== 16) {
            setNumberCardError(true);
            return;
        }

        if (cvvCard.length !== 3) {
            setCvvCardError(true);
            return;
        }

        if (month.length !== 2 || year.length !== 2) {
            setDataCardError(true);
            return
        }

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;

        let yearLast: any = String(currentYear).slice(-2)
        yearLast = parseInt(yearLast)

        const enteredYear = parseInt(year);
        const enteredMonth = parseInt(month);

        if (enteredYear > yearLast || (enteredYear === yearLast && enteredMonth >= currentMonth)) {

            const expiry_date = enteredMonth.toString() + enteredYear.toString()
            const data: Card = {
                card_number: numberCard,
                expiry_date: expiry_date,
                cvv: cvvCard
            }

            axios.post('http://127.0.0.1:8000/api/cards', data)
                .then(res => setCardList(prev => [...prev, res.data]))
                .catch(e => console.log(e))
        } else {
            setDataCardError(true)
        }
    };

    return (
            <div>
                <div className="card">
                    <div>
                        <span>Номер карты</span><br/>

                        <input value={numberCard}
                               onInput={(e) => setNumberCard((e.target as HTMLInputElement).value)}
                               type="text"
                               className={`card-number ${dataCardError ? 'error' : ''}`}
                               placeholder="Номер карты"/><br/>

                        <span>Действует до</span><br/>
                        <input type="text"
                               className={`card-data ${dataCardError ? 'error' : ''}`}
                               placeholder="мм"
                               value={month}
                               onInput={handleMonthChange}/>
                        /
                        <input type="text"
                               className={`card-data ${dataCardError ? 'error' : ''}`}
                               placeholder="гг"
                               value={year}
                               onInput={handleYearChange}/>
                    </div>
                </div>
                <div className="card-back">
                    <img src={card}/>
                    <div className="card-cvv">
                        <div className="test">
                            <span>CVV/CVC</span>
                            <input type="text"
                                   placeholder="000"
                                   className={`${cvvCardError ? 'error' : ''}`}
                                   onInput={(e) => setCvvCard((e.target as HTMLInputElement).value)} value={cvvCard}/>
                        </div>
                        <p>три цифры<br/> с обратной стороны<br/> карты</p>
                    </div>
                </div>

                <div className="agreement">
                    <input type="checkbox" id="myCheckbox" className="myCheckbox" />
                    <label htmlFor="myCheckbox" className="myCheckboxLabel">
                        Запомнить эту карту. Это безопасно.
                        Сохраняя карту, вы соглашаетесь с условиями привязки карты.
                    </label>
                </div>

                <button onClick={handleSubmit} className="pay">Оплатить</button>
            </div>
    );
};

export default AddCard;
