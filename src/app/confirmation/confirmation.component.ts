import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-confirm',
  templateUrl: 'confirmation.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    //MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class confirmationComponent {
  @Input() message?:string;
  @Output() choix = new EventEmitter<boolean>();
  constructor(
    public dialogRef: MatDialogRef<confirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, }) {}

  onNoClick(): void {
    this.choix.emit(false);
    this.dialogRef.close();
  }
  supprimer(){
    this.choix.emit(true);
    this.dialogRef.close();
  }

}