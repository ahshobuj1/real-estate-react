import {useState} from 'react';
import MenuItem from './MenuItem';

const RecentMenu = () => {
    const [menu, setMenu] = useState([]);

    fetch('menuData/menu.json')
        .then((res) => res.json())
        .then((data) => setMenu(data))
        .catch((err) => console.log(err));

    return (
        <div className="pb-5">
            <div className="px-2 lg:px-0 text-center my-10 space-y-5 ">
                <h1 className="text-4xl font-medium">Recent Menu</h1>
                <p className="max-w-2xl mx-auto">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa Ilerm Ulime Lorem Integer gravida velit quis sed do
                    eiusmod tempor incididunt ut labore..
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {menu.map((item, idx) => (
                    <MenuItem key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

export default RecentMenu;
