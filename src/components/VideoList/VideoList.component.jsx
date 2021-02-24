import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { StyledVideoList } from './VideoList.styles';
import { getVideoItems } from '../../utils/videoItems';
import VideoCard from '../VideoCard';

const VideoList = (itemsObject) => {
  const { items } = itemsObject;
  const videoItems = getVideoItems(items);
  const rowUnit = 12 / 3;
  const videoCards = videoItems.map(({ etag, id, snippet }) => (
    <Col key={etag} xs={12} sm={rowUnit}>
      <VideoCard
        key={etag}
        videoUrl={`https://www.youtube.com/watch?v=${id.videoId}`}
        description={`${snippet.description}`}
        title={`${snippet.title}`}
        publishDate={`${snippet.publishedAt}`}
        thumbnail={`${snippet.thumbnails.high.url}`}
      />
    </Col>
  ));
  return (
    <>
      <StyledVideoList>
        <Container>
          <Row>{videoCards}</Row>
        </Container>
      </StyledVideoList>
    </>
  );
};

export default VideoList;
