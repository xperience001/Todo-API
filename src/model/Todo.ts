import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: Todo.TODO_TABLE_NAME
})
export class Todo extends Model{
    public static TODO_TABLE_NAME = "todo" as string;
    public static TODO_ID = "id" as string;
    public static TODO_NAME = "name" as string;
    public static TODO_DESCRIPTION = "description" as string;
    public static TODO_DONE = "Done" as string;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Todo.TODO_ID
    })
    id!:number

    @Column({
        type: DataType.STRING(100),
        field: Todo.TODO_NAME
    })
    name!:string

    @Column({
        type: DataType.STRING(255),
        field: Todo.TODO_DESCRIPTION
    })
    description!:string

    @Column({
        type: DataType.STRING(255),
        field: Todo.TODO_DONE
    })
    done!:string
}