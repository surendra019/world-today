import React from 'react'
import BigNews from '../BigNews/BigNews';
import global_styles from './style.module.css';
import SmallNews from '../SmallNews/SmallNews';
import styles from './style.module.css'
import {useEffect} from 'react';

export default function Section1(props) {

  return (
    <div className={styles.section1}>
      {Object.keys(props.data).length==0 ?<BigNews/>: <BigNews article={ props.data["articles"][0].title =='[Removed]'? {}:props.data["articles"][0]}/>}
      <div className={styles.small_news_container}>
      {Object.keys(props.data).length==0 ?<SmallNews/>:<SmallNews article={ props.data["articles"][1].title =='[Removed]'? {}:props.data["articles"][1]}/>}
      {Object.keys(props.data).length==0? <SmallNews/>: <SmallNews article={props.data["articles"][2].title =='[Removed]'? {}:props.data["articles"][2]}/>}
      {Object.keys(props.data).length==0 ? <SmallNews/>: <SmallNews article={props.data["articles"][3].title =='[Removed]'? {}:props.data["articles"][3]}/>}
      {Object.keys(props.data).length==0 ?<SmallNews/>: <SmallNews article={props.data["articles"][4].title =='[Removed]'? {}:props.data["articles"][4]}/>}
      </div>
     
    </div>
  )
}
