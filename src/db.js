
var stuff = [ // list of objects
	{id: 1, title:"BART should be free for everyone", percent:43},
	{id: 2, title:"Charles is pretty neat", percent:44},
	{id: 3, title:"JavaScript Thursdays is amazing", percent:45},
	{id: 4, title:"JAVASCRIPT THURSDAYS IS AMAZING", percent:45},
	{id: 5, title:"javascript thursdays is amazing", percent:45},
    {id: 6, title:"Catch a man a fish, and you can sell it to him. Teach a man to fish, and you ruin a wonderful business opportunity.", percent:69},
    {id: 7, title:"Landlords, like all other men, love to reap where they never sowed.", percent:32},
    {id: 8, title:"The production of too many useful things results in too many useless people.", percent:4},
    {id: 9, title:"Experience praises the most happy the one who made the most people happy.", percent:1},
    {id: 10, title:"Necessity is blind until it becomes conscious. Freedom is the consciousness of necessity.", percent:32},
    {id: 11, title:"Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people.", percent:100},
    {id: 12, title:"The human being is in the most literal sense a political animal, not merely a gregarious animal, but an animal which can individuate itself only in the midst of society.", percent:99},
    {id: 13, title:"Necessity is blind until it becomes conscious. Freedom is the consciousness of necessity.", percent:88},
    {id: 14, title:"We should not say that one man’s hour is worth another man’s hour, but rather that one man during an hour is worth just as much as another man during an hour. Time is everything, man is nothing: he is at the most time’s carcass.", percent:66},
    {id: 15, title:"The philosophers have only interpreted the world in various ways; the point, however, is to change it.", percent:55},
    {id: 16, title:"While the miser is merely a capitalist gone mad, the capitalist is a rational miser.", percent:11},
    {id: 17, title:"Capital is money, capital is commodities. By virtue of it being value, it has acquired the occult ability to add value to itself. It brings forth living offspring, or, at the least, lays golden eggs.", percent:22},
    {id: 18, title:"The only antidote to mental suffering is physical pain.", percent:75},
    {id: 19, title:"The writer may very well serve a movement of history as its mouthpiece, but he cannot of course create it.", percent:84},
    {id: 20, title:"The theory of the Communists may be summed up in the single sentence: Abolition of private property.", percent:90},
    {id: 21, title:"Civil servants and priests, soldiers and ballet-dancers, schoolmasters and police constables, Greek museums and Gothic steeples, civil list and services list – the common seed within which all these fabulous beings slumber in embryo is taxation.", percent:53},
    {id: 22, title:"The ideas of the ruling class are in every epoch the ruling ideas, i.e., the class which is the ruling material force of society, is at the same time its ruling intellectual force.", percent:30},
    {id: 23, title:"It is absolutely impossible to transcend the laws of nature. What can change in historically different circumstances is only the form in which these laws expose themselves.", percent:10},
    {id: 24, title:"Men make their own history.", percent:43},
    {id: 25, title:"Surround yourself with people who make you happy. People who make you laugh, who help you when you’re in need. People who genuinely care. They are the ones worth keeping in your life. Everyone else is just passing through", percent:23}
];

export const getItem = (id) => stuff.find(s => s.id == id);

export const getItems = () => stuff;

export const getSubset = (subtext) => stuff.filter(({title}) => title.toLowerCase().includes(subtext))
