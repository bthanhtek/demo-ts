import { figure } from "./type";


export class MFigure {
    public static async getData() {
         const response = await fetch('http://localhost:5000/api/figure')
         const body = await response.json();
         return body;
    }
}


