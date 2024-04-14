import React from 'react'
import styles from './style.module.css'
import global_styles from '../../style.module.css'

export default function MediumNews(props) {
  function go_to_news(){
    window.location.href = props.article.url;
  }
  
//   console.log(props.article)
  return (
    <div className={`${styles.main_container} ${global_styles.clickable}`} onClick={props.article===undefined?null:go_to_news}>
       <img className={styles.image} src={props.article !=undefined && props.article.banner_image} />
      <div className={global_styles.content}>
        <div className={styles.title}>{props.article !=undefined&&props.article.title }</div>
        <div className={styles.description}>{props.article!=undefined && props.article.summary !=null? props.article.summary.substring(0, 80)+"...": ""}</div>
      </div>
    </div>
  )
}
