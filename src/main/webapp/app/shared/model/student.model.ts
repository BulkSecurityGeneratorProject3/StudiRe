export interface IStudent {
    id?: number;
    matrikelnummer?: number;
    nachname?: string;
    vorname?: string;
    adresse?: string;
    postleitzahl?: number;
    ort?: string;
}

export class Student implements IStudent {
    constructor(
        public id?: number,
        public matrikelnummer?: number,
        public nachname?: string,
        public vorname?: string,
        public adresse?: string,
        public postleitzahl?: number,
        public ort?: string
    ) {}
}
