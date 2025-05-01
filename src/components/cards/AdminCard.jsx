import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminDataThunk, getAdminDataThunk, postAdminDataThunk } from "../../redux/reducers/adminSlice";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      price: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
        dispatch(postAdminDataThunk(values))
    },
  });

  
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          id="thumbnail"
          name="thumbnail"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.thumbnail}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const AdminCard = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admin);

  useEffect(() => {
    dispatch(getAdminDataThunk());
  }, [dispatch]);

  const deleteAdminPanel = (id) => {
    dispatch(deleteAdminDataThunk(id))
  }

  const [text, setText] = useState('')
  const [sort, setSort] = useState('asc')

  const filteredData = admin.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).sort((a,b) => {
    if (sort == 'asc'){
      return a.price - b.price
    } else{
      return b.price - a.price
    }
  })

  return (
    <div>
      <SignupForm />
      <h1>Axtarin</h1>
      <input type="text" placeholder="axtar" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setSort('asc')}>A-Z</button>
      <button onClick={() => setSort('desc')}>Z-A</button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData.map((item, index) => (
              <tr style={{width:800, height: 40, backgroundColor:"aqua"}} key={index}>
                <td>
                    <img style={{width: 100, height: 100}} src={item.thumbnail} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={(id) => deleteAdminPanel(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCard;
