import { getPageContent } from '@/services/pages';
import { Block } from './components/Block';

interface Props {
  params: {
    slug?: Array<string>
  }
}

export default async function Home({ params }: Props) {
  const pageContent = await getPageContent(`/${params.slug?.join('/') || ''}`);

  if (!pageContent) return (<>404!</>);

  return (
    <>
      { pageContent.sections.map(section => (
        <section key={section.id} className='flex flex-col gap-16 py-12 xl:py-24 xl:gap-20'>
          {
            section.block.map(block => (
              <Block key={block.id} block={block} />
            ))
          }
        </section>
      ))}
    </>
  );
}
