export default function Home() {
    return (
        <video 
            src="/videomain.mp4" 
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
