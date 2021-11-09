/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { toast, ToastContainer } from 'react-toastify';
import { useCategory } from '../../../../../context/category/CategoryProvider';
import { useProduct } from '../../../../../context/product/ProductProvider';
import Button from '../../../../user/reusable/Button';
import InputGroup from '../../../../user/reusable/InputGroup';
import AdminLayout from '../../../common/AdminLayout';

function CreateProduct({ location }) {
  const { pid } = queryString.parse(location.search);
  const [formData, setFormData] = useState({
    title: '',
    featured: false,
    category: '',
    price: '',
    discount: '',
    quantity: '',
    shortDescription: '',
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state) => {
    console.log(state);
    setEditorState(state);
  };

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const [cats, setCats] = useState([]);

  const { getCategories, categories } = useCategory();
  const { createProduct, getSingleProduct, product, updateProduct, message } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (pid) getSingleProduct(pid);
  }, [pid]);

  useEffect(() => {
    if (pid) {
      setFormData({
        title: product?.title,
        featured: product?.featured,
        category: product?.category?._id,
        price: product?.price,
        discount: product?.discount,
        quantity: product?.quantity,
        shortDescription: product?.shortDescription,
      });
      if (product?.description) {
        const blocksFromHtml = htmlToDraft(product?.description);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        setEditorState(EditorState.createWithContent(contentState));
      }
    }
  }, [product]);

  useEffect(() => {
    setCats(categories);
  }, [categories]);

  // eslint-disable-next-line no-unused-vars
  const { title, category, price, quantity, discount, featured, shortDescription } = formData || {};

  const onChangeHdl = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    }
  };

  const onChangeHdlImg = (e) => setImage(e.target.files[0]);
  const onChangeHdlImgs = (e) => setImages([...e.target.files]);

  const submitHdl = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('quantity', quantity);
    data.append('image', image);
    data.append('category', category);
    data.append('price', price);
    data.append('discount', discount);
    data.append('featured', featured);
    data.append('shortDescription', shortDescription);
    data.append('description', draftToHtml(convertToRaw(editorState.getCurrentContent())));
    images.forEach((img) => data.append('images', img));

    if (pid) {
      if (!title || !price || !discount || !category || !quantity) {
        toast.warning('All the field is required');
      } else {
        updateProduct(pid, data);
      }
    } else if (!title || !price || !discount || !category || !quantity || image === null) {
      toast.warning('All the field is required');
    } else {
      createProduct(data);
    }
  };

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <AdminLayout>
      <div id="createProduct">
        <h3 className="as-heading">Add New Category</h3>

        <form onSubmit={submitHdl} encripttype="multipart/form-data" className="form">
          <InputGroup
            type="text"
            name="title"
            placeholder="Enter product title"
            label="Enter product title"
            onChange={onChangeHdl}
            value={title}
          />

          <InputGroup
            type="number"
            name="price"
            placeholder="Enter product price"
            label="Enter product price"
            onChange={onChangeHdl}
            value={price}
          />

          <InputGroup
            type="number"
            name="discount"
            placeholder="Enter product discount"
            label="Enter product discount"
            onChange={onChangeHdl}
            value={discount}
          />

          <InputGroup
            type="number"
            name="quantity"
            placeholder="Enter product quantity"
            label="Enter product quantity"
            onChange={onChangeHdl}
            value={quantity}
          />

          {cats.length > 0 && (
            <div className="input-group mb-3">
              <select name="category" value={category} onChange={onChangeHdl}>
                <option value="">Select A Category</option>
                {cats.map((cat) => (
                  <option key={Math.random()} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <InputGroup
            type="file"
            name="image"
            placeholder="Enter product image"
            label="Enter product image"
            onChange={onChangeHdlImg}
          />

          <p className="mb-2">
            <label htmlFor="images">Enter product images</label>
          </p>
          <div className="input-group mb-3">
            <input type="file" name="images" onChange={onChangeHdlImgs} multiple />
          </div>

          <InputGroup
            type="text"
            name="shortDescription"
            placeholder="Enter product short description"
            label="Enter product short description"
            onChange={onChangeHdl}
            value={shortDescription}
          />

          <p className="mb-2">
            <label htmlFor="details">Enter product details</label>
          </p>
          <div className="pd-wrap mb-3">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>

          <p className="mb-3">
            <label htmlFor="checkobx">Featured Product </label>
            <input type="checkbox" name="featured" onChange={onChangeHdl} checked={featured} />
          </p>

          <Button type="submit" classes="submit-btn">
            {pid ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
        <ToastContainer />
      </div>
    </AdminLayout>
  );
}

export default CreateProduct;
