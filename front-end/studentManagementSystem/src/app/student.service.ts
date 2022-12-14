import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL="http://localhost:8080/api/v1/employees"
  constructor(private httpClient: HttpClient) { }

  getStudentList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }
  //creating method
  createStudent(student:Student):Observable<Object>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }
}
