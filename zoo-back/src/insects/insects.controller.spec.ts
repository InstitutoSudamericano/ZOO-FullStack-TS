import { Test, TestingModule } from '@nestjs/testing';
import { InsectsController } from './insects.controller';

describe('InsectsController', () => {
  let controller: InsectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsectsController],
    }).compile();

    controller = module.get<InsectsController>(InsectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
