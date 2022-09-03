import styled from 'styled-components';

export const BaseTypography = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const SectionHeaderSmall = styled(BaseTypography)`
  font-size: 13px;
  color: #697488;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 104px;
`;

export const SectionHeaderLarge = styled(BaseTypography)`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #6f6f6f;
`;

export const Regular = styled(BaseTypography)`
  font-weight: 400;
  letter-spacing: 0.16px;
  color: #525252;
`;

export const Price = styled(BaseTypography)`
  letter-spacing: 0.16px;
  color: #1ea4ce;
`;

export const Title = styled(BaseTypography)`
  line-height: 20px;
  color: #191919;
`;
