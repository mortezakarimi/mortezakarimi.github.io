"use client";

import { useEffect } from "react";
import { ErrorPage } from "@/components/error/ErrorPage";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorPage code={500} reset={reset} />;
}
