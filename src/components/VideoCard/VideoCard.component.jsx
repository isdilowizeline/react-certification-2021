import React from 'react';
import {Card, CardBody, CardImg} from 'reactstrap';
import Styled from './VideoCard.styles';

const VideoCard = ({videoUrl, description, title, publishDate, thumbnail}) => {
  const publishDateParse = new Date(publishDate);
  return (
          <Styled.Anchor target="_blank" href={videoUrl}>
            <Card>
              <CardImg top width="100%" src={thumbnail} alt={title}/>
              <CardBody>
                <Styled.Title>{title}</Styled.Title>
                  <Styled.Small>
                    Publish Date: {publishDateParse.toLocaleDateString('en-US')}
                  </Styled.Small>
                <Styled.Description>{description}</Styled.Description>
              </CardBody>
            </Card>
          </Styled.Anchor>
  );
};

export default VideoCard;
