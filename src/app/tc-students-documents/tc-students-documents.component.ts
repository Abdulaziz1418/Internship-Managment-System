import { Component, OnInit } from '@angular/core';
import { StudentDocument } from '../student-index/student'
import { ConfigService } from '../config/config.service'
import {TCStudentDocumentServices} from './tc-student-documents.service'
@Component({
  selector: 'app-tc-students-documents',
  templateUrl: './tc-students-documents.component.html',
  styleUrls: ['./tc-students-documents.component.css'],
  providers: [TCStudentDocumentServices, ConfigService],

})
export class TcStudentsDocumentsComponent implements OnInit {

  studentDocument:StudentDocument
  constructor(private TCStudentDocumentServices:TCStudentDocumentServices) { }

  ngOnInit(): void {
    this.showStudentsResponse()
  }

  showStudentsResponse() {

    this.TCStudentDocumentServices.getStudentResponse()
      .subscribe(resp => {

        this.studentDocument = resp.body
        console.log(this.studentDocument)

      });
  }
  showPdf(id) {
    this.TCStudentDocumentServices.GetStudentDocumentService(id)
      .subscribe(resp => {
        if (resp.encode == "null") {
          alert("No Document")

        }
        else {
          const linkSource = 'data:application/pdf;base64,' + resp.encode;
          const downloadLink = document.createElement("a");
          const fileName = "Doc.pdf";

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
        }
        this.showStudentsResponse()
      })

  }

}
