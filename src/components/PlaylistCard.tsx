import { Card, Button, Badge } from "react-bootstrap";
import { SpotifyPlaylist } from "../services/spotifyService";

interface PlaylistCardProps {
  playlist: SpotifyPlaylist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const playlistImage = playlist.images?.[0]?.url || '/src/assets/default-playlist.png';
  
  return (
    <Card 
      className="h-100 border-0 mb-4"
      style={{
        background: "linear-gradient(135deg, rgba(30,215,96,0.1), rgba(14,19,55,0.8))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(30,215,96,0.2)",
        transition: "transform 0.2s ease-in-out"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={playlistImage}
          style={{ 
            height: "200px", 
            objectFit: "cover",
            borderRadius: "0.375rem 0.375rem 0 0"
          }}
        />
        <div 
          className="position-absolute top-0 end-0 m-2"
          style={{ zIndex: 2 }}
        >
          <Badge bg="success" className="px-2 py-1">
            <i className="bi bi-spotify me-1"></i>
            {playlist.tracks.total} tracks
          </Badge>
        </div>
      </div>
      
      <Card.Body className="p-3">
        <div className="d-flex flex-column h-100">
          <div className="flex-grow-1">
            <h5 
              className="card-title mb-2" 
              style={{ 
                color: "#1ed760", 
                fontFamily: "Cormorant Garamond",
                fontSize: "1.3rem",
                fontWeight: "600"
              }}
            >
              {playlist.name}
            </h5>
            
            <p className="text-muted small mb-2">
              by {playlist.owner.display_name}
            </p>
            
            {playlist.description && (
              <p 
                className="text-light mb-3" 
                style={{ 
                  fontSize: "0.9rem", 
                  lineHeight: "1.4",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                {playlist.description}
              </p>
            )}
          </div>
          
          <div className="mt-auto">
            <div className="d-flex gap-2">
              <Button
                variant="success"
                size="sm"
                href={playlist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow-1"
              >
                <i className="bi bi-spotify me-1"></i>
                Open in Spotify
              </Button>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => {
                  // Could implement a modal to show tracks
                  console.log('Show tracks for:', playlist.name);
                }}
              >
                <i className="bi bi-list-ul"></i>
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlaylistCard;