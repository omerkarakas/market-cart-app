import Typography, {
  TYPOGRAPHY_TYPE_CLASSES,
} from '../typography/typography.component';
import {
  BaseContainer,
  VerticalLimitedWidth,
  Vertical,
  Horizontal,
  Central,
} from './container.styles';

export const CONTAINER_TYPE_CLASSES = {
  base: 'base',
  vertical: 'vertical',
  verticalLimitedWidth: 'verticalLimitedWidth',
  horizontal: 'horizontal',
  central: 'central',
};

const getContainer = (containerType = CONTAINER_TYPE_CLASSES.base) =>
  ({
    [CONTAINER_TYPE_CLASSES.base]: BaseContainer,
    [CONTAINER_TYPE_CLASSES.vertical]: Vertical,
    [CONTAINER_TYPE_CLASSES.verticalLimitedWidth]: VerticalLimitedWidth,
    [CONTAINER_TYPE_CLASSES.horizontal]: Horizontal,
    [CONTAINER_TYPE_CLASSES.central]: Central,
  }[containerType]);

const addHeader = (heading, headerType) => {
  if (!heading) return null;

  return <Typography typographyType={headerType}>{heading}</Typography>;
};
const Container = ({
  containerType = CONTAINER_TYPE_CLASSES.base,
  headerType = TYPOGRAPHY_TYPE_CLASSES.regular,
  heading,
  otherProps,
  children,
}) => {
  const CustomContainer = getContainer(containerType);
  return (
    <>
      {addHeader(heading, headerType)}
      <CustomContainer {...otherProps}>{children}</CustomContainer>
    </>
  );
  // } else return <CustomContainer {...otherProps}> {children} </CustomContainer>;
};

export default Container;
