/// <reference path="../../typings/main.d.ts"/>

import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {Footer} from './footer';
import {describe, it, expect, inject, async} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

describe('footer component', () => {
  it('should render \'FountainJS team\'', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(Footer)
      .then(fixture => {
        fixture.detectChanges();
        const footer = fixture.nativeElement;
        expect(footer.querySelector('a').textContent.trim()).toBe('FountainJS team');
      });
  })));
});