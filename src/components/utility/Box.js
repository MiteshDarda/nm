function Box(props) {
  const classList = `box ` + props.className;
  return (
    <div className={classList} style={props.style}>
      {props.children}
    </div>
  );
}

export default Box;
