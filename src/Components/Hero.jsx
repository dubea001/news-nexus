import { useState, useEffect } from 'react';
import { fetchData } from '../Services/Api';
import { categories } from '../Constants/index';

const Hero = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const categoryList = categories(apiKey);

    const [articles, setArticles] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const categoryParams =
                    categoryList[currentCategory].categoryParams;
                const data = await fetchData('/top-headlines', categoryParams);
                setArticles(data.articles.slice(0, 5));
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchArticles();
    }, [currentCategory]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCategory(
                (prevCategory) => (prevCategory + 1) % categoryList.length
            );
        }, 15000);
        return () => clearInterval(interval);
    }, [categoryList.length]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading articles.</p>;

    return (
        <div className='border border-black py-6'>
            <h2 className=''>{categoryList[currentCategory].title}</h2>
            <ul className='flex'>
                {articles.map((article, index) => (
                    <li key={index}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hero;
