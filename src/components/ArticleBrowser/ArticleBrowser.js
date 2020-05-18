import React from 'react'
import styles from './ArticleBrowser.module.scss'
import FeaturedPosts from './FeaturedPosts'
import PopularPosts from './PopularPosts'

export default function ArticleBrowser() {
  
  return (
    <div className={styles.root}>
      <FeaturedPosts />
      <PopularPosts />
    </div>
  )
}
