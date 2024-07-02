import { useState, useEffect } from 'react';
import { fetchData } from '../Services/Api';
import { assets } from '../assets/assets';
import { structureDate, reduceText } from '../Constants/index';

const LatestNews = ({ endpoint, params }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            try {
                const data = await fetchData(endpoint, params);
                setArticles(data.articles);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        getArticles();
    }, [endpoint, params]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed Request</p>;

    const filteredArticles = articles.filter(
        (article) =>
            article.title !== '[Removed]' && article.description !== '[Removed]'
    );

    return (
        <div>
            {filteredArticles.map((article, index) => (
                <div className='border border-blue' key={index}>
                    <h2 className=''>{article.title}</h2>

                    <img
                        src={
                            article.urlToImage
                                ? article.urlToImage
                                : assets.defaultImage
                        }
                        alt={article.title}
                        className='w-20'
                    />
                    <p className=''>{reduceText(article.description, 50)}</p>
                    <a
                        href={article.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-red'
                    >
                        Read more
                    </a>
                    <p className=''>{structureDate(article.publishedAt)}</p>
                </div>
            ))}
        </div>
    );
};

export default LatestNews;
