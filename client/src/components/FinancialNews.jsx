// Created by Lokesh Narasani


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FinancialNews.css'


function FinancialNews() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/news")
            .then(response => {
                setNewsData(response.data.topheadlines.articles);
            })
            .catch(error => {
                console.error("Error fetching the news data:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="header-title">Financial News</h1>
            {newsData.map((article, index) => (
                <div key={index} className="news-item">
                    <h3>{article.title}</h3>
                    <img src={article.urlToImage} alt={article.title} className="news-image"/>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}

export default FinancialNews;
