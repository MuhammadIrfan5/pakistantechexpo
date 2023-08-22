import Image from 'next/image'


export const CustomImage = (props) => {
  const { imageVariant, href, Children, width, height, ...rest } = props;
  return (
    <Image
      className={imageVariant}
      src={href}
      width={width}
      height={height}
      alt="Unavailable"
      {...rest}
    />
  )
}