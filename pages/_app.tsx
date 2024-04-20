import "../styles/chatbox.css";

import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import React from "react";

const ChatBoxWidget = dynamic({
  loader: () => import("../components/widget/index"),
  ssr: false,
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Component {...pageProps} />
      <ChatBoxWidget />
    </>
  );
}
