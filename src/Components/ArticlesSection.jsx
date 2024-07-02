import { ArticlesList } from './index';

const ArticlesSection = () => {
    const topHeadlinesParam = {
        apiKey: import.meta.env.VITE_API_KEY,
        country: 'us',
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border border-black p-4'>
            <div className='col-span-1 md:col-span-2 border border-red p-4'>
                <h1 className=''>Latest News</h1>
                <ArticlesList
                    endpoint='/top-headlines'
                    params={topHeadlinesParam}
                />
            </div>
            <div className='col-span-1 border border-blue p-4 space-y-10'>
                <div className='border border-primary'>Popular</div>
                <div className='border border-primary'>Keywords</div>
                <div className='border border-primary'>NewsLetter</div>
            </div>
        </div>
    );
};

export default ArticlesSection;
