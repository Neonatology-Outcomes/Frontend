export class Bundle {
    id: number;
    name: string;
    category: string;
    dataField: string;
    operator: string;
    value: string;
    units: string;
    description: string;
    editing: boolean;

    constructor() {
        this.editing = false;
    }
}
