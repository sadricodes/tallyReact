import React from "react";
import UserDirectoryCard from "./UserDirectoryCard";
import PageWrap from "../../layoutcomponents/PageWrap";
import MainTitles from "../../layoutcomponents/MainTitles";

const UserDirectoryPage = () => {
  return (
    <PageWrap>
      <MainTitles title="User Directory" />
      <div>
        This is where all the users will be listed along with some nifty stats!
        <div className="d-flex flex-wrap gap-3 mt-5">
          <UserDirectoryCard />
          <UserDirectoryCard />
          <UserDirectoryCard />
          <UserDirectoryCard />
        </div>
      </div>
    </PageWrap>
  );
};

export default UserDirectoryPage;
