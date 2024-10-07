import React from "react";
import NewsCard from "../components/NewsCard";
import "./Home.css";

const Home = () => {
  const newsList = [
    {
      title: "Evento Social",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "21 de setembro de 2023",
      imageUrl: "path/to/image1.jpg",
    },
    {
      title: "Doação de Alimentos",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      date: "14 de setembro de 2023",
      imageUrl: "path/to/image2.jpg",
    },
    // Mais notícias...
  ];

  return (
    <div className="home">
      <h1>Últimas Notícias</h1>
      <div className="news-grid">
        {newsList.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            date={news.date}
            imageUrl={news.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
