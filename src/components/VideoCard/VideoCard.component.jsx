import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, Col} from 'reactstrap';
import Styled from './VideoCard.styles';

const VideoCard = ({videoUrl, description, title, publishDate, thumbnail}) => {
  const publishDateParse = new Date(publishDate);
  return (
      <>
        <Col xs={{size: 4}}>
          <Styled.Anchor target="_blank" href={videoUrl}>
            <Card>
              <CardImg top width="100%" src={thumbnail} alt={title}/>
              <CardBody>
                <Styled.Title>{title}</Styled.Title>
                <CardSubtitle>
                  <Styled.Small>
                    Publish Date: {publishDateParse.toLocaleDateString('en-US')}
                  </Styled.Small>
                </CardSubtitle>
                <Styled.Description>{description}</Styled.Description>
              </CardBody>
            </Card>
          </Styled.Anchor>
        </Col>
      </>
  );
};

export default VideoCard;
