import CircularProgress from '@mui/material/CircularProgress';
import "./style.css";
const Button = ({
  leftIcon,
  children,
  variant = "default",
  isLoading,
  ...props
}) => {
  return (
    <button className='btn' {...props}>
      {isLoading ? (
        <>
          <CircularProgress  />
        </>
      ) : (
        <>
          {leftIcon} {children}
        </>
      )}
    </button>
  );
};

export default Button;
