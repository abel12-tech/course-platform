import type { ReactNode } from "react";
import Navbar from "../module/common/Navbar";

type Props = {
  children: ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">{children}</main>

    </div>
  );
};

export default PageWrapper;