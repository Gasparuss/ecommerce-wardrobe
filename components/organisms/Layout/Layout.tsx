import { memo } from "react";
import { NextSeo } from "next-seo";
import { titleTemplate as defaultTitleTemplate } from "../../../pages/_app";
import { Loader } from "../Loader/Loader";
import { Modal } from "../../atoms/Modal/Modal";

type LayoutProps = {
  readonly children: React.ReactNode;
  readonly title?: string;
  readonly titleTemplate?: string;
};

export const Layout = memo<LayoutProps>(
  ({ children, title, titleTemplate = defaultTitleTemplate }) => {
    return (
      <>
        <NextSeo
          title={
            title ? titleTemplate.replace("%s", title) : titleTemplate.slice(4)
          }
          openGraph={{
            title: title
              ? titleTemplate.replace("%s", title)
              : titleTemplate.slice(4),
          }}
        />
        <Loader />
        <Modal />
        {children}
      </>
    );
  },
);

Layout.displayName = "Layout";
