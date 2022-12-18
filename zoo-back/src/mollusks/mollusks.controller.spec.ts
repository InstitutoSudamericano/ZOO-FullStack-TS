import { Test, TestingModule } from '@nestjs/testing';
import { MollusksController } from './mollusks.controller';

describe('MollusksController', () => {
  let controller: MollusksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MollusksController],
    }).compile();

    controller = module.get<MollusksController>(MollusksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
