import './Button.scss';

function Button({ children }) {
    let className;

    switch(children) {
        case 'Go Pro':
        className = 'transparent';
        break;

        default:
        className = '';
    }

    return (
        <a href="#!" className={`button ${className}`}>{children}</a>
    )
}

export default Button;