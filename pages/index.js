// import { getItems, getSubset } from '../src/db';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head'; // this is needed to be able to add a css style to the <head> of the document, for :hover

// import * as SPSClient from 'sps-client';
// TODO: sps-client needs eccrypto added to its package.json in order to work?
// console.log(SPSClient);

export default function Home() {
  const [searchstring, setSearchstring] = useState(""); // returns the value and a function to update the value (initially "")
  const [subset, setSubset] = useState([]);
  const router = useRouter();

  const onClickRow = function(item) {    //const onClickRow = (item) => {
    router.push(`confirm?id=${item.id}`);//  router.push(`confirm?id=${item.id}`);
  }                                      //};

  useEffect(() => {
    async function getSubset(searchText) {
      const res = await fetch(`http://stemgrid.org:8993/opinions?subset=%${searchText}%`).catch(e => {console.log(e)});
      console.log('url:',`http://stemgrid.org:8993/opinions?subset=%${searchText}%`);

      if (!res.ok) {
        throw new Error(`Network response was not ok. Status: ${res.status}`);
      }

      const data = await res.json();

      console.log('fetched opinions:', data.length);

      return data;
    }
    getSubset(searchstring.toLowerCase()).then(setSubset)
  }, [searchstring]); // searchstring is what it watches and reloads the fetch on changes!!!!!!!

  // returning JSX
  //console.log('what is subset', subset); // looks like json
  if (subset.length === 0) {
    return (<div>
      <Head>
        <style>{` .hover-effect:hover { font-weight:bold; background-color: #00ff00; /* Background color on hover */ } `}</style>
      </Head>
    <h4>SECURE POLLING DEMO</h4>
    <br />
    <input value={searchstring} onChange={e => setSearchstring(e.target.value)}/>
    <div onClick={() => onClickRow({title:"fdgh", id:"-1"})} key="id" // TODO: modify onClickRow to work with actual opinion rather than item ID
      className="hover-effect"
      style={{
            "display": "flex",
            "justifyContent": "space-between",
            "borderBottom": "1px solid red"
          }}> click this to add {searchstring} to your screed</div>
    </div>);
  } else {
    return (
      <div>
      <Head>
        <style>{` .hover-effect:hover { font-weight:bold; background-color: #00ff00; /* Background color on hover */ } `}</style>
      </Head>
    <h4>Secure Polling Demo</h4>
    <br />
    <input value={searchstring} onChange={e => setSearchstring(e.target.value)}/>
    {
      subset.map((item) =>
        <div
          onClick={() => onClickRow(item)}
          key={item.id} // react uses the key to keep track of DOM so must be unique
          className="hover-effect"
          style={{
            "display": "flex", /* this is so that the percentage appears after the phrase, on the same line */
            "cursor":"pointer",
            "justifyContent": "space-between",
            "borderBottom": "1px solid black"
          }}> {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
          <div>{item.opinion}</div>
          <div style={{ "fontWeight":"bold", "minWidth": "3em" }}>{item.screed_count}</div>
        </div>
      )
    }

  </div>);
  }
}
