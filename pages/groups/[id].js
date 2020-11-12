// Group will display members and boards
// Just boards for now
import Layout from "../../components/Layout/Layout";
import BoardsContainer from "../../containers/BoardsContainer/BoardsContainer";
import { useRouter } from 'next/router';

const Group = () => {
  const router = useRouter();
  return (
    <Layout>
      <BoardsContainer currentGroupId={router.query.id}/>
    </Layout>
  );
}

export default Group;
