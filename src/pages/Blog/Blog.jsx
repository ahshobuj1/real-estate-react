import PropTypes from 'prop-types'; // ES6

const Blog = ({blog}) => {
    const {title, author, publicationDate, summary, content, img} = blog;
    return (
        <div className="shadow-lg hover:shadow-2xl grid md:grid-cols-2 px-1 lg:px-0">
            <div className="flex items-center">
                <img src={img} alt="blog images" className="rounded-md mb-5" />
            </div>
            <div className="space-y-2 p-5">
                <h2 className="text-lg lg:text-2xl font-medium text-center">
                    {title}
                </h2>
                <h2 className=" text-lg lg:text-2xl font-medium text-center text-green-500">
                    {summary}
                </h2>
                <h2 className="text-xl font-medium">Author : {author.name}</h2>
                <h2 className="text-xl font-medium">
                    Publication Date : {publicationDate}
                </h2>
                <h2>{content}</h2>
            </div>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object,
};
