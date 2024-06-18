import { SimpleComponent } from './simple.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { RouterOutlet } from '@angular/router';
import { mockedBooks } from './testing/book.mocks';
import { Category } from './models/book.models';

describe('SimpleComponent', () => {
  let spectator: Spectator<SimpleComponent>;
  let component: SimpleComponent;
  const createComponent = createComponentFactory({
    component: SimpleComponent,
    imports: [RouterOutlet],
    declareComponent: false,
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should match the snapshot', () => {
    spectator.detectChanges();

    expect(spectator.fixture).toMatchSnapshot();
  });

  it('should display all the books correctly', () => {
    component.filteredBooks = mockedBooks;

    spectator.detectChanges();

    expect(spectator.queryAll('.book')).toHaveLength(mockedBooks.length);
    expect(spectator.queryLast('.book div')?.textContent).toBe(
      'Test 3 - fantasy'
    );
    expect(spectator.query('.book .bestseller')).toBeVisible();
  });

  it('should display a message when no books are available', () => {
    component.filteredBooks = [];

    spectator.detectChanges();

    expect(spectator.query('p')?.textContent).toBe(
      'No available books on the list'
    );
  });

  it.each([
    [
      Category.FANTASY,
      [
        {
          id: 2,
          bestseller: false,
          category: Category.FANTASY,
          name: 'Test 2',
          price: 100,
        },
        {
          id: 3,
          bestseller: false,
          category: Category.FANTASY,
          name: 'Test 3',
          price: 15,
        },
      ],
    ],
    [
      Category.THRILLER,
      [
        {
          id: 1,
          bestseller: true,
          category: Category.THRILLER,
          name: 'Test 1',
          price: 0,
        },
      ],
    ],
  ])(
    'should display filtered list of books for %s category',
    (category, books) => {
      component.filteredBooks = mockedBooks;

      spectator.click(
        spectator
          .queryAll('.categories button')
          .filter((button) => button.textContent === category)[0]
      );
      spectator.detectChanges();

      expect(component.filteredBooks === books);
    }
  );

  describe('the book price', () => {
    beforeEach(() => {
      component.filteredBooks = mockedBooks;

      spectator.detectChanges();
    });

    it('should have a red color when price is equal/below 10', () => {
      expect(spectator.query('.book .price')?.classList['1']).toBe('cheap');
    });

    it('should have a black color when price is above 10', () => {
      expect(spectator.queryLast('.book .price')?.classList.length).toBe(1);
    });
  });
});
