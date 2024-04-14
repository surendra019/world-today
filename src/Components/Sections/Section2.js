import React from 'react'
import styles from './style.module.css'
import MediumNews from '../MediumNews/MediumNews'

export default function Section2(props) {

  function go_to_news(){
    window.location.href = props.article.url;
  }
  // console.log(props.data.articles)
console.log(props.data.articles)
  return (
    <div className={styles.section2}>
      
       {props.data.articles === undefined? <div></div> :props.data.articles.map((item)=>{
        if(props.data.articles.indexOf(item)>4){
          return(<MediumNews key = {item.urlToImage} article={item.title != '[Removed]' ? item: {}}/>)
        }
        
      })}
      
    </div>
  )
}
