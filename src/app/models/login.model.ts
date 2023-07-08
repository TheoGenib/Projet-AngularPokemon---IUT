import { FormControl } from "@angular/forms";

export interface LoginFormGroup {
  login: FormControl<string | null>;
}