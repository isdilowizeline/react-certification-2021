import styled from 'styled-components';

const VideoCard = styled.div`
font-size:1rem;
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
`;
const Description = styled.div`
  font-size: 10px;
`;
const Small = styled.small`
  font-size: 10px;
`;

const Styled = {VideoCard, Title, Anchor, Image, Small, Description};
export default Styled;
