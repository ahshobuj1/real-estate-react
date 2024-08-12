import {useState} from 'react';
import qnaImg from '../assets/images/qna.jpg';

const QNA = () => {
    const [spa, setSpa] = useState([]);
    const [beauty, setBeauty] = useState([]);
    const [yoga, setYoga] = useState([]);

    fetch('/public/SPAdata/spa.json')
        .then((res) => res.json())
        .then((spa) => setSpa(spa))
        .catch((err) => console.log(err));

    fetch('/public/SPAdata/beauty.json')
        .then((res) => res.json())
        .then((spa) => setBeauty(spa))
        .catch((err) => console.log(err));

    fetch('/public/SPAdata/yoga.json')
        .then((res) => res.json())
        .then((spa) => setYoga(spa))
        .catch((err) => console.log(err));

    return (
        <div className="md:grid grid-cols-2 gap-6 bg-teal-200 px-3 lg:px-0">
            <div>
                <img src={qnaImg} alt="qna image" />
            </div>
            <div className="">
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        SPA Price list
                    </div>
                    <div className="collapse-content">
                        {spa.map((sp, idx) => (
                            <ol key={idx}>
                                <span className="flex justify-between">
                                    {sp.name} <span>({sp.duration})</span>
                                    <span className="text-end">{sp.price}</span>
                                </span>
                            </ol>
                        ))}
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Beauty price list
                    </div>
                    <div className="collapse-content">
                        {beauty.map((sp, idx) => (
                            <ol key={idx}>
                                <span className="flex justify-between">
                                    {sp.name} <span>({sp.duration})</span>
                                    <span className="text-end">{sp.price}</span>
                                </span>
                            </ol>
                        ))}
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Zen Yoga price
                    </div>
                    <div className="collapse-content">
                        {yoga.map((sp, idx) => (
                            <ol key={idx}>
                                <span className="flex justify-between">
                                    {sp.name} <span>({sp.duration})</span>
                                    <span className="text-end">{sp.price}</span>
                                </span>
                            </ol>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QNA;
