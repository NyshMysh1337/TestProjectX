import React, {useState} from 'react';

const Converter = () => {
    const [fiatAmount, setFiatAmount] = useState<number>(0);
    const [rubAmount, setRubAmount] = useState<number>(0);

    const handlerRubValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRubAmount(parseFloat(e.target.value))
        setFiatAmount(parseFloat(e.target.value) / 15)
    }

    const handlerFeeValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFiatAmount(parseFloat(e.target.value))
        setRubAmount(parseFloat(e.target.value) * 15)
    }

    return (
        <div className="converter">
            <div className="bla">
                <input type="number" placeholder="rub" value={rubAmount} onInput={handlerRubValue}/>

                <input type="number" placeholder="fiat" value={fiatAmount} onInput={handlerFeeValue}/>
            </div>
        </div>
    );
};

export default Converter;
