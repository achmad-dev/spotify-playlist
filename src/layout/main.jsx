//make main layout component
const Main = ({ children, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "1em",
        paddingTop: "65px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

//export main layout component
export default Main;