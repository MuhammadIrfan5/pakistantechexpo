import { Division, Text } from "../../atoms";

export const MultiHeadingComponent = props => {
  const { headingText, headingVariant, desText, desVariant } = props;
  return (
    <Division divVariant="flex flex-col justify-center mx-5 sm:mx-10 md:mx-16 lg:mx-20 3xl:mx-39 pt-6-5 pb-8 sm:pb-12 gap-2">
      {headingText && <Text textVariant={headingVariant}>
        {headingText}
      </Text>}

      {desText && <Text textVariant={desVariant}>
        {desText}
      </Text>}
    </Division>
  );
};
