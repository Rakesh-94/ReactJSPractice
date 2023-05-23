import React, { useState } from 'react';

const QuestionnoFive = () => {
  const images = [
    { id: 1, url: 'https://media.istockphoto.com/id/920377882/photo/beautiful-landscape-with-high-mountains-with-illuminated-peaks-stones-in-mountain-lake.jpg?s=612x612&w=0&k=20&c=ppnPB3UoILzzxR48gcuUzZx92zepSwegQ-0NqfBDAzk=' },
    { id: 2, url: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=' },
    { id: 3, url: 'https://media.istockphoto.com/id/1202227531/photo/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=612x612&w=0&k=20&c=Ssi0UDmtNGF89mSpq_t7f-XChvV0_RO8xO5p5xvz35Y=' },
    { id: 4, url: 'https://media.istockphoto.com/id/1296344118/photo/beautiful-happy-woman-enjoying-the-warm-sunlight-in-a-tropical-public-park.jpg?s=612x612&w=0&k=20&c=Z0h4uIzZd4cxhkT_CSl9-1wFbnbuqEWYrp5heM9uDuQ=' },
    { id: 5, url: 'https://media.istockphoto.com/id/1226721220/photo/child-hugging-tree-with-heart-shape-on-it.jpg?s=612x612&w=0&k=20&c=Fwd3X5zoaT3YdQ2VCzMZyqwogtgcG-FIwO8CW3kO8G0=' },
    { id: 6, url: 'https://media.istockphoto.com/id/1208290498/photo/closeup-nature-view-of-green-leaf-background.jpg?s=612x612&w=0&k=20&c=jD24fB7u7QoWJmeHynZ8RGZD7A1mcOPfsL8X47M_sjM=' },
    { id: 7, url: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=' },
    { id: 8, url: 'https://media.istockphoto.com/id/465559373/photo/old-wood-background.jpg?s=612x612&w=0&k=20&c=mQ5fJU_4IwgCB8VK6g551yNVzsQJn7ZYpI8Ua6TeC0I=' },
    { id: 9, url: 'https://media.istockphoto.com/id/1203963917/photo/beautiful-young-woman-blows-dandelion-in-a-wheat-field-in-the-summer-sunset-beauty-summer.jpg?s=612x612&w=0&k=20&c=2p8iSdTCH-vo2ytvOFm3_xZyz_sQcQwVf87jGAi_mYI=' },
    { id: 10, url: 'https://media.istockphoto.com/id/1214956707/photo/green-leaves-for-background-and-wallpaper.jpg?s=612x612&w=0&k=20&c=4UWIW4M6csERjbDMKcCai_W0k6hTrMZWD_RS43gYrkA=' },
    { id: 11, url: 'https://media.istockphoto.com/id/935746242/photo/mata-atlantica-atlantic-forest-in-brazil.jpg?s=612x612&w=0&k=20&c=NqE6m2Q8J2w6M7x7Pi8VxnMzLzq-HJQvCt5EMuvMU5o=' },
    { id: 12, url: 'https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?s=612x612&w=0&k=20&c=-DVP7P2U3U9qqjILIfjgzFe2gfpvbf9wdbPXKn8N_LY=' },
    { id: 13, url: 'https://media.istockphoto.com/id/1209220375/photo/woman-in-rustic-dress-gathering-poppy-and-wildflowers-in-sunset-light-walking-in-summer.jpg?s=612x612&w=0&k=20&c=iFORnBXr8KAQUB3UFzpMBzpJFYJ9FJAbHpVOZB2SoxA=' },
    { id: 14, url: 'https://media.istockphoto.com/id/1173733640/photo/green-forest.jpg?s=612x612&w=0&k=20&c=P3DgfHI-FCOMX4vLtCaw3M-7nRdGiAsATfRZRqs9E4E=' },
    { id: 15, url: 'https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=612x612&w=0&k=20&c=hiI3ib9ibDxAgqEZEH09EO3JOw94v5xh6hzcuXGhO-M=' },
    { id: 16, url: 'https://media.istockphoto.com/id/1080676040/photo/beautiful-landscape-at-mystical-day-with-mountains-and-lake-travel-background-periyar.jpg?s=612x612&w=0&k=20&c=eG2b3xbqC9NjsTTo_DgsiPsoojAmvcbPwZpjRv3VcSg=' },
    { id: 17, url: 'https://media.istockphoto.com/id/521982322/photo/pretty-young-teenage-girl-relaxing-on-a-grass.jpg?s=612x612&w=0&k=20&c=gz4WO1CHehuZbIuuUYAJ-SXq0bcsN979pS4fqujhHes=' },
    { id: 18, url: 'https://media.istockphoto.com/id/1180494132/photo/dandelion.jpg?s=612x612&w=0&k=20&c=DMaGlFh2uiAfqCDjHos74YtmmmSZjDOTxU9bjjX33D8=' },
    { id: 19, url: 'https://media.istockphoto.com/id/1280648936/photo/autumn-landscape-with-lake.jpg?s=612x612&w=0&k=20&c=dX2BS-HBbF_Stf6sHAsnba1SiBvI9iu92Qy154zgGBk=' },
    { id: 20, url: 'https://media.istockphoto.com/id/1205214235/photo/path-through-sunlit-forest.jpg?s=612x612&w=0&k=20&c=-AS1aTz85kcZ2X7E8n2iFlm6dsdIMyWGWrSDQ1o-f_0=' },
    // Add more image objects as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {images.map((image, index) => (
          <div key={image.id}>
          <div
            className={`option ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        </div>
      ))}
      <button onClick={goToPreviousImage}>Previous</button>
      <img src={images[activeIndex].url} alt="Slider" />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};

export default QuestionnoFive;
