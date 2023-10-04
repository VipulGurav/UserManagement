import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.apiUrl;
  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:9091/emp/addEmployee';
    this.getEmpURL = 'http://localhost:9091/emp/getAll';
    this.updateEmpUrl = 'http://localhost:9091/emp/updateEmployee';
    this.deleteEmpUrl = 'http://localhost:9091/emp/deleteEmployeeById';
    // this.addEmpURL = `${this.baseUrl}emp/addEmployee`;
    // this.getEmpURL = `${this.baseUrl}emp/getAll`;
    // this.updateEmpUrl = `${this.baseUrl}emp/updateEmployee`;
    // this.deleteEmpUrl = `${this.baseUrl}emp/deleteEmployeeById`

   }

   addEmployee(emp : Employee): Observable<Employee> {
     return this.http.post<Employee>(this.addEmpURL,emp);
   }

   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.getEmpURL);
   }

   updateEmployee(emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpUrl, emp);
   }

   deleteEmployee(emp : Employee) : Observable<Employee> {
     return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.id);
   }
   fetchEmployees(){
    return this.http.get('${this.baseUrl}employees');
   }

}
