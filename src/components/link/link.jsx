//make link component
import Link from '@mui/material/Link';
const Link = ({ children, isExternal = true, ...props }) => {
    return (
        <Link
        className={style.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
        >
        {children}
        </Link>
    );
    };
    //export link component
    export default Link;