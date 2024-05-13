import "../styles/ShoppingForm.css";
// 장 볼 아이템과 개수를 입력하는 form을 만듭니다.

const ShoppingForm = ({ input, handleChange, handleSubmit }) => {
    return (
        <div >
            <form className='form'>
                <div className='select'>
                    <div className='wrapper'>
                        <input type='checkbox' id='person' className='categories' />
                        <label htmlFor='person' className='switch_label'>
                            {/* <span className='onf_btn'></span> */}
                        </label>
                    </div>
                    <div className='wrapper'>
                        <input type='checkbox' id='study' className='categories' />
                        <label htmlFor='study' className='switch_label'>
                            {/* <span className='onf_btn'></span> */}
                        </label>
                    </div>
                    <div className='wrapper'>
                        <input type='checkbox' id='work' className='categories' />
                        <label htmlFor='work' className='switch_label'>
                            {/* <span className='onf_btn'></span> */}
                        </label>
                    </div>
                </div>
                <input type='text' value={input} onChange={handleChange} />
                <button type='submit' onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ShoppingForm;
