import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import global_styles from '../style.module.css'
import Spinner from '../Spinner';
import MediumNews from './MediumNews/MediumNews';

function Category(props) {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [pageSize, setPageSize] = useState(8);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    console.log(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc63282eb86f4136ac0ba3a95dd48b5e&page=${page}&pageSize=${pageSize}${props.sortBy!=undefined?`&sortBy=${props.sortBy}`: ""}${props.category!=undefined?`&q=${props.category}`: ""}`)

    function fetchArticles() {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc63282eb86f4136ac0ba3a95dd48b5e&page=${page}&pageSize=${pageSize}${props.sortBy!=undefined?`&sortBy=${props.sortBy}`: ""}${props.category!=undefined?`&q=${props.category}`: ""}`).then((res) => {
            if (res.ok) {
                return res.json()
            }
            
        }).then(res=>{
            setData(res);
            setLoaded(true);
            setTotalResults(res.totalResults)
        })
    }
    function nextPage() {
        setLoaded(false);
        setPage(page + 1);
    fetchArticles();
    //    console.log(page);
    
      }
      function prevPage() {
        setLoaded(false)
        setPage(page - 1);
        fetchArticles();
      }
    
    useEffect(() => {
        fetchArticles();
    }, []);
    return (
        <div className={global_styles.main}>
            {!loaded && <Spinner />}
            {totalResults>0 && data.articles.map(item => {
                 return <MediumNews key= {item.url} article={item.title != '[Removed]' ? item: {}} />
            })}
            <div style={{ "display": "flex", "justifyContent": "space-between", "width": "70%", "alignSelf": 'center', "marginTop": "90px" }}>
        <button disabled={page <= 1} onClick={prevPage} className='btn btn-secondary'>previous</button>
        <button disabled={page >= Math.ceil(totalResults / pageSize)} onClick={nextPage} className="btn btn-primary">next</button>
      </div>
        </div>
    )
}

export default Category
