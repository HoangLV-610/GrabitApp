import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationCustom = ({
  typeList,
  allList,
  pageCurrent,
  handleNextPage,
  handlePrevPage,
  prevRef,
  nextRef,
}) => {
  const perpage = typeList === "product" ? 9 : 6;
  const totalPages = Math.ceil(allList.length / perpage);

  return (
    <>
      {/* Custom Navigation */}
      <div className="wrap-navigation flex justify-between items-center pt-[15px] mt-[24px] border-t border-t-light-gray">
        <span>
          Showing {(pageCurrent - 1) * perpage + 1}-
          {Math.min(pageCurrent * perpage, allList.length)} of {allList.length}{" "}
          item(s)
        </span>
        <div className="flex items-center gap-x-[5px] text-[16px] font-light">
          <button
            onClick={handlePrevPage}
            ref={prevRef}
            disabled={pageCurrent === 1}
            className={`btn-prev w-auto px-[10px] text-white bg-main leading-[30px] rounded-[5px] cursor-pointer flex items-center mt-[1px] ${
              pageCurrent === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {pageCurrent > 1 && (
              <ChevronLeft size={14} className="mr-[6px] mt-[1px]" />
            )}
            Prev
          </button>
          <span className="w-auto px-[13px] text-white bg-main leading-[30px] rounded-[5px]">
            {pageCurrent}
          </span>
          <button
            onClick={handleNextPage}
            ref={nextRef}
            disabled={pageCurrent === totalPages}
            className={`btn-next w-auto px-[13px] text-white bg-main leading-[30px] rounded-[5px] cursor-pointer flex items-center mt-[1px] ${
              pageCurrent === totalPages ? "opacity-50 !cursor-not-allowed" : ""
            }`}
          >
            Next
            {pageCurrent < totalPages && (
              <ChevronRight size={14} className="ml-[6px] mt-[1px]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationCustom;
