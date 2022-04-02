import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import './videoHorizontal.css'

// import { AiFillEye } from 'react-icons/ai';
import request from '../../api';

import moment from 'moment';
import numeral from 'numeral';

import { Col, Row } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

function VideoHorizontal({ video, searchScreen }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request('/videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: id.videoId,
        },
      });
      //  const {items}=data;
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  const history = useNavigate();
  const handleClick = () => {
    history(`/watch/${id.videoId}`);
  };

  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      {/* //TODO refractor grid */}
      <Col
        xs={6}
        md={searchScreen ? 4 : 6}
        //   {searchScreen || subScreen ? 4 : 6}
        className="videoHorizontal__left"
      >
        <img
          src={
            //"https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"
            medium.url
          }
          // effect="blur"
          className="videoHorizontal__thumbnail"
          // {`videoHorizontal__thumbnail ${thumbnail} `}
          className="videoHorizontal__thumbnail-wrapper"
          // wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {/* {isVideo && ( */}
        <span className="videoHorizontal__duration">{_duration}</span>
        {/* )} */}
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        //   {searchScreen || subScreen ? 8 : 6}
        className="p-0 videoHorizontal__right"
      >
        <p className="mb-1 videoHorizontal__title">
          {/* video */}
          {title}
        </p>

        {/* {isVideo && ( */}
        <div className="videoHorizontal__details">
          {/* <AiFillEye /> */}
          {numeral(views).format('0.a')} Views •{moment(publishedAt).fromNow()}
        </div>
        {/* )} */}

        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          {/* {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />} */}
          <p className="mb-0">
            {/* coder */}
            {channelTitle}
          </p>
        </div>
        {/* {subScreen && ( */}
        {/* <p className="mt-2"> */}
        {/* {video.contentDetails.totalItemCount}  */}
        {/* Videos */}
        {/* </p> */}
        {/* )} */}
      </Col>
    </Row>
  );
}

export default VideoHorizontal
