import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import {
  capitalizeFirstLetter,
  convertArrayToEntityState,
  deepClone,
  generateUUID,
  isNullOrEmpty,
} from './utils';

@Component({
  selector: 'app-utils-usage',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h3>1. convertArrayToEntityState</h3>
    <span>
      {{ array | json }}
    </span>
    ->
    <b>
      {{ entity | json }}
    </b>
    <br />
    <h3>2. capitalizeFirstLetter</h3>
    <span>{{ helloWorld }}</span>
    ->
    <b>{{ capitalizedLetter }}</b>
    <h3>3. deepClone</h3>
    <span>{{ obj | json }}</span>
    ->
    <b>{{ clonedObj | json }}</b>
    <p>isEqual => {{ obj === clonedObj }}</p>

    <h3>4. isNullOrEmpty</h3>
    <span
      >empty string with spaces only -> <b>{{ isEmpty }}</b></span
    >
    <h3>5. generateUUID</h3>
    @for (uuid of uuids; track $index) {
    <b>{{ uuid }}</b>
    <br />
    }
  `,
})
export class UtilsUsageComponent {
  array = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];
  helloWorld = 'hello world';
  obj = { a: 1, b: { c: 2 } };
  empty = '   ';

  entity!: EntityState<any>;
  capitalizedLetter!: string;
  clonedObj!: object;
  uuids!: string[];
  isEmpty!: boolean;

  constructor() {
    this.entity = convertArrayToEntityState(this.array);
    this.capitalizedLetter = capitalizeFirstLetter(this.helloWorld);
    this.clonedObj = deepClone(this.obj);
    this.uuids = [generateUUID(), generateUUID()];
    this.isEmpty = isNullOrEmpty(this.empty);
  }
}
