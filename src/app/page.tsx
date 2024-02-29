import { getPageContent } from '@/services/pages';

export default async function Home() {
  const response = await getPageContent();

  console.log(response);
  return (
    <div>{JSON.stringify(response)}</div>
  );
}
