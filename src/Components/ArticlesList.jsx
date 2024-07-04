import { useState, useEffect } from 'react';
import { fetchData } from '../Services/Api';
import { assets } from '../assets/assets';
import { structureDate } from '../Constants/index';
import { FaArrowRight } from 'react-icons/fa';

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
<<<<<<< HEAD
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
=======
                <div className='my-8' key={index}>
                    <div className='relative'>
                        <div className='absolute bottom-4 w-9/12 bg-background px-4 py-2'>
                            <h2 className='font-bold text-2xl'>
                                {article.title}
                            </h2>
                            <p className='text-dark my-2'>
                                {article.description}
                                <a
                                    href={article.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue'
                                >
                                    Read more
                                </a>
                            </p>

                            <div className='flex space-x-4 items-center'>
                                <p className='text-xs text-gray'>
                                    {article.author}
                                </p>
                                <p className='text-gray'>
                                    {structureDate(article.publishedAt)}
                                </p>
                            </div>
                        </div>

                        <img
                            src={
                                article.urlToImage
                                    ? article.urlToImage
                                    : assets.defaultImage
                            }
                            alt={article.title}
                            className='w-full'
                        />
                    </div>
                </div>
            ))}
            {hasMore && (
                <div className='flex items-center justify-center'>
                    <button
                        onClick={loadMore}
                        className='px-6 py-2 transition duration-200 flex items-center ease-in-out bg-dark hover:bg-black border-0 text-white'
                    >
                        Load More Articles <FaArrowRight className='ml-2' />
                    </button>
                </div>
>>>>>>> feature1
            )}
        </div>
    );
};

export default ArticlesList;
