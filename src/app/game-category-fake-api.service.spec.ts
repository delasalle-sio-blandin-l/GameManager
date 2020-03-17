import { TestBed } from '@angular/core/testing';

import { GameCategoryFakeApiService } from './game-category-fake-api.service';

describe('GameCategoryFakeApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameCategoryFakeApiService = TestBed.get(GameCategoryFakeApiService);
    expect(service).toBeTruthy();
  });
});
