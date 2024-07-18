export class Task{
    id: number | undefined;
    name!: string|null;
    description!: string|null;
    is_completed!: boolean;
    date_creation!:Date;
  constructor(id: number | undefined,
    name:string|null,
    is_completed:boolean|null,
    description: string|null,
    date_creation: Date|null,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        is_completed = is_completed;
        date_creation = date_creation;
  }
}