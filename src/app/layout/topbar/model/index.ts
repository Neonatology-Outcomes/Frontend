export class DocumentType {
    public id: number;
    public name: string;

    constructor() {}
}

export class OccupationType {
    public id: number;
    public name: string;

    constructor() {}
}

export class RelationshipType {
    public id: number;
    public name: string;

    constructor() {}
}

export class EducationLevel {
    public id: number;
    public name: string;

    constructor() {}
}

export class DisabilityType {
    public id: number;
    public name: string;

    constructor() {}
}

export class Person {
    public id: number;
    public name: string;
    public lastname: string;
    public nationality: any;
    public occupation_type_id: number;
    public gender: string;
    public birth_date: Date;
    public civil_status: string;
    public relationship_type_id: number;
    public education_level_id: number;
    public disability_type_id: number;
    public emergency_case: string;
    public document_number: string;
    public document_type_id: number;
    public phone: string;
    public cellphone: string;
    public email: string;
    public active: boolean;

    public constructor() {
        this.active = true;
    }
}
