import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import * as fs from 'fs';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', async () => {
    const filepath = join('test', '34563.png');
    const res = await request(app.getHttpServer())
      .post('/products')
      .field('name', 'Product')
      .field('description', 'Description')
      .field('highlight', 'Highlight')
      .field('status', 'ACTIVE')
      .field('categoryId', '1')
      .attach('images', filepath);

    // console.log(res.body);
  });
  it('/ GET', async () => {
    const res = await request(app.getHttpServer()).get('/products');
    // console.log(res.body);
  });
});
