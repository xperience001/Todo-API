import { Request, Response } from "express";
import { Todo } from "../src/model/Todo";
import { TodoRepo } from "../src/Repository/TodoRepo";

class TodoController{

    async create(req: Request, res: Response){
        const {name} = req.body
        const {description} = req.body
        const {done} = req.body

        try{
            const new_todo = new Todo();
            new_todo.name = name;
            new_todo.description = description
            new_todo.done = done

            await new TodoRepo().save(new_todo)

            res.status(201).json({
                status: "created",
                message: "successfully created todo!"
            })
        }catch(err){
            res.status(500).json({
                status: "internal server error",
                message: "internal server error"
            })
        }
    }

    async delete(req: Request, res: Response){
        try{
            let id = parseInt(req.params["id"])
            await new TodoRepo().delete(id)
            
            res.status(200).json({
                status: "ok!",
                message: "successfully deleted todo!"
            })
        }catch(err){
            res.status(500).json({
                status: "internal server error",
                message: "internal server error"
            })
        }
    }

    async findById(req: Request, res: Response){
        try{
            let id = parseInt(req.params["id"]);
            const new_todo = await new TodoRepo().retrieveById(id)
            
            res.status(200).json({
                status: "ok!",
                message: "successfully fetched a todo data!",
                data: new_todo
            })
        }catch(err){
            res.status(500).json({
                status: "internal server error",
                message: "internal server error"
            })
        }
    }

    async findAll(req: Request, res: Response){
        try{
            const new_todo = await new TodoRepo().retrieveAll()
            
            res.status(200).json({
                status: "ok!",
                message: "successfully fetched all todo data!",
                data: new_todo
            })
        }catch(err){
            res.status(500).json({
                status: "internal server error",
                message: "internal server error"
            })
        }
    }

    async update(req: Request, res: Response){
        try{
            let id = parseInt(req.params["id"])
            const new_todo = new Todo();

            new_todo.id = id
            new_todo.name = req.body.name
            new_todo.description = req.body.description
            
            await new TodoRepo().update(new_todo)

            res.status(200).json({
                status: "ok!",
                message: "successfully updated a todo data!",
            })
        }catch(err){
            res.status(500).json({
                status: "internal server error",
                message: "internal server error"
            })
        }
    }
}

export default new TodoController