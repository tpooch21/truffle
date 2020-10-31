import Layout from "../../components/Layout/Layout";
import { getAllBoardIds } from "../../lib/boards";

const Board = () => (
  <Layout>
    <p>This will be a board with a specific ID</p>
  </Layout>
);

export async function getStaticPaths() {
  const ids = getAllBoardIds();
}

export default Board;
