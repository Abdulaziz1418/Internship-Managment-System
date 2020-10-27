export interface Student{
        id:number 
        name:string 
        supervisor_id:number
        organization_id:number
        email:string 
        vacancy_id:number
        gpa:number
        cv:string
        academicRecord:string
        password: number
}
export interface Supervisor{
        id:number 
        name:string 
        email:string
        password: number
 
}
export interface Organization{
        id:number 
        name:string 
        email:string
        information:string
 
}

export interface TrainingCommittee{
        id:number 
        name:string 
        email:string
}
export interface StudentWithSupervisor{
        id:number 
        name:string 
       
}
export interface Vacancies {
        
        id:number
        job_title:string
        job_description:string
}
export interface Report {
        name:String
        student_id:number
        report:string
}
export interface Document {
        training_committee_id:number
        student_id:number
        document:string
        message:string
}
export interface StudentDocument {
        student_id:number
        document:string
        message:string
        id:number 
        name:string 
        email:string 

}
export interface StudentReport {
        sup_id:number
        student_id:number
        report:string
        Rname:string
        id:number 
        name:string 
        email:string 

}
export interface VacancyApplication{
        vacancy_id:Text
        orgaization_id:Text
        student_id:number
}
export interface StudentVacancies{
        organization_id:number
        vacancy_id:number
        organization_name:String
        student_id:number
        job_title:string
        student_name:string
        status:Text
      
}
export interface Login{
        id: number
        password: number
}

export interface Token{

        id:number
        tokent:string
        name:string
    }