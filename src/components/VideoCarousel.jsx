import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


const VideoCarousel = () => {
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])

    // video indicator
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);
    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

useGSAP(() => {
    //  slider animatin to move the video out of the screen and bring the next video into view
    gsap.to("#slider", {
        transform: `translateX(${-100 * videoId}%)`,
        duration: 2,
        ease: "power2.inOut", // show visualliser https://gsap.com/docs/v3/Eases
    });
})

  return (
    <div>
      
    </div>
  )
}

export default VideoCarousel
