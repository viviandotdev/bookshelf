import { getCurrentUser } from '@/lib/auth';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import HomeTemplate from '@/modules/home/templates';
import MarketingTemplate from '@/modules/marketing/templates';
import bestsellers from '@/modules/home/api/bestsellers';

export default async function IndexPage() {
  const user = await getCurrentUser();
  if (user) {
    const { shelves } = await getShelves();
    const { data: fiction } = await bestsellers('hardcover-fiction');
    const { data: nonfiction } = await bestsellers('hardcover-nonfiction');

    const currentlyReading = await getUserBooks({
      status: {
        equals: 'Currently Reading',
      },
    });
    const upNext = await getUserBooks({
      status: {
        equals: 'Up Next',
      },
    });

    return (
      <main className='container z-40 mx-auto max-w-[1440px] flex-1 p-0'>
        <HomeTemplate
          shelves={shelves}
          currentlyReading={currentlyReading}
          upNext={upNext}
          fiction={fiction}
          nonfiction={nonfiction}
        />
      </main>
    );
  } else {
    return <MarketingTemplate />;
  }
}
