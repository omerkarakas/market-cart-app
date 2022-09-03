import styled from 'styled-components';

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;

export const Vertical = styled(BaseContainer)`
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: green; */
  align-self: flex-start;
  margin-top: 40px;
`;

export const VerticalLimitedWidth = styled(Vertical)`
  flex-direction: column;
  align-items: flex-start;
  width: 296px;
  min-width: 296px;
`;

export const Horizontal = styled(BaseContainer)`
  /* background: gray; */
  flex-direction: row;
`;

export const Central = styled(BaseContainer)`
  /* background: gray; */
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
