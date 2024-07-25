export class Task{
    id: number | undefined;
    name!: string|null;
    description!: string|null;
    is_completed!: boolean|null;
    date_creation!:string|null;
    date_modification!: string|null;
    
  constructor(id: number | undefined,
    name:string|null,
    is_completed:boolean|null,
    description: string|null,
    date_creation: string|null,
    date_modification: string|null,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.is_completed = is_completed;
        this.date_creation = date_creation;
        this.date_modification = date_modification;
  }
}