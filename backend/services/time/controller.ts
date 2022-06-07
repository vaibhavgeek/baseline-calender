import { NextFunction, Request, Response } from "express";
import { User } from "../../models/user.model";
import { Time } from "../../models/time.model";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as any).user.payload.id !== +req.params.userId) {
    return res.status(401).send({ error: "You can can only access yourself" });
  }
  const timestarts = (req as any).time.start;
  const timeends = (req as any).time.ends;
  if ((req as any).timestarts.length !== (req as any).timeends.length) {
    return res
      .status(400)
      .send({ error: "Something went wrong! Please contact developer" });
  }
  const user = await User.findByPk(req.params.userId);
  const times = [];
  for (let i = 0; i < timestarts.length; i++) {
    times.push({
      timestart: timestarts[i],
      timeend: timeends[i],
      userId: req.params.userId,
      status: "available",
    });
  }
  return Time.bulkCreate(times);
};
