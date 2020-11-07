// Group will display members and boards
// Just boards for now
import Layout from "../../components/Layout/Layout";
import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import {
  getAllGroupIds,
  getGroupDataById,
  getAllGroupData,
} from "../../lib/groups";

const Group = ({ currentGroup, allGroups }) => (
  <Layout>
    <BoardsContainer currentGroup={currentGroup} groups={allGroups} />
  </Layout>
);

export async function getStaticPaths() {
  const paths = await getAllGroupIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentGroup = await getGroupDataById(params.id);
  const allGroups = await getAllGroupData();

  console.log("group id => ", params.id);

  const group = [];
  group.push({
    ...currentGroup.group,
    key: currentGroup.group.name,
  });

  return {
    props: {
      currentGroup: group,
      allGroups,
    },
  };
}

export default Group;
