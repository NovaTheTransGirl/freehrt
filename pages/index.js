import path from "path";
import fs from "fs";

export async function getServerSideProps() {
    return {
        props: {
            videoPath: "/videomain.mp4"
        }
    };
}

export default function Home({ videoPath }) {
    return (
        <video 
            src={videoPath} 
            autoPlay 
            loop 
            muted={false} 
            controls={false} 
            playsInline 
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                zIndex: -1
            }}
        />
    );
}
