import './Discount.scss';

function Discount() {
    return (
        <div className="discount">
            <div className="discount-title">GET 50%</div>

            <form>
                <input type="text" placeholder='Email Address' />
                <button type='submit'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default Discount;