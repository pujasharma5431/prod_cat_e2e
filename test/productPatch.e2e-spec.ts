import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import * as fs from 'fs';


describe('AppController (e2e)', () => {
    let app: INestApplication;
  
    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      app = moduleFixture.createNestApplication();
     
      await app.init();
    });
  
  
    describe("Updating a post", () => {
      it("should update a product", async () => {
        // const filepath = join('test', 'testimg.jpg');
        const res=await request (app.getHttpServer())
          .patch('/products/5') // Update the endpoint according to your API
          .field('name', 'PUJA') // Update the field values according to your requirements
          .field('description', 'Updated Description')
          .field('highlight', 'Updated Highlight')
          .field('status', 'ACTIVE')
          .field('categoryId', '2') // Updated category ID
        // console.log(res.body)
      });
    });
  });
  