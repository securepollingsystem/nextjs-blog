var stuff = [ 
	{id: 1, title:"BART should be free for everyone", percent:43},
	{id: 2, title:"Jake is pretty neat", percent:44},
	{id: 3, title:"JavaScript Thursdays is amazing", percent:45},
];

export const getItem = (id) => stuff.find(s => s.id == id);
export const getItems = () => stuff;
