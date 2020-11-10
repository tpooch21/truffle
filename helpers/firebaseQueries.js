import fire from '../firebaseConfig';

export async function getGroupDataById(id) {
  const groupsRef = fire.database().ref(`groups/${id}`);

  const groupSnap = await groupsRef.once("value");

  return {
    id,
    group: groupSnap.val(),
  };
}