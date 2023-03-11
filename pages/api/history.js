import Room from "../../schemas/room";

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await Room.find({ userId: 1 }).lean();
      if (data.length === 0) {
        return res.status(404).send('No rooms found for this user');
      }
      const finalData = JSON.stringify(data);
      return res.status(200).send(finalData);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
}