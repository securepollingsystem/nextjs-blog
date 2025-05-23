// import { getItems, getSubset } from '../src/db';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head"; // this is needed to be able to add a css style to the <head> of the document, for :hover

// import * as SPSClient from 'sps-client';
// TODO: sps-client needs eccrypto added to its package.json in order to work?
// console.log(SPSClient);

const getSubset = async (searchText) => {
  const res = await fetch(
    `http://stemgrid.org:8993/opinions?subset=%${searchText}%`
  ).catch((e) => {
    console.log(e);
  });
  console.log(
    "url:",
    `http://stemgrid.org:8993/opinions?subset=%${searchText}%`
  );

  if (!res.ok) {
    throw new Error(`Network response was not ok. Status: ${res.status}`);
  }

  const data = await res.json();

  console.log("fetched opinions:", data.length);

  return data;
};

const Home = () => {
  const [searchString, setSearchString] = useState(""); // returns the value and a function to update the value (initially "")
  const [subset, setSubset] = useState([]);
  const router = useRouter();

  const onClickRow = (item) => router.push(`confirm?id=${item.id}`);

  if (typeof window !== 'undefined') {
    const storedScreed = localStorage.getItem("myScreed");
    if (storedScreed) {
      var loadedScreed = JSON.parse(storedScreed);
    } else {
      console.log("storedScreed not found");
      var loadedScreed = [{id: 4, opinion: 'client side rendered', screed_count: 45, updated_at: 1739428537840}];
    }
  } else {
    var loadedScreed = [{id: 4, opinion: 'server side render', screed_count: 45, updated_at: 1739428537840}];
  }
  console.log(loadedScreed); // this shows up on the server console for the prerender

  useEffect(() => {
    getSubset(searchString.toLowerCase()).then(setSubset);
  }, [searchString]); // searchString is what it watches and reloads the fetch on changes!!!!!!!

  // returning JSX
  //console.log('what is subset', subset); // looks like json
  return (
    <div>
      <Head>
        <style>{` .hover-effect:hover { font-weight:bold; background-color: #00ff00; /* Background color on hover */ } `}</style>
      </Head>
      <h4>Secure Polling Demo</h4>
      <br />
      {loadedScreed.map((item) => (
        <div
          key={"myScreed"+item.id} // react uses the key to keep track of DOM so must be unique
          className="hover-effect"
          style={{
            display:
              "flex" /* this is so that the percentage appears after the phrase, on the same line */,
            cursor: "pointer",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
          }}
          >
          {" "}
          <div suppressHydrationWarning>{item.opinion}</div>
          <div suppressHydrationWarning style={{ fontWeight: "bold", minWidth: "3em" }}>
            {item.screed_count}
          </div>
        </div>
      ))}
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      {subset.length === 0 ? (
        <div
          onClick={() => onClickRow({ title: "fdgh", id: "-1" })}
          key="compose"
          className="hover-effect"
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid red",
          }}
        >
          click this to add {searchString} to your screed
        </div>
      ) : (
        subset.map((item) => (
          <div
            onClick={() => onClickRow(item)}
            key={item.id} // react uses the key to keep track of DOM so must be unique
            className="hover-effect"
            style={{
              display:
                "flex" /* this is so that the percentage appears after the phrase, on the same line */,
              cursor: "pointer",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
            <div>{item.opinion}</div>
            <div style={{ fontWeight: "bold", minWidth: "3em" }}>
              {item.screed_count}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
