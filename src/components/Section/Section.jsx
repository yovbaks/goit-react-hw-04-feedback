import propTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => (
  <div>
    {title && <Title>{title}</Title>}
    {children}
  </div>
);

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
