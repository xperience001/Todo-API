import BaseRoutes from "./Base/BaseRouter";
import TodoController from "../controller/TodoController";
import { createTodoSchema, updateTodoSchema } from "../schema/TodoSchema";
import validate from "../helper/validate";


class TodoRoutes extends BaseRoutes{
    public routes(): void {
        // this.router.post("", validate(createTodoSchema), TodoController.create)
        // this.router.patch("/:id", validate(updateTodoSchema), TodoController.update)
        this.router.post("", TodoController.create)
        this.router.patch("/:id", TodoController.update)
        this.router.delete("/:id", TodoController.delete)
        this.router.get("", TodoController.findAll)
        this.router.get("/:id", TodoController.findById)
    }
}

export default new TodoRoutes().router