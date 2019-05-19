import { NgModule } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material';

const MaterialModluescomponet = [MatButtonModule];
@NgModule({
 
  imports: [MaterialModluescomponet, MatFormFieldModule],
  exports:[MaterialModluescomponet, MatFormFieldModule]
})
export class MaterialModule { }
