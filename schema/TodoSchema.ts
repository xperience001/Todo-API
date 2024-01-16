import {z} from "zod"

export const createTodoSchema = z.object({
    body: z.object({
        name: z.string().min(1, {message: "Name must be greater than 1 character"}),
        description: z.string().min(4, {message: "Description must be greater than 4 characters"})
    })
})

export const updateTodoSchema = z.object({
    params: z.object({
        id: z.string(),
    }),
    body: z.object({
        name: z.string().min(1, {message: "Name must be greater than 1 character"}),
    }),
    description: z.string().min(4, {message: "Description must be greater than 4 characters"})
    // .partial(),
})