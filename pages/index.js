import { getItems, getSubset } from '../src/db';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import * as SPSClient from 'sps-client';
// TODO: sps-client needs eccrypto added to its package.json in order to work?
// console.log(SPSClient);

export default function Home() {
  const [searchstring, setSearchstring] = useState("");
  const router = useRouter();

  const onClickRow = function(item) {    //const onClickRow = (item) => {
    router.push(`confirm?id=${item.id}`);//  router.push(`confirm?id=${item.id}`);
  }                                      //};

  var subset = getSubset(searchstring.toLowerCase());

  // returning JSX
  console.log(subset.length);
  if (subset.length === 0) {
    return (<div>
    <h4>SECURE POLLING DEMO</h4>
    <br />
    <input value={searchstring} onChange={e => setSearchstring(e.target.value)}/>
    <div onClick={() => onClickRow({title:"fdgh", id:"-1"})} key="id" // TODO: modify onClickRow to work with actual opinion rather than item ID
      style={{
            "display": "flex",
            "justifyContent": "space-between",
            "borderBottom": "1px solid red"
          }}> click this to add {searchstring} to your screed</div>
    </div>);
  } else {
    return (<div>
    <h4>Secure Polling Demo</h4>
    <br />
    <input value={searchstring} onChange={e => setSearchstring(e.target.value)}/>
    {
      subset.map((item) =>
        <div
          onClick={() => onClickRow(item)}
          key={item.id} // react uses the key to keep track of DOM so must be unique
          style={{
            "display": "flex",
            "justifyContent": "space-between",
            "borderBottom": "1px solid black"
          }}> {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
          <div>{item.title}</div>
          <div style={{ "minWidth": "3em" }}>{item.percent}</div>
        </div>
      )
    }

  </div>);
  }
}
