import { useAppSelector } from "@/stores";
import { useState, useEffect } from "react";

const useBookFilters = () => {
  const selected = useAppSelector((state) => state.shelf.selected);
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
    } else if (selected === "All") {
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

  return queryFilter;
};

export default useBookFilters;
