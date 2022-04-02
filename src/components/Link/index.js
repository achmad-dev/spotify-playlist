const Link = ({ children, isExternal = true, ...props}) => {
  return (
     <a
       className="link"
       target={isExternal ? "_blank" : undefined}
       rel={isExternal ? "nonopener" : undefined}
       {...props}
      >
        {children}
      </a>
  );
};

export default Link;
