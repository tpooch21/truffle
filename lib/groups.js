import fire from "../firebaseConfig";

export const getAllGroupIds = () => {
  const groupsRef = fire.database().ref("groups");

  return groupsRef.once("value").then((snap) => {
    const groupIds = Object.keys(snap.val());
    return groupIds.map((id) => ({
      params: {
        id,
      },
    }));
  });
};

export async function getGroupDataById(id) {
  const groupsRef = fire.database().ref("groups");

  let groupData;
  await groupsRef.once("value").then((snap) => (groupData = snap.val()));

  return {
    group: groupData,
  };
}
