import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import InfoGraphicImage from '@atoms/pretty/infoGraphic.svg';

const DiligenceInfoGraphic = () => {
  return h(
    ImagesContainer,
    {
      content: true,
      contentTop: true,
    },
    h('img', { src: InfoGraphicImage, alt: 'InfoGraphic' }),
  );
};

export default DiligenceInfoGraphic;

const ImagesContainer = styled(Container)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.secondary};

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    object-position: center;
  }
`;
