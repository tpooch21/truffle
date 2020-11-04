// Group will display members and boards
// Just boards for now
import Layout from "../../components/Layout/Layout";
import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import { getAllGroupIds, getGroupDataById } from "../../lib/groups";

const Group = ({ group }) => (
  <Layout>
    <BoardsContainer groups={group} />
  </Layout>
);

export async function getStaticPaths() {
  const paths = getAllGroupIds();
  console.log("Logging paths => ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const groupData = getGroupDataById(params.id);
  return {
    props: {
      group: groupData.group,
    },
  };
}

export default Group;
