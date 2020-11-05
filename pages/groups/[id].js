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
  const paths = await getAllGroupIds();
  console.log("Paths => ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const groupData = await getGroupDataById(params.id);
  const group = [];
  group.push({
    ...groupData.group,
    key: groupData.group.name,
  });

  return {
    props: {
      group,
    },
  };
}

export default Group;
