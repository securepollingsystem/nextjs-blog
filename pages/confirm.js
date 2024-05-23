import { getItem } from '../src/db';
import router from 'next/router';
import { useRouter } from 'next/router';


export default () => {
  const { query } = useRouter();
  if (!query.id) {
      return null;
  }

  const onCancel = () => router.push('/');

  const onConfirm = () => router.push(`?whatareyoudoing&id=${query.id}`);

  const { title } = getItem(query.id);

  return (
    <>
      <div>Do you want to add this statement to your screed?</div>
      <div>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button></div>
      <div>{title}</div>
    </>
  );
}
