import React from "react";
import "./NewsCard.css";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, date, imageUrl }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
