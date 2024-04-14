import React from 'react'
import Spinner from '../Spinner'
// import MediumNews from './MediumNews/MediumNews';
import MediumNews from './MediumNewsMarket/MediumNews';
import { useState } from 'react';
import { useEffect } from 'react';
import global_styles from '../style.module.css'

function CategoryMarket() {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [pageSize, setPageSize] = useState(8);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // console.log(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc63282eb86f4136ac0ba3a95dd48b5e&page=${page}&pageSize=${pageSize}${props.sortBy!=undefined?`&sortBy=${props.sortBy}`: ""}${props.category!=undefined?`&q=${props.category}`: ""}`)

    function fetchArticles() {
        fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=44LQI72YSQIWWFJ6`).then((res) => {
            if (res.ok) {
                return res.json()
            }
            
        }).then(res=>{
            setData(res);
            setLoaded(true);
            setTotalResults(Number(res.items))
            console.log(res);
        })
    }

    
    useEffect(() => {
        fetchArticles();
    }, []);
  return (
    <div className={global_styles.main}>
            {/* {!loaded && <Spinner />} */}
            {/* {totalResults>0 && data.feed.map(item => { */}
                 {/* return <MediumNews article={item} /> */}
            {/* })} */}
           
        </div>
  )
}

export default CategoryMarket
