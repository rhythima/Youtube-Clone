import Card from 'react-bootstrap/Card';
function Videodetails({video}) {
  if(!video) return <h5>Loading...</h5>
  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
      <Card>
        <iframe title="abc" height="500" src={videoSrc}> </iframe>
        <Card.Body>
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Title>{video.snippet.channelTitle}</Card.Title>
       {/* <Card.Title>{video.snippet.publishedAt}</Card.Title> */}
          <Card.Text>
           {video.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
export default Videodetails;