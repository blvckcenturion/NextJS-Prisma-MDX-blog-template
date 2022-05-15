import styles from '../styles/components/Article.module.scss'

export default function ArticleHeading({ title, publishedAt, image, description }) {
  
  return (
    <div className={styles.article}>
      <div>
        <h3>{title}</h3> 
        <p>{publishedAt}</p>
      </div>
      <div>
        <p>{ description }</p>
      </div>
    </div>
  )
}