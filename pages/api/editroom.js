import Room from "../../schemas/room";

export default async function handler(req,res){
    const {email,roomType,roomNumber,startTime,endTime,oldRoom}=req.body;
    const room=Room.findOne({roomNumber:oldRoom})
    console.log(room);
    if (!room){
        return res.status(404).json({
          code: 'BAD_REQUEST_ERROR',
          description: 'User dosen\'t exist. Try creating a new account',
          source: 'authorization_signin',
          reason: 'db_query_not_found',
          metadata: {}
        });
      }
}