import {Injectable} from "@angular/core";
import { AbstractControl, FormBuilder } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class BaseForm {

isValidField(form: AbstractControl|null){
    var flag = false;
    if (form != null){
      flag = form.touched || form.dirty && !form.valid;
    }
    return flag;
  }

getErrorMessage(form: AbstractControl|null){
  let message = "";
  if (form){
    const {errors} = form;
    if (errors){
      const messages:any = {
        required:'Campo requerido',
        email: 'Formato invalido',
        pattern: 'Formato invalido',
        minError: 'El rango no es correcto',
        min: 'El rango no es correcto',
        max: 'El rango no es correcto'
      }
      const errorKey = Object.keys(errors).find(Boolean);
      if (errorKey){
        message= messages[errorKey];
      }
    }
  }
  return message;
}

  constructor(){ }


}



