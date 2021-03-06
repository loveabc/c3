import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class HttpService {
    constructor(public http: Http){}

    getJson() {
        return this.http.get("assets//linechart.json");
    }
}