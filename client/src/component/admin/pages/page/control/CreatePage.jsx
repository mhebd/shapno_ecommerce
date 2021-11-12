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
import { usePage } from '../../../../../context/page/PageProvider';
import Button from '../../../../user/reusable/Button';
import InputGroup from '../../../../user/reusable/InputGroup';
import AdminLayout from '../../../common/AdminLayout';

function CreateProduct({ location }) {
  const { slug } = queryString.parse(location.search);
  const [title, setTitle] = useState('');

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state) => {
    setEditorState(state);
  };

  const { createPage, getPage, updatePage, page, message } = usePage();

  useEffect(() => {
    if (slug) getPage(slug);
  }, [slug]);

  useEffect(() => {
    if (slug && page) {
      setTitle(page.title);
      if (page?.content) {
        const blocksFromHtml = htmlToDraft(page?.content);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        setEditorState(EditorState.createWithContent(contentState));
      }
    }
  }, [page]);

  const onChangeHdl = (e) => {
    setTitle(e.target.value);
  };

  const submitHdl = (e) => {
    e.preventDefault();

    if (!title || !(draftToHtml(convertToRaw(editorState.getCurrentContent())).length > 10)) {
      toast.warning('All the field is required');
    } else if (slug) {
      updatePage(slug, {
        title,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      });
    } else {
      createPage({
        title,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      });
    }
  };

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <AdminLayout>
      <div id="createPage">
        <h3 className="as-heading">Add New Page</h3>

        <form onSubmit={submitHdl} encripttype="multipart/form-data" className="form">
          <InputGroup
            type="text"
            name="title"
            placeholder="Enter Page title"
            label="Enter Page title"
            onChange={onChangeHdl}
            value={title}
          />

          <p className="mb-2">
            <label htmlFor="details">Enter Page Content</label>
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

          <Button type="submit" classes="submit-btn">
            {slug ? 'Update Page' : 'Create Page'}
          </Button>
        </form>
        <ToastContainer />
      </div>
    </AdminLayout>
  );
}

export default CreateProduct;
