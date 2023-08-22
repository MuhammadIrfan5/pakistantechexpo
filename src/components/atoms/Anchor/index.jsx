export const Anchor = (props) => {
  const { anchorVariant, href, children, ...rest } = props;
  return (
    <a className={`${anchorVariant}`} href={href} {...rest}>
      {children}
    </a>
  );
};
