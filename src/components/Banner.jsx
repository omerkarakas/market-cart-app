import { BannerContainer } from './Banner.styles';
import Button, { BUTTON_TYPE_CLASSES } from './button/button.component';

const Banner = () => {
  return (
    <BannerContainer>
      <img src="Logo.png" alt="Logo" />
    </BannerContainer>
  );
};

export default Banner;
