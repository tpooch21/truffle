import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import Layout from "../../components/Layout/Layout";
import fire from "../../firebaseConfig";
import { getAllGroupData } from "../../lib/groups";

const BoardsPage = () => (
  <Layout>
    <BoardsContainer />
  </Layout>
);

export default BoardsPage;
