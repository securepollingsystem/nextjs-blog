import { getItem } from '../src/db';
import router from 'next/router';
import { useRouter } from 'next/router';


export default () => {
  const { query } = useRouter();
  if (!query.id) {
      return null;
  }

  const onCancel = () => router.push('/');

  const { title } = getItem(query.id);

  return (
    <>
      <div>Do you want to add this statement to your screed?</div>
      <div>
        <button>Confirm</button>
        <button onClick={onCancel}>Cancel</button></div>
      <div>{title}</div>
    </>
  );
}