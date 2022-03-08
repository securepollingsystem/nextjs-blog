import { getItem } from '../src/db';
import { useRouter } from 'next/router';


export default () => {
  const { query } = useRouter();
  if (!query.id) {
      return null;
  }

  const { title } = getItem(query.id);

  return (
    <>
      <div>Do you want to add this statement to your screed?</div>
      <div><button>Confirm</button><button>Cancel</button></div>
      <div>{title}</div>
    </>
  );
}