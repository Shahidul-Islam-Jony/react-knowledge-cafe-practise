import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';

const Blog = ({blog,handleAddToBookmark}) => {
    // console.log(blog);
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-500'><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                  hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)  
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog;