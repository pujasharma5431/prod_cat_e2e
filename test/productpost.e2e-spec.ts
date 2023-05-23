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


  describe("Creating New post",()=>{
   
 
it("should create a new product",async()=>{
    const filepath = join('test', 'testimg.jpg');
  
const res=await request (app.getHttpServer())
    .post('/products')
  
  
    .field('name', 'pp')
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '1')
    .attach('images', filepath)
    .expect(201)



})
it("should throw bad request if any fied is empty a ",async()=>{
    const filepath = join('test', 'testimg.jpg');
  
const res=await request (app.getHttpServer())
    .post('/products')
  
  
    .field('name', '')
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '1')
    .attach('images', filepath)
    .expect(400)



})
it("shouldnot throw the bad request if parentId filed is empty",async()=>{
    const filepath = join('test', 'testimg.jpg');
  
const res=await request (app.getHttpServer())
    .post('/products')
  
    .field('parentId','')
    .field('name', 'pp')
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '1')
    .attach('images', filepath)
    .expect(400)

    console.log(res.body)



})



})
})



