import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
        {categories.map(category => (
          <CategoryItem title={category.id} category={category.imageUrl} />
        ))}
      </div>
  )
}

export default Categories;