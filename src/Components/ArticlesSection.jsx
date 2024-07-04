import { ArticlesList, SideArticles } from './index';
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border border-black p-4 ml-8'>
            <div className='col-span-1 md:col-span-2 border border-red p-4'>
                <h2 className='text-center text-2xl font-semibold text-red'>
                    Top Headlines
                </h2>
                <ArticlesList
                    endpoint='/top-headlines'
                    params={params.topHeadlines}
                />
            </div>
            <div className='h-fit max-w-fit border ml-16 space-y-10'>
                <div className=''>
                    {params.categories.map((category, index) => (
                        <div key={index} className='border border-primary'>
                            <p className='text-center text-red text-sm'>
                                {category.title}
                            </p>
                            <SideArticles
                                endpoint='/top-headlines'
                                params={category.params}
                            />
                        </div>
                    ))}
                </div>
                <div className='border border-primary my-6'>
                    <div className='flex flex-col items-start'>
                        <h3 className='text-xl font-semibold my-4 text-primary'>
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
                <div className='mt-40 border border-red'>
                    <h2>Place Your Advert Here</h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis repudiandae minus quam mollitia commodi optio?
                        Minus officiis cum labore corrupti ex, a neque fugit
                        totam aliquid sunt, quas amet incidunt! Qui expedita
                        provident necessitatibus aut, quia similique! Esse,
                        excepturi dignissimos!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticlesSection;
