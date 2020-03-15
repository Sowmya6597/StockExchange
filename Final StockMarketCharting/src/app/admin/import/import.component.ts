import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  excelUploadForm:FormGroup;
  constructor(private uploadService:UploadService ) { }
  file:File;
ngOnInit() 
{
  this.excelUploadForm=new FormGroup(
    {
      excelFileUpload:new FormControl("",Validators.required)
    }
  );
}
  onFileChange(e)
  {
    this.file=e.target.files[0];
  }
  uploadData()
  {
    const uploadSheetData=new FormData();
    uploadSheetData.append("stockSheet",this.file,this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(data => {
      alert('File Uploaded Successfully');
    })
  }
}