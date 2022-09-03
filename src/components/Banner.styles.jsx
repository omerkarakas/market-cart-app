import styled from 'styled-components';

export const BannerContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: var(--primary-color);

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  h2 {
    margin-top: 10px 0;
  }

  img {
    padding: 5px 5px;
  }
`;
