import nc from "next-connect";
import fire from "../../../firebaseConfig";

const handler = nc()
  .get(async (req, res) => {
    const { id } = req.query;
    const groupRef = fire.database().ref(`groups/${id}`);
    const groupSnap = await groupRef.once("value");

    // Add groupData to array for rendering purposes
    const groupFormatted = [
      {
        ...groupSnap.val(),
        key: id,
      },
    ];
    res.json({ groups: groupFormatted }).status(200);
  })
  // Update a new board to a group
  .post((req, res) => {
    const { id } = req.query;
    const { boardId, boardName, img } = req.body;
    const groupsRef = fire.database().ref(`groups/${id}`).child("boards");
    groupsRef.update(
      {
        [boardId]: {
          name: boardName,
          img: img,
        },
      },
      (err) => {
        if (err) res.send(501);
        else res.send(201);
      }
    );
  });

export default handler;
