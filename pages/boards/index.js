import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import Layout from "../../components/Layout/Layout";
import fire from "../../firebaseConfig";

const BoardsPage = ({ groupNames }) => (
  <Layout>
    <BoardsContainer groups={groupNames} />
  </Layout>
);

export async function getStaticProps(context) {
  let groupObj;
  await fire
    .database()
    .ref("/groups/")
    .once("value")
    .then((snap) => {
      groupObj = snap.val();
    });

  const groupNames = Object.keys(groupObj);
  return {
    props: {
      groupNames,
    },
  };
}

export default BoardsPage;
