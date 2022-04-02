import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {getVideosBySearch} from '../redux/actions/videos.action'
import {useSelector} from 'react-redux'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal';

function SearchScreen() {
  
    const {query}=useParams()
    const dispatch = useDispatch()
    const {videos,loading} = useSelector((state) => state.searchedVideos);
    console.log(query)
    useEffect(() => {
      dispatch(getVideosBySearch(query));
    }, [query,dispatch]);
    return (
      <Container>
        {!loading ? (
            videos.map(video => (
               <VideoHorizontal
                  video={video}
                  key={video.id.videoId}
                  searchScreen
               />
            ))
         ) :<h1>Loading</h1>
            }
      </Container>
    );
}

export default SearchScreen
