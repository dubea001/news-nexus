<<<<<<< HEAD
import { ArticlesList, LatestNews } from './index';
import { categories } from '../Constants/index';
=======
import { ArticlesList, SideArticles } from './index';
import { categories } from '../Constants/index';
import { assets } from '../assets/assets';
>>>>>>> feature1

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
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border border-black p-4'>
            <div className='col-span-1 md:col-span-2 border border-red p-4'>
                <h2>Top Headlines</h2>
=======
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='col-span-1 md:col-span-2 py-4 px-8 border-r-4 border-r-red'>
                <h2 className='text-center text-2xl font-semibold text-red'>
                    Top Headlines
                </h2>
                <hr className='my-4' />
>>>>>>> feature1
                <ArticlesList
                    endpoint='/top-headlines'
                    params={params.topHeadlines}
                />
            </div>
<<<<<<< HEAD
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
=======
            <div className='h-fit max-w-fit space-y-10 px-8'>
                <div className='my-6'>
                    {params.categories.map((category, index) => (
                        <div
                            key={index}
                            className='border border-gray my-6 px-4'
                        >
                            <p className='text-center text-red text-base my-2'>
                                {category.title}
                            </p>
                            <SideArticles
                                endpoint='/top-headlines'
                                params={category.params}
                            />
                        </div>
                    ))}
                </div>
                <div className='my-6 border border-black px-4 py-2'>
                    <div className='flex flex-col items-start'>
                        <h3 className='text-xl font-semibold my-4 text-dark'>
                            Sign up for our weekly newsletter
                        </h3>
                        <p className='text-gray text-sm'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ratione aliquam nulla dolorem est earum eos!
                        </p>
                        <input
                            type='text'
                            placeholder='Your Email'
                            className='border border-dark p-2 w-full my-4'
                        />
                        <button className='text-white border-0 bg-dark px-6 py-2 w-full'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className='mt-40 border-t-2 border-t-red'>
                    <h2 className='text-center text-red font-bold text-xl'>
                        Place Your Advert Here
                    </h2>
                    <img
                        src={assets.advertImage}
                        alt='advertise here'
                        className='w-full object-cover my-4'
                    />
                </div>
>>>>>>> feature1
            </div>
        </div>
    );
};

export default ArticlesSection;
