import { ArticlesList, Navbar } from '../Components/index';

const Home = () => {
    const topHeadlinesParam = {
        apiKey: import.meta.env.VITE_API_KEY,
        country: 'us',
    };
    return (
        <div>
            <Navbar />
            <h1 className=''>Top Headlines</h1>
            <ArticlesList
                endpoint='/top-headlines'
                params={topHeadlinesParam}
            />
        </div>
    );
};

export default Home;
