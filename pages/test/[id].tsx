import { GetStaticPaths, GetStaticProps } from "next";
import React, { VFC } from "react";

type Props = {
  id: string;
};

const IdPage: VFC<Props> = ({ id }) => <pre>My id is: {id}</pre>;

export default IdPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "AAA" } }, { params: { id: "aaa" } }];
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = (context.params?.id as string) || "";
  return {
    props: {
      id,
    },
  };
};
