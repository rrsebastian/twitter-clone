import React, { useEffect } from "react";

const confirmDelete = ({
  onDeleteTweet,
  deleteTweet,
  setDeleteTweet,
  setShowExtraInfo,
}) => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (deleteTweet) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [deleteTweet]);

  const handleDelete = () => {
    onDeleteTweet();
    setShowExtraInfo(false);
  };

  return (
    <div className="fixed left-1/2 top-1/2 z-30 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-[32px]">
      <h1 className="mb-2 text-[20px] font-bold">Delete post?</h1>
      <p className="text-[15px] leading-5 text-[#536471]">
        This can’t be undone and it will be removed from your profile, the
        timeline of any accounts that follow you, and from search results.{" "}
      </p>
      <div className="mt-5 flex flex-col gap-[13px]">
        <button
          onClick={() => handleDelete()}
          className="rounded-full bg-[#F4212E] py-[10px] text-[15px] font-bold text-[white] transition-colors duration-[.25s] hover:bg-[#de1f2b]"
        >
          Delete
        </button>
        <button
          onClick={() => setDeleteTweet(false)}
          className="rounded-full border py-[10px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default confirmDelete;
