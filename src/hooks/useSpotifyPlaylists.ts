import { useState, useEffect } from 'react';
import spotifyService, { SpotifyPlaylist } from '../services/spotifyService';

interface UseSpotifyPlaylistsReturn {
  playlists: SpotifyPlaylist[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useSpotifyPlaylists = (userId: string): UseSpotifyPlaylistsReturn => {
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPlaylists = async () => {
    if (!userId) {
      setLoading(false);
      setError('No Spotify user ID provided');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const fetchedPlaylists = await spotifyService.getUserPlaylists(userId);
      setPlaylists(fetchedPlaylists);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch playlists');
      console.error('Error fetching Spotify playlists:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, [userId]);

  return {
    playlists,
    loading,
    error,
    refetch: fetchPlaylists
  };
};