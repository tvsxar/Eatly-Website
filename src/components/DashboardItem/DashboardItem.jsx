import './DashboardItem.scss';

// images
import moneyImg from '../../assets/icons/money.svg';
import walletImg from '../../assets/icons/wallet.svg';
import progressPurple from '../../assets/others/divider-puple.svg';
import progressOrange from '../../assets/others/divider-orange.svg';

function DashboardItem({ title, percent, price }) {
    let className = title === 'Expense' ? 'wallet' : 'money';

    return (
        <div className="dashboard-item">
            <div className="dashboard-item-content">
                <div className="dashboard-info">
                    <div className={`dashboard-img ${className}`}>
                        <img src={className === 'wallet' ? walletImg : moneyImg} alt="moneyIcon" className={`dashboard-icon`} />
                    </div>

                    <div className="dashboard-text">
                        <h4 className="dashboard-item-title">{title}</h4>
                        <p className="dashboard-item-description">{`Increased By ${percent}%`}</p>
                    </div>
                </div>

                <p className="dashboard-price">{`$${price}`}</p>
            </div>
            <img src={className === 'wallet' ? progressPurple : progressOrange} alt="progress" className="dashboard-progress" />
        </div>
    )
}

export default DashboardItem;