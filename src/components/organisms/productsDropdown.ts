import { createElement as h } from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from '@atoms/link';

const ProductsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return h(
    DropdownContainer,
    { ref: dropdownRef },
    h(DropdownButton, { onClick: toggleDropdown }, 'Products'),
    h(
      DropdownContent,
      { isOpen: isOpen },
      h('a', { href: '/dealprep', target: '_blank' }, 'Dealprep'),
      h('a', { href: '/policysaurus' }, 'Policysaurus'),
    ),
  );
};

export default ProductsDropdown;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 1.5rem;
`;

const DropdownButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  padding: 0 0 5px 0;

  &::after {
    content: '';
    border-bottom: solid 2px ${(props) => props.theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    &::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
