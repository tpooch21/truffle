import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import Layout from "../../components/Layout/Layout";
import fire from "../../firebaseConfig";
import { getAllGroupData } from "../../lib/groups";

const BoardsPage = ({ groups }) => (
  <Layout>
    <BoardsContainer groups={groups} />
  </Layout>
);

// This fetches initial data on server sie when /boards route is visited
export async function getStaticProps(context) {
  const groups = await getAllGroupData();
  return {
    props: {
      groups,
    },
  };
}

export default BoardsPage;
