import './PurchasesItem.scss';

function PurchasesItem({ img, title, status, time, active }) {
    let className;

    if(status === 'Cancelled') className = 'red';

    return (
        <div className={`purchases-item-container ${active}`}>
            <div className="purchases-item-info">
                <img src={img} alt="dish" className="purchases-item-img" />

                <div className="purchases-item-text">
                    <h4 className="purchases-item-title">{title}</h4>
                    <p className={`purchases-item-status ${className}`}>{status}</p>
                </div>
            </div>

            <p className="purchases-item-time">{time}</p>
        </div>
    )
}

export default PurchasesItem;