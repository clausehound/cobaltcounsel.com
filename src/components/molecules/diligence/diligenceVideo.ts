import { createElement as h, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import './slideshow.css';

const VideoSection = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (slidesRef.current.length > 0) {
      slidesRef.current.forEach((slide, i) => {
        slide.style.display = i + 1 === slideIndex ? 'block' : 'none';
      });
    }
    if (dotsRef.current.length > 0) {
      dotsRef.current.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i + 1 === slideIndex) {
          dot.className += ' active';
        }
      });
    }
    slidesRef.current[slideIndex - 1]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [slideIndex]);

  const showSlide = (n: number) => {
    let newIndex = n;
    if (newIndex > slidesRef.current.length) newIndex = 1;
    if (newIndex < 1) newIndex = slidesRef.current.length;
    setSlideIndex(newIndex);
  };

  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };

  return h(
    VideoContainer,
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
          Array.from({ length: 10 }).map((_, i) =>
            h(
              'div',
              {
                key: i,
                ref: (el: HTMLDivElement) => (slidesRef.current[i] = el!),
                className: i === 0 ? 'mySlides show fade' : 'mySlides fade',
              },
              h('video', {
                src: '../ClausehoundAiVideo/' + i + '.mp4',
                type: 'video/mp4',
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                className: 'slideVideo',
              }),
            ),
          ),
          h(
            'div',
            { className: 'prevNextContainer' },
            h('a', { className: 'prev', onClick: () => showSlide(slideIndex - 1) }, '❮'),
            h('a', { className: 'next', onClick: () => showSlide(slideIndex + 1) }, '❯'),
          ),
        ),
        h(
          'div',
          { className: 'navDots' },
          Array.from({ length: 10 }).map((_, i) =>
            h('span', {
              key: i,
              ref: (el: HTMLSpanElement) => (dotsRef.current[i] = el!),
              className: i === 0 ? 'dot active' : 'dot',
              onClick: () => showSlide(i + 1),
            }),
          ),
        ),
        h(
          FeaturesContainer,
          null,
          h(Button, { onClick: () => toggleAccordian() }, 'FEATURES'),
          h(
            FeatureLinksContainer,
            { isOpen },
            h(
              Button,
              { onClick: () => showSlide(2) },
              'SPEED - Instantly draw knowledge from huge batches of documents with AI queries',
            ),
            h(
              Button,
              { onClick: () => showSlide(3) },
              'CONFIDENCE - Immediately verify the accuracy of your queries with fully mapped document sources',
            ),
            h(
              Button,
              { onClick: () => showSlide(4) },
              'STRETCH - Stretch like rubber with expanded context and immediate double checking',
            ),
            h(
              Button,
              { onClick: () => showSlide(5) },
              'FOCUS - Instantly chunk your documents by opening a portal to what’s important',
            ),
            h(
              Button,
              { onClick: () => showSlide(6) },
              'PERSPECTIVE - Filter documents down to specific clauses or categories of language, allowing you to see your documents multi-dimensionally',
            ),
            h(
              Button,
              { onClick: () => showSlide(7) },
              'ARMOR - Audit your selections to confirm your data has been comprehensively sourced and nothing is missing',
            ),
            h(
              Button,
              { onClick: () => showSlide(8) },
              'BLUR - Redact sections of documents to protect the seller until the timing is right',
            ),
            h(
              Button,
              { onClick: () => showSlide(9) },
              'DETECT - Compare chunks of similar agreements across your entire library, and catch the little variances in the wording that make a big difference',
            ),
            h(
              Button,
              { onClick: () => showSlide(10) },
              'UNIFY - Save your queries for future analysis, quickly create filtered or chunked datasets, and send them to your team with a single link',
            ),
          ),
        ),
      ),
    ),
  );
};

export default VideoSection;

const VideoContainer = styled(Container)`
  padding-top: 5rem;
  border-top: 1px solid black;
`;

const FeatureLinksContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  max-width: 35rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.button.radius};
  font-weight: 500;
  padding: 0.75rem 2rem;
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  transition: ${(props) => props.theme.animation.transition};
  border: none;

  &:hover {
    filter: brightness(105%);
    box-shadow: 0px 6px 24px rgba(242, 187, 99, 0.4);
    cursor: pointer;
  }
`;
