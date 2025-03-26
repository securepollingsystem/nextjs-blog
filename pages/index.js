// import { getItems, getSubset } from '../src/db';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head'; // this is needed to be able to add a css style to the <head> of the document, for :hover

// import * as SPSClient from 'sps-client';
// TODO: sps-client needs eccrypto added to its package.json in order to work?
// console.log(SPSClient);

async function getSubset(searchText) {
  const res = await fetch(`http://stemgrid.org:8993/opinions?subset=%worth%`).catch(e => {console.log(e)});

  if (!res.ok) {
    throw new Error(`Network response was not ok. Status: ${res.status}`);
  }

  //console.log('Response:', res);

  const data = await res.json();

  console.log('Parsed Data:', data);

  return data;
}

export default function Home() {
  const [searchstring, setSearchstring] = useState(""); // returns the value and a function to update the value (initially "")
  const router = useRouter();

  // https://search.brave.com/search?q=in+nextjs+how+do+i+use+fetch+to+load+data+from+an+api&source=web&summary=1&conversation=c8010b75d138ab531b04c2
  //fetch('http://stemgrid.org:8993/opinions?subset=%worth%').then(response => response.json()).then(jj => console.log(jj)).catch(e => {console.log(e)});

  const onClickRow = function(item) {    //const onClickRow = (item) => {
    router.push(`confirm?id=${item.id}`);//  router.push(`confirm?id=${item.id}`);
  }                                      //};

  var subset = getSubset(searchstring.toLowerCase())

  // returning JSX
  console.log('what is subset', subset); // looks like json
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
    console.log('subset is',subset);
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
            "justifyContent": "space-between",
            "borderBottom": "1px solid black"
          }}> {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
          <div>{item.opinion}</div>
          <div style={{ "font-weight":"bold", "minWidth": "3em" }}>{item.screed_count}</div>
        </div>
      )
    }

  </div>);
  }
}
