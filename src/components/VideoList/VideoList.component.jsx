import React from 'react';
import {Container, Row} from 'reactstrap';
import {StyledVideoList} from './VideoList.styles';
import VideoCard from '../VideoCard';
import {getVideoItems} from '../../utils/videoItems';

const VideoList = (itemsObject) => {
    const {items} = itemsObject;
    const videoItems = getVideoItems(items);

    return (
        <>
            <StyledVideoList>
                <Container>
                    <Row>
                        {videoItems.map(({etag, id, snippet}) => (
                            <VideoCard
                                key={etag}
                                videoUrl={`https://www.youtube.com/watch?v=${id.videoId}`}
                                description={`${snippet.description}`}
                                title={`${snippet.title}`}
                                publishDate={`${snippet.publishedAt}`}
                                thumbnail={`${snippet.thumbnails.high.url}`}
                            />
                        ))}
                    </Row>
                </Container>
            </StyledVideoList>
        </>
    );
};

export default VideoList;
