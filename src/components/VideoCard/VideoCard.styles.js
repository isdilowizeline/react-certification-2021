import styled from 'styled-components';

const VideoCard = styled.div`
  color:#000;
  margin 25px;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    color: red;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  @media screen and (max-width: 425px) {
    font-size: 0.0005rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const Description = styled.div`
  font-size: 0.5rem;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const Small = styled.small`
  font-size: 0.05rem;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Styled = {VideoCard, Title, Anchor, Image, Small, Description};
export default Styled;
