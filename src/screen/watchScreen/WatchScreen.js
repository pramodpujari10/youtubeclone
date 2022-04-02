import React, { useEffect } from 'react';
import {Row,Col } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
  getVideoById,
  getRelatedVideo,
} from '../../redux/actions/videos.action';

import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'

import './watchScreen.css'

function WatchScreen() {
  const {id}=useParams()
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getVideoById(id));

  dispatch(getRelatedVideo(id));
}, [dispatch, id]);
const {video,loading:relatedVideoLoading} = useSelector((state) => state.selectedVideo);
const {videos,loading} = useSelector((state) => state.relatedVideo);

    return (
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
            //   src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title="title"
              // {video.snippet.title}
            
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
          {!loading ? (
            <VideoMetaData
             video={video} videoId={id} 
            />
          ) : (
            <h6 style={{color:"white"}}>Loading...</h6>
          )} 

          <Comments
            // videoId={id}
            // totalComments={video?.statistics?.commentCount}
          />
        </Col>
        <Col lg={4}>
          {/* {!loading ? (
            videos
              ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoHorizontal video={video} key={video.id.videoId} />
              ))
          ) : (
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
              <Skeleton width="100%" height="130px" count={15} />
            </SkeletonTheme>
          )} */}
          {
          !loading &&videos.filter(video => video.snippet).map(video=>(
              <VideoHorizontal video={video} key={video.id.videoId} />
          ))}
        </Col>
      </Row>
    );
}

export default WatchScreen
