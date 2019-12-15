import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component'

import './category.styles.scss';

const CategoryPage = ({match}) => {
  console.log(match.params.categoryId)
  return(
    <div className='category'>
      <h1>CATEGORY PAGE</h1>
    </div>
  )
}

export default CategoryPage;