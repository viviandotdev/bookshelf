import { getCurrentUser } from '@/lib/auth';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import HomeTemplate from '@/modules/home/templates';
import MarketingTemplate from '@/modules/marketing/templates';
import { summary } from '@/modules/home/api/summary';

export default async function IndexPage() {
  const user = await getCurrentUser();
  if (user) {
    const { shelves } = await getShelves();

    const wantToRead = await getUserBooks({
      status: {
        equals: 'Want to Read',
      },
    });
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

    const summaryData = await summary();

    return (
      <main className='container z-40 mx-auto max-w-4xl flex-1  p-0 px-4 sm:px-6 lg:max-w-6xl xl:max-w-[1440px] xl:px-8'>
        <HomeTemplate
          shelves={shelves}
          username={user.username}
          wantToRead={wantToRead}
          currentlyReading={currentlyReading}
          upNext={upNext}
          summaryData={summaryData}
        />
      </main>
    );
  } else {
    return <MarketingTemplate />;
  }
}
