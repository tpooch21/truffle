import fire from "../firebaseConfig";

export async function getAllGroupIds() {
  const groupsRef = fire.database().ref("groups");

  const snap = await groupsRef.once("value");

  const groupIds = Object.keys(snap.val());
  console.log(groupIds);
  return groupIds.map((id) => ({
    params: {
      id,
    },
  }));
}

export async function getGroupDataById(id) {
  const groupsRef = fire.database().ref(`groups/${id}`);

  const groupSnap = await groupsRef.once("value");

  return {
    group: groupSnap.val(),
  };
}

export async function getAllGroupData() {
  const groupsRef = fire.database().ref("groups");
  const snap = await groupsRef.once("value");
  const groupObj = snap.val();

  const groups = Object.keys(groupObj).map((key) => ({
    key: key,
    name: groupObj[key].name,
    boards: groupObj[key].boards || null,
  }));

  return groups;
}
