// import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllBoardIds, getBoardById } from "../../lib/boards";
import fire from "../../firebaseConfig";

const Board = ({ boardData }) => (
  <Layout>
    <p>{boardData.title}</p>
  </Layout>
);

export async function getStaticPaths() {
  const paths = await getAllBoardIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch data for single board from firebase
  const boardData = await getBoardById(params.id);
  return {
    props: {
      boardData,
    },
  };
}

export default Board;
