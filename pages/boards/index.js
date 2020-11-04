import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import Layout from "../../components/Layout/Layout";
import fire from "../../firebaseConfig";

const BoardsPage = ({ groups }) => (
  <Layout>
    <BoardsContainer groups={groups} />
  </Layout>
);

// This fetches initial data on server sie when /boards route is visited
export async function getStaticProps(context) {
  let groupObj;
  const groupsRef = fire.database().ref("groups");
  await groupsRef.once("value").then((snap) => {
    groupObj = snap.val();
  });

  const groups = Object.keys(groupObj).map((key) => ({
    key: key,
    name: groupObj[key].name,
    boards: groupObj[key].boards || null,
  }));

  return {
    props: {
      groups,
    },
  };
}

export default BoardsPage;
