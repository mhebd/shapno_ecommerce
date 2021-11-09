/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useCategory } from '../../../../context/category/CategoryProvider';
import Button from '../../reusable/Button';
import MenuLink from '../../reusable/MenuLink';

function CatMenu() {
  const [allCats, setAllCats] = useState([]);

  const { categories, getCategories, isLoading } = useCategory();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllCats(categories);
  }, [categories]);

  return (
    <div className="cat-menu-wrap mr-3">
      <Button type="button" classes="cm-toggle-btn">
        Categories
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Button>

      <ul className="cat-menu">
        {!isLoading &&
          allCats.length > 0 &&
          allCats.map((cat) => (
            <MenuLink key={Math.random()} link={`/product/category/${cat._id}`}>
              {cat.name}
            </MenuLink>
          ))}
      </ul>
    </div>
  );
}

export default CatMenu;
