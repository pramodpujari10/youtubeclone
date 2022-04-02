import React from 'react'
import './videoMetaData.css'
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import ShowMoreText from 'react-show-more-text';

function VideoMetaData({ video: { snippet, statistics }, videoId }) {

const { channelId, channelTitle, description, title, publishedAt } = snippet;
const { viewCount, likeCount, dislikeCount } = statistics;
const dispatch = useDispatch();
console.log(snippet)

// const { snippet: channelSnippet, statistics: channelStatistics } = useSelector(
//   (state) => state.channelDetails.channel
// );

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(viewCount).format('0.a')} Views •{' '}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format('0.a')}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format('0.a')}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src=""
            //   {channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span> {numeral(1000).format('0.a')} Subscribers</span>
          </div>
        </div>

        <button
          className="p-2 m-2 border-0 btn"
          // {`p-2 m-2 border-0 btn
          // ${
          //   subscriptionStatus && 'btn-gray'
          // }
          // `}
        >
          Subscribe
          {/* {subscriptionStatus ? 'Subscribed' : 'Subscribe'} */}
        </button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime accusantium facere reiciendis rem expedita delectus dicta iste sapiente laboriosam possimus veritatis velit, voluptatum saepe aut doloremque temporibus id sit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime accusantium facere reiciendis rem expedita delectus dicta iste sapiente laboriosam possimus veritatis velit, voluptatum saepe aut doloremque temporibus id sit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime accusantium facere reiciendis rem expedita delectus dicta iste sapiente laboriosam possimus veritatis velit, voluptatum saepe aut doloremque temporibus id sit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime accusantium facere reiciendis rem expedita delectus dicta iste sapiente laboriosam possimus veritatis velit, voluptatum saepe aut doloremque temporibus id sit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime accusantium facere reiciendis rem expedita delectus dicta iste sapiente laboriosam possimus veritatis velit, voluptatum saepe aut doloremque temporibus id sit?
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
}

export default VideoMetaData
