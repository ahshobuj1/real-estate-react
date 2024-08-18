import {useEffect, useState} from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('BlogData/BlogData.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <section>
            <div>
                <h1 className="text-4xl font-medium text-center my-10">
                    Our Blogs
                </h1>
            </div>
            <div>
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
