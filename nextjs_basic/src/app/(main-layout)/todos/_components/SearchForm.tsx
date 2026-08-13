"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { debounce } from "../../utils/debounce";

export default function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        router.push(`${pathname}?q=${keyword}`);
      }, 500),
    [pathname, router]
  );

  return (
    <input type="search" placeholder="Search..." onChange={handleSearch} />
  );
}

