import NavBar from "../layout/NavBar";
import CreateBlog from "../forms/CreateBlog";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Home = (props) => {
    const [blogs, setBlogs] = useState(null)
    const [gif, setGif] = useState(null);
    const history = useHistory()

useEffect(() => {
    axios
      .get('https://jab-blog-api.herokuapp.com/blogs', {
        headers: {
            'x-auth-token': localStorage.getItem('userToken'),
        }
      })
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err))
}, [])

useEffect(() => {
  axios.get('https://api.giphy.com/v1/gifs/trending?api_key=sm1t4ygsjFoVmIrfFipykq7h1NCdWVCI&limit=25&rating=g')
    .then(res => setGif(res.data)).catch(err => console.error(err))
}, [])



const handleDelete = (blog) => {
    axios
      .delete(`https://jab-blog-api.herokuapp.com/blogs/${blog._id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs([...blogs.filter((b) => b._id !== blog._id)]);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdate = (blog) => {
    history.push(`/update/${blog._id}`)
  }

  return (
    <div className="container">
      <NavBar user={props.user} />

      <h1 className="text-center">Home Page</h1>

      <CreateBlog className='p-3' setBlogs={setBlogs} blogs={blogs} />
      
      <div className="row P3">
        {blogs && blogs.map((blog) => (
          <div key={blog._id} className="card col-2 g-2 p-3 rounded-3" style={{ width: "18rem"}} >
           
           <div>{gif && gif.data.length > 0 ? <img src={gif.data[Math.floor(Math.random() * 10)].images.original.url} 
            className="card-img-top rounded-1 P-3" alt="gif" /> : null} </div>
            

            <h6>{blog.title}</h6>
            <h6>
              {blog.details}{" "}

              {blog.user === props.user._id && (
                <span
                  className="btn btn-danger"
                  style={{marginRight: '5px'}}
                  onClick={() => handleDelete(blog)}
                >
                  x
                </span>
               )}

              {blog.user === props.user._id && (
                <span
                  className="btn btn-info"
                  onClick={() => handleUpdate(blog)}
                >
                  Update
                </span>
              )}
            </h6>
          </div>
        ))}
        
        </div>
    </div>
  );
};

export default Home;