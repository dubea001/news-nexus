import { useState, useEffect } from 'react';
import { fetchData } from '../Services/Api';
import { assets } from '../assets/assets';
import { structureDate } from '../Constants/index';

const ArticlesList = ({ endpoint, params }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getArticles = async (pageNum) => {
        setLoading(true);
        try {
            const data = await fetchData(endpoint, {
                ...params,
                page: pageNum,
            });
            setArticles(data.articles);
            setHasMore(data.articles.length === params.pageSize);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        setArticles([]);
        setPage(1);
        getArticles(1);
    }, [endpoint, params]);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        getArticles(nextPage);
    };

    if (loading && page === 1) return <p>Loading...</p>;
    if (error) return <p>Error loading articles.</p>;

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
                        className='w-80'
                    />
                    <p className=''>{article.description}</p>
                    <a
                        href={article.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Read more
                    </a>
                    <p className=''>{article.author}</p>
                    <p className=''>{structureDate(article.publishedAt)}</p>
                </div>
            ))}
            {hasMore && (
                <button onClick={loadMore} className='load-more'>
                    Load More
                </button>
            )}
        </div>
    );
};

export default ArticlesList;
