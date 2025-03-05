import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import { media } from '@utils/media';

const VideoSection = () => {
  let slideIndex = 1;

  // Next/previous controls
  function plusSlides(n: number) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n: number) {
    showSlides((slideIndex = n));
  }

  function showSlides(n: number) {
    let i;
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    slides[slideIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function toggleAccordian() {
    const accordian = document.getElementById('accordianLinksContainer');
    if (!accordian) return;
    if (accordian.className.indexOf('show') == -1) {
      accordian.className += ' show';
    } else {
      accordian.className = accordian.className.replace(' show', '');
    }
  }

  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(
      'section',
      { className: 'subSectionBG', id: 'frameVideo' },
      h(
        'div',
        { className: 'slideshowContainer' },
        h(
          'div',
          { className: 'slidesContainer' },
          h(
            'div',
            { className: 'mySlides show fade' },
            h(
              'video',
              { className: 'slideVideo', autoPlay: '', muted: '', playsInline: '' },
              h('source', { src: './ClausehoundAiVideo/1.mp4', type: 'video/mp4' }),
              'Your browser does not support the video tag.',
            ),
          ),
        ),
        h(
          'div',
          { className: 'navDots' },
          h('span', { className: 'dot active', onClick: currentSlide(1) }),
          h('span', { className: 'dot ', onClick: currentSlide(2) }),
          h('span', { className: 'dot ', onClick: currentSlide(3) }),
        ),
        h(
          'div',
          { className: 'slideshowLinks flexContainer' },
          h('button', { className: 'featuresButton', onClick: toggleAccordian() }, 'FEATURES'),
          h(
            'div',
            { id: 'accordianLinksContainer', className: 'hide hide' },
            h('button', { className: 'accordianLink', onClick: currentSlide(1) }, 'Feature 1'),
            h('button', { className: 'accordianLink', onClick: currentSlide(2) }, 'Feature 2'),
            h('button', { className: 'accordianLink', onClick: currentSlide(3) }, 'Feature 3'),
          ),
        ),
      ),
    ),
  );
};

export default VideoSection;

const ImageIcon = styled.div`
  width: 10rem;
  img {
    width: 60%;
  }
`;

const Intro = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 0;
  }
  @media ${media.md} {
    h2 {
      margin-bottom: 5rem;
    }
  }
`;

const Conclusion = styled.div`
  text-align: center;
  h2 {
    margin-top: 2rem;
    line-height: 1.5;
  }
`;

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridTriple);

  @media ${media.lg} {
    padding: 1rem 0;
  }
`;

const SetupSecondRow = styled.div`
  display: grid;
  grid-template-columns: var(--gridSplit);
  width: 70%;
  column-gap: 5%;
  margin: 0 auto;

  @media ${media.lg} {
    padding: 1rem 0;
  }
`;

const Seperator = styled.div`
  display: none;
  position: absolute;
  right: -22%;
  top: 5%;
  width: 180px;

  svg {
    width: 100%;
    height: auto;
  }

  @media ${media.lg} {
    display: block;
  }
`;

const Step = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  &:nth-of-type(2) {
    ${Seperator} {
      top: 25%;
    }
  }
  @media ${media.lg} {
    padding: 1rem;
  }

  @media ${media.md} {
    padding: 1rem;
  }
`;
const Work = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.heading};
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
  position: relative;

  @media ${media.md} {
    height: 32px;
    // margin-bottom: 3rem;
  }

  &:after {
    display: none;
    content: '';
    position: absolute;
    width: calc(100% + 0.8rem);
    left: -0.4rem;
    bottom: -0.2rem;
    height: calc(50% + 0.2rem);
    z-index: -1;
    opacity: 0.6;
    background: ${(props) => props.theme.colors.primary};
    @media ${media.sm} {
      display: block;
    }
    @media ${media.md} {
      margin-bottom: 5rem;
    }
  }
`;
