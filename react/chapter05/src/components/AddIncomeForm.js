//TODO 수입내역을 제출하는 폼을 구현하세요

import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

function AddIncomeForm() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const { dispatch } = useContext(AppContext);
    const handleSubmit = (e) => {
        e.preventDefault();

        const income = { id: crypto.randomUUID(), name, amount };

        dispatch({
            type: "ADD_INCOME",
            payload: income,
        });
        setName("");
        setAmount(0);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label htmlFor=''>수입</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor=''>금액</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        id='amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.valueAsNumber)}
                    />
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <button type='submit' className='btn btn-primary'>
                            추가
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddIncomeForm;
