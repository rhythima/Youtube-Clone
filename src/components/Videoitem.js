import {Row,Col,Container} from 'react-bootstrap';

function Videoitem({videoItem,onVideoSelect}){
    console.log(videoItem);
return(
    <Container>
    <Row onClick={()=>onVideoSelect(videoItem)}>
        <Col sm={8} style={{marginTop:"5px"}}>
        <img src={videoItem.snippet.thumbnails.default.url} width="200"/>
        </Col>
        <Col sm={4}>
            <h7>{videoItem.snippet.title}</h7>
        </Col>
    </Row>
    </Container>
);
}
export default Videoitem;