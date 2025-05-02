// import { getItems, getSubset } from '../src/db';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head"; // this is needed to be able to add a css style to the <head> of the document, for :hover
import Modal from "../components/Modal";

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

  var data = []

  try {
    if (!res.ok) {
      throw new Error(`Network response was not ok. Status: ${res.status}`);
    }
    data = await res.json();
  } catch(error) {
    console.log('could not try if !res.ok', error);
    if (searchText == '') {
      data = [ {id:0,opinion:'no data was returned from the server',screed_count:53} ];
    }
  }

  console.log("fetched opinions:", data.length);

  return data;
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchString, setSearchString] = useState(""); // returns the value and a function to update the value (initially "")
  const [subset, setSubset] = useState([]);
  const [modalData, setModalData] = useState({title : "title", children : "slkdfjslkdfjsldkfj"});

  const router = useRouter();

  const onClickRow = (item) => router.push(`confirm?id=${item.id}`);

  function addThisOpinion(opinion) {
    loadedScreed.push(opinion);
    localStorage.setItem("myScreed",JSON.stringify(loadedScreed));
    setShowModal(false);
    console.log(loadedScreed); // this works but loadedScreed goes back to its original definition from line 69
  }

  function clearMyScreedModal() {
    var Buttons = () => (<div>
      <button onClick={() => {
        loadedScreed = [''];
        localStorage.setItem("myScreed",JSON.stringify(loadedScreed));
        setShowModal(false);
      } }>yes Clear My Screed</button>
      <button onClick={() => setShowModal(false)}>Cancel</button></div>);

    setModalData({title : "You are about to clear out your whole screed!",
    children : <div><Buttons /></div>});
    setShowModal(true);
  }

  function deleteThisOpinionModal(opinion) {
    var Buttons = () => (<div>
      <button onClick={() => {
        loadedScreed = loadedScreed.filter(item => item !== opinion); // remove this opinion
        localStorage.setItem("myScreed",JSON.stringify(loadedScreed));
        setShowModal(false);
      } }>remove from my screed</button>
      <button onClick={() => setShowModal(false)}>Cancel</button></div>);

    setModalData({title : "Do you want to REMOVE this opinion from your screed?",
    children : <div><div>{opinion}</div><Buttons /></div>});
    setShowModal(true);
  }

  function bringUpAddThisModal(opinion) {
    if (loadedScreed.indexOf(opinion) >= 0) {
      var Buttons = () => (<div>
        <button onClick={() => setShowModal(false)}>Oops sorry</button></div>);
      setModalData({title : "You already have this opinion in your screed!",
      children : <div><div>{opinion}</div><Buttons /></div>});
    } else {
      var Buttons = () => (<div>
        <button onClick={() => addThisOpinion(opinion)}>Confirm</button>
        <button onClick={() => setShowModal(false)}>Cancel</button></div>);
      setModalData({title : "Do you want to add this opinion to your screed?",
      children : <div><div>{opinion}</div><Buttons /></div>});
    }

    // TODO: see if we already have it and behave accordingly
    // TODO: add a button to do what you're being asked to do
    // TODO: hook escape key to close modal
    setShowModal(true);
  }

  if (typeof window !== 'undefined') {
    const storedScreed = localStorage.getItem("myScreed");
    if (storedScreed) {
      try {
        var loadedScreed = JSON.parse(storedScreed);
      } catch(error) {
        console.log(error);
        var loadedScreed = ['json parse error'];
      }
    } else {
      console.log("storedScreed not found");
      var loadedScreed = ['client side rendered'];
    }
  } else {
    var loadedScreed = ['server side render'];
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
      <div style={{
        display: "flex"
          }}>
        <h1>Your Screed:</h1>
        <button onClick={() => clearMyScreedModal()}>Clear my screed!</button>
      </div>
      {loadedScreed.map((item) => (
        <div
          onClick={() => deleteThisOpinionModal(item)}
          key={item} // react uses the key to keep track of DOM so must be unique
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
          <div suppressHydrationWarning>{item}</div>
          <div suppressHydrationWarning style={{ fontWeight: "bold", minWidth: "3em" }}>
            {item.screed_count}
          </div>
        </div>
      ))}
      <div>
        {showModal &&
            <Modal onClose={() => setShowModal(false)} title={modalData.title}>
                {modalData.children}
            </Modal>
        }
      </div>
    <div style={{
        display: "flex"
          }}>
    <h1>Search text:</h1>
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </div>
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
            onClick={() => bringUpAddThisModal(item.opinion)}
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
