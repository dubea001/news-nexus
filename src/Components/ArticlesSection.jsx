import { ArticlesList, LatestNews } from './index';
import { categories } from '../Constants/index';

const ArticlesSection = () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const params = {
        topHeadlines: {
            apiKey,
            country: 'us',
            pageSize: 12,
        },
        categories: categories(apiKey),
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border border-black p-4'>
            <div className='col-span-1 md:col-span-2 border border-red p-4'>
                <h2>Top Headlines</h2>
                <ArticlesList
                    endpoint='/top-headlines'
                    params={params.topHeadlines}
                />
            </div>
            <div className='col-span-1 border border-blue p-4 space-y-10'>
                {params.categories.map((category, index) => (
                    <div key={index} className='border border-primary'>
                        <p>Top headline for {category.title}</p>
                        <LatestNews
                            endpoint='/top-headlines'
                            params={category.params}
                        />
                    </div>
                ))}
                <div className='border border-primary'>NewsLetter</div>
            </div>
        </div>
    );
};

export default ArticlesSection;
