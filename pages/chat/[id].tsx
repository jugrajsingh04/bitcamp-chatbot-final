import dynamic from "next/dynamic";
import React from "react";

const ChatBoxAdmin = dynamic({
  loader: () => import("../../components/admin/index"),
  ssr: false,
});

export default function () {
  return <ChatBoxAdmin />;
}
