import Head from 'next/head'

var stuff = [ 
	{title:"somestring ds;lfkjasd fjalkfjhfds asdlkjfhsadfkgsadfk gsadfasdga kdsfgfgfaks hdfsagfagffkjas dsf sadfdf khdsf gasdkf", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
	{title:"somestring", percent:43},
	{title:"semestring", percent:44},
	{title:"sogestring", percent:45},
	{title:"somhstring", percent:48},
	{title:"someetring", percent:47},
	{title:"somessring", percent:46},
	{title:"somestding", percent:53},
]

export default function Home() {
  return (<div>
    {
      stuff.map((item) =>
	  <div
	    key={item.title}
	    style={{
	      display: "flex",
	      "justify-content": "space-between"
	    }}> {/* flex lets the following divs be on the same line */}
	  <div>{item.title}</div>
	  <div style={{ width: "3em" }}>{item.percent}</div>
	</div>
      )
    }

  </div>);
}
