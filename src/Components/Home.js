import React from 'react'
import global_styles from '../style.module.css'
import Section1 from './Sections/Section1'
import { useEffect } from 'react'
import { useState } from 'react'
import Section2 from './Sections/Section2'
import Spinner from '../Spinner'

export default function Home() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(15);
// console.log(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc63282eb86f4136ac0ba3a95dd48b5e&page=${page}&pageSize=${pageSize}`)
  function fetchArticles(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=dc63282eb86f4136ac0ba3a95dd48b5e&page=${page}&pageSize=${pageSize}`).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw res;
    }).then((d) => {
      setData(d);

        setLoaded(true)
      // console.log(data)
      setTotalResults(d.totalResults);
      // console.log(totalResults)
    }).catch(err => {
      console.log(err);
    })
  }
  function nextPage() {
    setLoaded(false);
    setPage(page + 1);
fetchArticles();
  //  console.log(page);

  }
  function prevPage() {
    setLoaded(false)
    setPage(page - 1);
    fetchArticles();
  }

  useEffect(() => {
    setPage(1);
    fetchArticles();
  }, [])
  return (
    <div className={global_styles.main}>
      {!loaded && <Spinner />}
      <Section1 data={data} />
      <Section2 data={data} />
      <div style={{ "display": "flex", "justifyContent": "space-between", "width": "70%", "alignSelf": 'center', "marginTop": "90px" }}>
        <button disabled={page <= 1} onClick={prevPage} className='btn btn-secondary'>previous</button>
        <button disabled={page >= Math.ceil(totalResults / pageSize)} onClick={nextPage} className="btn btn-primary">next</button>
      </div>
    </div>
  )
}
