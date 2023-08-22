export const Division = (props) => {
  const { divVariant, click, children, refs, ...rest } = props;
  return (
    <div className={`${divVariant}`} onClick={click} ref={refs} {...rest}>
      {children}
    </div>
  );
};
