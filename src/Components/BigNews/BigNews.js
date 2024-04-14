import React from 'react'
import styles from './style.module.css';
import global_styles from '../../style.module.css'


export default function BigNews(props) {


  function go_to_news(){
    window.location.href = props.article.url;
  }
 
  return (
    <div className={`${global_styles.news_component} ${styles.main_container} ${global_styles.clickable}`} onClick={props.article===undefined?null:go_to_news}>
      <img className={styles.image} src={props.article!=undefined && props.article.urlToImage} />
      <div className={global_styles.content}>
        <div className={styles.title}>{props.article !=undefined && props.article.title }</div>
        
      </div>

    </div>
  )
}
