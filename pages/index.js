import { getItems } from '../src/db';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();

  const onClickRow = (item) => {
    router.push(`confirm?id=${item.id}`);
  };

  return (<div>
    {
      getItems().map((item) =>
	  <div
	    onClick={() => onClickRow(item)}
	    key={item.title}
	    style={{
	      display: "flex",
	      "justify-content": "space-between"
	    }}> {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
      <div>{item.title}</div>
      <div style={{ "min-width": "3em", border: "1px solid blue" }}>{item.percent}</div>
    </div>
      )
    }

  </div>);
}
