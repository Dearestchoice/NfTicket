// this is where you'd implement some pagination logic like whether a next page is available, which can then be imported to the DataTable

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
  showPreviousNext,
}: PaginatorProps) {
  return (
    <Pagination>
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              // disabled={currentPage - 1 < 1}
            />
          </PaginationItem>
        ) : null}
        {generatePaginationLinks(currentPage, totalPages, onPageChange)}
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              // disabled={currentPage > totalPages - 1}
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}

// this implementation can be a bit jumpy for larger tables, but should be good for most and easily adaptable if not
// this file is where your logic for how when ellipses are shown and other fiddly bits

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  const pages: JSX.Element[] = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis />);
      pages.push(
        <PaginationItem key={currentPage}>
          <PaginationLink
            onClick={() => onPageChange(currentPage)}
            isActive={true}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pages.push(<PaginationEllipsis />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pages;
};
