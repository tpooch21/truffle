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
  const paths = getAllBoardIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const boardData = getBoardById(params.id);
  return {
    props: {
      boardData: boardData.currentBoard,
    },
  };
}

export default Board;
