import { getItems, getSubset } from '../src/db';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as SPSClient from 'sps-client';
console.log(SPSClient);

export default function Home() {
  const [searchstring, setSearchstring] = useState("");
  const router = useRouter();

  const onClickRow = function(item) {    //const onClickRow = (item) => {
    router.push(`confirm?id=${item.id}`);//  router.push(`confirm?id=${item.id}`);
  }                                      //};

  return (<div>
    <h4>Secure Polling Demo</h4>
    <br />
    <input value={searchstring} onChange={e => setSearchstring(e.target.value)}/>
    {
      getSubset(searchstring.toLowerCase()).map((item) =>
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
