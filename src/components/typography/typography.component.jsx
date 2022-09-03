import {
  SectionHeaderSmall,
  BaseTypography,
  Price,
  Regular,
  SectionHeaderLarge,
  Title,
} from './typography.styles';

export const TYPOGRAPHY_TYPE_CLASSES = {
  sectionHeaderSmall: 'smallSectionHeader',
  sectionHeaderLarge: 'sectionHeaderLarge',
  regular: 'regular',
  price: 'price',
  title: 'title',
};

const getTypography = (typographyType = TYPOGRAPHY_TYPE_CLASSES.regular) =>
  ({
    [TYPOGRAPHY_TYPE_CLASSES.sectionHeaderSmall]: SectionHeaderSmall,
    [TYPOGRAPHY_TYPE_CLASSES.sectionHeaderLarge]: SectionHeaderLarge,
    [TYPOGRAPHY_TYPE_CLASSES.regular]: Regular,
    [TYPOGRAPHY_TYPE_CLASSES.price]: Price,
    [TYPOGRAPHY_TYPE_CLASSES.title]: Title,
  }[typographyType]);

const Typography = ({ typographyType, otherProps, children }) => {
  const CustomTypography = getTypography(typographyType);
  return <CustomTypography {...otherProps}> {children} </CustomTypography>;
};

export default Typography;
