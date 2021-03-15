export class Model{
    user:string;
    items:Array<TodoItem>;
    constructor() {
        this.user= "Bayram";
        this.items = [
            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Kitap Okumak",false),
            new TodoItem("Sinema",false)
        ]
    }

}

export class TodoItem{
    description:string;
    action:boolean;

    constructor(description:string,action:boolean) {
        this.description = description;
        this.action = action;
    }
}