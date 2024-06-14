import { Component } from '@angular/core';
import { Link } from '../../models/link.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Paths } from '../../../app.routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly links: Link[] = [
    {
      name: 'Simple component',
      path: Paths.SIMPLE_COMPONENT,
    },
    {
      name: 'Service',
      path: Paths.SERVICE,
    },
    {
      name: 'Pipe',
      path: Paths.PIPE,
    },
    {
      name: 'Directive',
      path: Paths.DIRECTIVE,
    },
    {
      name: 'Complex component',
      path: Paths.COMPLEX_COMPONENT
    },
    {
      name: 'Guard',
      path: Paths.GUARD,
    },
    {
      name: 'Interceptor',
      path: Paths.INTERCEPTOR,
    },
    {
      name: 'NgRx store',
      path: Paths.NGRX_STORE,
    },
    {
      name: 'Utils',
      path: Paths.UTILS,
    },
    {
      name: 'Abstract class',
      path: Paths.ABSTRACT_CLASS,
    },
  ];
}
