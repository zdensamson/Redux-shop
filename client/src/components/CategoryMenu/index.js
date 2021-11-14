import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

// redux imports:
import {useSelector, useDispatch} from "react-redux";
import { updateCategories, updateCurrentCategory } from '../../Redux/actionCreators';

function CategoryMenu() {

  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();


  const { data: categoryData, loading } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch(updateCategories(categoryData.categories)); 

      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categoriesData => {
        dispatch(updateCategories(categoryData.categories)); 
      });
    }
  }, [categoryData, dispatch, loading]);

  const handleClick = (id) => {
    dispatch(updateCurrentCategory(id));
  };


  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;