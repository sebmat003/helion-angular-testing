import { createPipeFactory } from '@ngneat/spectator/jest';
import { SpectatorPipe } from '@ngneat/spectator';
import { FileSizePipe } from './pipe';

describe('FileSizePipe', () => {
  let spectator: SpectatorPipe<FileSizePipe>;
  const createPipe = createPipeFactory(FileSizePipe);

  it.each([
    [123, '123 Bytes'],
    [1024, '1 KB'],
    [1023, '1023 Bytes'],
    [1024 * 1024, '1 MB'],
    [1024 * 6000, '5.86 MB'],
    [1024 * 1024 * 1024, '1 GB'],
    [1024 * 1024 * 1024 * 51.45, '51.45 GB'],
    [1024 * 1024 * 1024 * 1024, '1 TB'],
  ])('should correctly format file size - %s', (size, result) => {
    spectator = createPipe(`{{ ${size} | fileSize }}`);

    expect(spectator.element).toHaveText(result);
  });

  it('should show 0 Bytes when the filesize is equal to 0', () => {
    spectator = createPipe(`{{ 0 | fileSize }}`);

    expect(spectator.element).toHaveText('0 Bytes');
  });
});
