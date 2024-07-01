import React, { useState, useEffect } from 'react';
import './AllPageHome.css';

const AllPageHome = () => {
  const [boxes, setBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          label: 'Horror',
          className: 'GBMOne',
          description: 'Horror movies, a captivating genre within the film industry, specialize in eliciting fear and dread among audiences through a myriad of techniques. They skillfully weave suspense, gore, and supernatural elements, coupled with psychological twists, to create an immersive experience that leaves viewers on the edge of their seats. These films often delve into the darkest recesses of human nature, exploring themes of morality, survival, and the inexplicable fear of the unknown. With a penchant for jump scares and a sense of impending doom, horror movies command attention, offering a thrilling journey into the depths of terror and the macabre.',
          movies: ['The Conjuring', 'Insidious', 'Get Out'],
          imageURL: 'https://m.media-amazon.com/images/I/714IuAXuZ9S._AC_UF1000,1000_QL80_.jpg'
        },
        {
          id: 2,
          label: 'Action',
          className: 'GBMTwo',
          description: 'Action movies are a dynamic genre that focuses on high-energy sequences, intense physical feats, and fast-paced storytelling to captivate audiences. These films typically center around a hero or group of protagonists who face formidable challenges, often involving physical confrontations, daring stunts, and explosive set pieces. They emphasize adrenaline-pumping moments and spectacular visuals, creating a thrilling cinematic experience.',
          movies: ['Mad Max: Fury Road', 'John Wick', 'Die Hard'],
          imageURL: 'https://twistedsifter.com/wp-content/uploads/2015/10/43-the-matrix.jpg'
        },
        {
          id: 3,
          label: 'Sci-Fi',
          className: 'GBMThree',
          description: 'Science fiction often explores the potential consequences of scientific, social, and technological innovations.',
          movies: ['Inception', 'The Matrix', 'Interstellar'],
          imageURL: 'https://th.bing.com/th/id/OIP.m52l-K5MaUCrO8dlrP4IBwHaMR?rs=1&pid=ImgDetMain'
        },
        {
          id: 4,
          label: 'Drama',
          className: 'GBMFour',
          description: 'The drama genre in movies focuses on realistic narratives and character-driven stories that delve deeply into the human condition. These films often explore complex themes such as love, loss, morality, and personal growth, presenting conflicts that reflect real-life struggles and emotions. Character development is paramount, with protagonists typically undergoing significant transformations. Dramas aim to evoke strong emotional responses from',
          movies: ['Forrest Gump', 'The Shawshank Redemption', 'Gladiator'],
          imageURL: 'https://www.themoviedb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg'
        },
        {
          id: 5,
          label: 'Comedy',
          className: 'GBMFive',
          description: 'Comedy is a genre of film in which the main emphasis is on humor.',
          movies: ['Superbad', 'Step Brothers', 'The Hangover'],
          imageURL: 'https://image.tmdb.org/t/p/original/4SIS1mVL3SDIzfKpU9Vt6EG6Mki.jpg'
        },
        {
          id: 6,
          label: 'Thriller',
          className: 'GBMSix',
          description: 'Thriller films are known for their suspense, tension, and excitement.',
          movies: ['Se7en', 'Gone Girl', 'Shutter Island'],
          imageURL: 'https://cdn.traileraddict.com/content/lionsgate/knock-knock.jpg'
        },
        {
          id: 7,
          label: 'Romance',
          className: 'GBMSeven',
          description: 'Romance films are love stories that focus on passion, emotion, and the affectionate romantic involvement of the main characters.',
          movies: ['The Notebook', 'Pride & Prejudice', 'Titanic'],
          imageURL: 'https://i.etsystatic.com/6285100/r/il/3f916f/241522930/il_570xN.241522930.jpg'
        }
      ];
      setBoxes(data);
    };
    

    fetchData();
  }, []);

  const showBoxDetails = (box) => {
    setSelectedBox(box);
  };

  const returnToNormal = () => {
    setSelectedBox(null);
  };

  return (
    <div className="AllPage">
      {!selectedBox ? (
        boxes.map((box) => (
          <div
            key={box.id}
            className={`MainAllGBox ${box.className}`}
            style={{
              backgroundImage: `url(${box.imageURL})`,
            }}
            onClick={() => showBoxDetails(box)}
          >
            {box.label}
          </div>
        ))
      ) : (
        <div className="AdditionalContent">
          <div className='MainHomeTwoPage'>
            <h2>{selectedBox.label}</h2>
            <p>{selectedBox.description}</p>
            <ul>
              {selectedBox.movies.map((movie, index) => (
                <div className="MovBoxDiv">
                  <div className="upBoxMov">
                  
                  

                  </div>

                  <li key={index}>{movie}</li>
                </div>
              ))}
            </ul>
          </div>
          <button onClick={returnToNormal}>Return</button>
        </div>
      )}
    </div>
  );
};

export default AllPageHome;
