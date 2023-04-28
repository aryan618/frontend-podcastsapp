import React, { useEffect, useState } from "react";
import axios from "axios";

const PodcastDetails = ({ podcast }) => {
  const [audioError, setAudioError] = useState(false);

  const handleAudioError = () => {
    setAudioError(true);
    console.error(`Failed to load audio for podcast ${podcast.id}`);
    console.log({ audioError });
  };
  if (podcast.episodes.length > 0) {
    return (
      <div>
        <h2>{podcast.title}</h2>
        {podcast.description}
        {console.log(podcast)}

        <audio controls onError={handleAudioError}>
          <source src={podcast.episodes[0].audio} type="audio/mpeg" />
        </audio>
      </div>
    );
  }

  return (
    <div>
      <h2>{podcast.title}</h2>
      {podcast.description}
      {console.log(podcast)}
      <audio controls onError={handleAudioError}>
        <source
          src="https://www.listennotes.com/e/p/312c39ca41644e42a35bc12759ad63f1/"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

const PodcastTable = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  useEffect(() => {
    axios
      .get("https://backendd-eight.vercel.app/best-podcasts")
      .then((response) => setPodcasts(response.data.podcasts))
      .catch((error) => console.error(error));
  }, []);

  const handleRowClick = (podcastId) => {
    axios
      .get(`https://backendd-eight.vercel.app/${podcastId}`)
      .then((response) => setSelectedPodcast(response.data))
      .catch((error) => console.error(error));
  };

  if (selectedPodcast) {
    return <PodcastDetails podcast={selectedPodcast} />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Podcast ID</th>
          <th>Podcast Title</th>
          <th>Podcast Publisher</th>
          <th>Podcast Thumbnail</th>
          <th>Podcast Listen Score</th>
        </tr>
      </thead>
      <tbody>
        {podcasts.map((podcast) => (
          <tr key={podcast.id} onClick={() => handleRowClick(podcast.id)}>
            <td>{podcast.id}</td>
            <td>{podcast.title}</td>
            <td>{podcast.publisher}</td>
            <td>
              <img src={podcast.thumbnail} alt="Podcast Thumbnail" />
            </td>
            {console.log(podcast)}
            <td>{podcast.episodes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PodcastTable;
