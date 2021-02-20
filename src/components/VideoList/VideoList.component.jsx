import React from 'react';
import {StyledVideoList} from './VideoList.styles';
import {Container, Row} from "reactstrap";
import VideoCard from '../VideoCard'
import {getVideoItems} from "../../utils/videoItems";

const VideoList = (items) => {
    items = items.items;
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
