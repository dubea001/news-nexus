import { useState, useEffect } from 'react';
import { fetchData } from '../Services/Api';
import { assets } from '../assets/assets';

const SideArticles = ({ endpoint, params }) => {
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
    if (error) return <p>Error loading articles.</p>;

    const filteredArticles = articles.filter(
        (article) =>
            article.title !== '[Removed]' && article.description !== '[Removed]'
    );

    return (
        <div>
            {filteredArticles.map((article, index) => (
                <div className='border border-blue p-2 m-1' key={index}>
                    <img
                        src={
                            article.urlToImage
                                ? article.urlToImage
                                : assets.defaultImage
                        }
                        alt={article.title}
                        className='w-full my-3'
                    />
                    <p className='text-sm font-semibold'>
                        {`${article.title}...`}
                        <a
                            href={article.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue ml-2'
                        >
                            Read more
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SideArticles;
