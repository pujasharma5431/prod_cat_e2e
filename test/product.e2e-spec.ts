import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { mockFile } from 'src/products/mocks/product-req-res.mock';
import { mockImage } from 'src/csv/mocks/csv-req-res.mock';
import { ConfigModule } from '@nestjs/config';
const axios = require('axios');
describe('ProductController E2E Test', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test
    .createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('should send error when image is not send', async () => {
return request(app.getHttpServer())
      .post('/products')
      .send({
        parentId: "14",
        categoryId: "13",
        name: 'Puja',
        description: 'Hello there',
        highlight: 'QA',
        status: 'ACTIVE',
        images:[mockImage]
      })


  });

  

});
