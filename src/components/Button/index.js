import './style.css';

const Button = ({leftIcon, children, ...props}) => {
  return (
    <button className='btn' {...props}>
      {leftIcon} {children}
    </button>
  );
};

export default Button;
