import { useState } from "react";
import "./App.css";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [apiData, setApiData] = useState(null);

  async function getApiData() {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
    );
    const response = await data.json();
    setApiData(response.data);
  }

  // obj.embed_url for image
  // obj.id for UID
  // <iframe src="https://giphy.com/embed/DDkZETHtyhWNXOlb4R" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-bayard-rustin-movie-netflix-DDkZETHtyhWNXOlb4R">via GIPHY</a></p>

  return (
    <>
      <button onClick={() => getApiData()}>Random Gif</button>
      {apiData && (
        <iframe
          src={apiData.embed_url}
          alt="..loading"
          width={apiData.images.original.width}
          height={apiData.images.original.height}
        />
      )}
    </>
  );
}

export default App;
