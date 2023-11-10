import { useAppSelector } from "@/stores";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";
const useBookFilters = () => {
  const selected = useAppSelector((state) => state.shelf.selected);
  const params = useSearchParams();
  const currentQuery = qs.parse(params.toString());
  const [queryFilter, setQueryFilter] = useState({});

  useEffect(() => {
    if (selected === "Unshelved") {
      setQueryFilter({
        where: {
          shelves: {
            none: {}, // Checks if the shelves array is empty
          },
        },
      });
    } else if (selected === "All Books") {
      setQueryFilter({});
    } else {
      setQueryFilter({
        where: {
          shelves: {
            some: {
              shelf: {
                is: {
                  name: {
                    equals: selected,
                  },
                },
              },
            },
          },
        },
      });
    }
  }, [selected]);

  return { queryFilter, setQueryFilter };
};

export default useBookFilters;
