export const Text = (props) => {
  const { textVariant, children, ...rest } = props;
  return <span className={`${textVariant}`} {...rest}>{children}</span>;
};
