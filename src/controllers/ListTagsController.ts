import { Request, Response } from "express";
import { ListTagsSevice } from "../service/ListTagsService";


class ListTagsController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagsSevice()

        const tags = await listTagsService.execute()

        return res.json(tags)
    }
}

export { ListTagsController }