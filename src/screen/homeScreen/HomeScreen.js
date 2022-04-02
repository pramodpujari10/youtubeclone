import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"


import { Container, Row, Col, Button } from 'react-bootstrap';
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import {
  getPopularVideos,
  getVideosByCategory,
} from '../../redux/actions/videos.action';
import InfiniteScroll from 'react-infinite-scroll-component';


function HomeScreen() {
  const dispatch=useDispatch();
  const {videos}=useSelector((state)=>state.homeVideos)
  console.log(videos)

  useEffect(()=>{
    dispatch(getPopularVideos());
  },[dispatch])

  //  const fetchData = () => {
      // if (activeCategory === 'All')
      //  dispatch(getPopularVideos())
      // else {
      //    dispatch(getVideosByCategory(activeCategory))
      // }
  //  }

    return (
      <Container>
        <CategoriesBar />
        <Row>
          {/* <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
              <div className="spinner-border text-danger d-block mx-auto"></div>
            }
            className="row"
          > */}
            {videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))}
          {/* </InfiniteScroll> */}
        </Row>
      </Container>
    );
}

export default HomeScreen
