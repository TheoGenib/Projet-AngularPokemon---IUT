import { FormControl } from "@angular/forms";

export interface SearchPokemonFormGroup {
  searchLabel: FormControl<string | null>;
  searchType: FormControl<string | null>;
}