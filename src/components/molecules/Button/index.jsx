// import styles from '../../../../styles/Components.module.css'

export const Button = (props) => {
  const { buttonVariant, onClick, children, ...rest } = props;
  return (
    <div className={`${buttonVariant}`} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export const CircleButton = (props) => {
  const { buttonVariant, click, children, ...rest } = props;
  return (
    <div className={`${buttonVariant}`} onClick={click} {...rest}>
      {children}
    </div>
  );
}

