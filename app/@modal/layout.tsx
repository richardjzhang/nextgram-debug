"use client";

import { PropsWithChildren } from "react";
import { Modal } from "./modal";

const Layout = ({ children }: PropsWithChildren) => {
  return <Modal>{children}</Modal>;
};

export default Layout;
