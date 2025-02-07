import './Button.scss';

function Button({ children }) {
    let className;

    if(children === 'Go Pro') {
        className = 'transparent';
    } else if(children.includes('Download')) {
        className = 'arrow';
    }

    return (
        <a href="#!" className={`button ${className}`}>{children}</a>
    )
}

export default Button;