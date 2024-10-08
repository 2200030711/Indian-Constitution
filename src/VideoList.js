import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Firestore configuration

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosCollection = collection(db, "videos");
      const snapshot = await getDocs(videosCollection);
      const videosArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVideos(videosArray);
    };

    fetchVideos(); // Fetch videos on component mount
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <h2>Video List</h2>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <video width="400" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.likes} Likes</p>
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
};

export default VideoList;
