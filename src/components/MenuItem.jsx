import PropTypes from 'prop-types'; // ES6

const MenuItem = ({item}) => {
    const {name, category, price, img, description} = item;

    return (
        <div className=" shadow-md hover:shadow-xl rounded-md p-2">
            <div className="relative mb-10">
                <img src={img} alt={name} className="h-60 rounded-md  " />
                <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 btn btn-neutral rounded-3xl font-medium">
                    only {price}
                </button>
            </div>
            <h1 className="text-2xl font-medium text-center">
                {name} - ({category})
            </h1>
            <p>{description}</p>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    item: PropTypes.object,
};
