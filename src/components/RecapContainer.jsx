const RecapContainer = ({ tip, bill, nbPeople, setBill, setTip, setNbPeople, setTipAmount, setTotalAmount, tipAmount, totalAmount }) => {

    const handleReset = () => {
        setBill(0);
        setTip(0);
        setNbPeople(0);
        setTipAmount(0);
        setTotalAmount(0);
    };

    return (
        <div className="recap-container">

            <div className="recap-top">
                <div className="tip-container">
                    <h2>Tip Amount</h2>
                    <p>/ person</p>
                </div>
                <div className="tip-amount">
                    {tipAmount > 0 ? <p>${tipAmount}</p> : <p>$0.00</p>}
                </div>
            </div>

            <div className="recap-bottom">
                <div className="total-container">
                    <h2>Total</h2>
                    <p>/ person</p>
                </div>
                <div className="total-amount">
                    {totalAmount > 0 ? <p>${totalAmount}</p> : <p>$0.00</p>}
                </div>
            </div>

            {tipAmount > 0 && totalAmount > 0 && bill != null && tip != null && nbPeople != null ? (
                // Si champ input non vide
                <div className="btn-reset-form">
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
                // sinon, si champ input vide
            ) : (
                <div className="btn-reset-form empty">
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
                )
            }
        </div>
    )
}

export default RecapContainer;