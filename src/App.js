
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import Searchbar from './components/Searchbar';
import Videodetails from './components/Videodetails';
import Videolist from './components/Videolist';
import Videoitem from './components/Videoitem';
import {useState,useEffect} from 'react';
import youtube from './api/youtube';
// AIzaSyCUPtVF1hTHMia-vTVnEgTM3Dnv4RTjEis
//


function App() {
  const[videos,setVideos]=useState([])
  const [clickedVideo,setClickedVideo]=useState(null)
  // const[selectedVideo,setSelectedVideo]=useState(null)
  const selectedVideo= clickedVideo!==null ? clickedVideo:(videos.length!==0?videos[0]:null);

  async function handleSubmit(searchTerm){
    const response= await youtube.get('search',{
      params:{
        part:"snippet",
        maxResults:5,
        key:'AIzaSyCUPtVF1hTHMia-vTVnEgTM3Dnv4RTjEis',
        q:searchTerm
      }
    });
    setVideos(response.data.items);
  }

  const onVideoClick=(video)=>{
    setClickedVideo(video)
  }

  useEffect(()=>{
    handleSubmit('youtube')
  },[])

  return (
    <div className="App">
    <Container>
    <Searchbar onSubmit={handleSubmit}/>
    <Row>
    <Col sm={8}>
    <Videodetails video={selectedVideo} />
     </Col>
     <Col sm={4}>
      <Videolist videos={videos} onVideoSelect={onVideoClick} />     
     </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;




// here, onVideoSelect is a prop for function onVideoClick
// thus, from further, the onVideoClick function will be called or will be known by using onVideoSelect prop name