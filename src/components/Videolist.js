import Videoitem from "./Videoitem";

function Videolist({videos,onVideoSelect}){
    if(videos.length===0)
    return <h4>Loading...</h4>
return(
    <>
        {videos.map((video,idx)=><Videoitem key={idx} videoItem={video} onVideoSelect={onVideoSelect}/>)}
    </>
);
}

export default Videolist;