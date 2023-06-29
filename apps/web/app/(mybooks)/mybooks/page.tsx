import { BookProgressCard } from "@/components/book-progress-card";
import { ContentNav } from "@/components/content-nav";
import { Pagination } from "@/components/pagination";
import { ProfileNav } from "@/components/profile-nav";
import { myBooksConfig } from "@/config/mybooks";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect, notFound } from "next/navigation";
import React from "react";

interface MyBooksPageProps {
  params: { bookId: string };
}

export default async function MyBooksPage({ params }: MyBooksPageProps) {
  const user = await getCurrentUser();
  const totalPages = 10;
  // const [currentPage, setCurrentPage] = React.useState(0);
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="grid w-full items-center mt-5">
      <ProfileNav items={myBooksConfig.profileNav} user={user} />
      <ContentNav
        nav={myBooksConfig.contentNav}
        sorting={myBooksConfig.sortingSelects}
      />
      <hr className="mt-1 border-t-1 border-primary" />
      <div className="mt-5">
        <div className="flex justify-between overflow-hidden flex-col md:flex-row m-0">
          <BookProgressCard />
          <BookProgressCard />
          <BookProgressCard />
        </div>
        <div className="flex justify-between overflow-hidden flex-col md:flex-row m-0">
          <BookProgressCard />
          <BookProgressCard />
          <BookProgressCard />
        </div>
        <div className="flex justify-between overflow-hidden flex-col md:flex-row m-0">
          <BookProgressCard />
          <BookProgressCard />
          <BookProgressCard />
        </div>
        <div className="flex justify-center">
          <Pagination
            totalPages={totalPages}
            // currentPage={currentPage}
            // setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
