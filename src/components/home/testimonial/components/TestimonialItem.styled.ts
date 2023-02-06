import styled from 'styled-components';

export const wrapper = styled.div`
  max-width: 400px;

  @media (max-width: 1400px) {
    margin: 0 20px 40px;
  }

  @media (max-width: 992px) {
    max-width: initial;
  }
`;

export const clientImage = styled.div`
  cursor: pointer;
`;

export const clientName = styled.p`
  cursor: pointer;
`;
