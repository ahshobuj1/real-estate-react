import {Link} from 'react-router-dom';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const Slide = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[600px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md border-2 p-2 space-y-3 rounded-md">
                        <h1 className="text-2xl font-medium">
                            SPANISH <br />
                            TEACHER{' '}
                            <span className="text-red-600">TRAINING</span>
                        </h1>

                        <p className="text-xl">
                            Oct 17 -Nov 1. {'    '}
                            <span className="font-bold text-white">
                                ENGLISH & SPANISH
                            </span>
                        </p>
                        <p className="text-black hidden md:block">
                            Join our community to get Updates and Special
                            Offers. You can unsubscribe at any time (we can
                            still be friends)
                        </p>

                        <Link to="/class">
                            <button className="btn btn-sm btn-neutral hidden md:block">
                                CLASSES SCHEDULE
                            </button>
                        </Link>
                    </div>

                    <img src={slide1} className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-sm btn-circle">
                            ❮
                        </a>

                        <a href="#slide2" className="btn btn-sm btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md border-2 p-2 space-y-3 rounded-md">
                        <h1 className="text-2xl font-medium">
                            SPANISH <br />
                            TEACHER{' '}
                            <span className="text-red-600">TRAINING</span>
                        </h1>

                        <p className="text-xl">
                            Oct 17 -Nov 1. {'    '}
                            <span className="font-bold text-white">
                                ENGLISH & SPANISH
                            </span>
                        </p>
                        <p className="text-black hidden md:block">
                            Join our community to get Updates and Special
                            Offers. You can unsubscribe at any time (we can
                            still be friends)
                        </p>

                        <Link to="/class">
                            <button className="btn btn-sm btn-neutral hidden md:block">
                                CLASSES SCHEDULE
                            </button>
                        </Link>
                    </div>

                    <img src={slide2} className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-sm btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-sm btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md border-2 p-2 space-y-3 rounded-md">
                        <h1 className="text-2xl font-medium">
                            SPANISH <br />
                            TEACHER{' '}
                            <span className="text-red-600">TRAINING</span>
                        </h1>

                        <p className="text-xl">
                            Oct 17 -Nov 1. {'    '}
                            <span className="font-bold text-white">
                                ENGLISH & SPANISH
                            </span>
                        </p>
                        <p className="text-black hidden md:block">
                            Join our community to get Updates and Special
                            Offers. You can unsubscribe at any time (we can
                            still be friends)
                        </p>

                        <Link to="/class">
                            <button className="btn btn-sm btn-neutral hidden md:block">
                                CLASSES SCHEDULE
                            </button>
                        </Link>
                    </div>

                    <img src={slide3} className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-sm btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-sm btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
