import { Component } from '@angular/core';
import { FileSizePipe } from './pipe';

@Component({
  selector: 'app-pipe-usage',
  standalone: true,
  imports: [FileSizePipe],
  template: `
    <h3>FileSizePipe</h3>
    <ul>
      @for (size of fileSizes; track $index) {
      <li>
        <span>size</span>
        ->
        <b>{{ size | fileSize }}</b>
      </li>
      }
    </ul>
  `,
})
export class PipeUsageComponent {
  fileSizes = [
    123,
    1024,
    1023,
    1024 * 1024,
    1024 * 6000,
    1024 * 1024 * 1024,
    1024 * 1024 * 1024 * 51.45,
    1024 * 1024 * 1024 * 1024,
    0,
  ];
}
