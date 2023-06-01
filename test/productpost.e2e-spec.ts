import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import * as fs from 'fs';
import { filepath } from 'src/products/mocks/product-req-res.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
   
    await app.init();
  });

 // Create new product with valid information
  describe("Creating New post",()=>{
 it("should create a new product",async()=>{

    const filepath = join('test', 'testimg.jpg');
  
  const res= await request (app.getHttpServer())
    .post('/products')
  
  
    .field('parentId', '5')
    .field('name', 'Nike')
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '5')
    .attach('images', filepath)
    .expect(201)
    // console.log(res.body)
})})

// // Create product with only required field
describe("Should not throw error if the not requireed field is not given",()=>{

  it("should not throw the error if only required field is given ",async()=>{
    const filepath = join('test', 'testimg.jpg');
  
const res=await request (app.getHttpServer())
    .post('/products')
  
  
    .field('name', 'poo')
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '1')
    .attach('images', filepath)
    .expect(201)
    // console.log(res.body)

})
it("Should not throw error if you try to add the new property",async()=>{
  const filepath = join('test', 'testimg.jpg');
  const res=await request (app.getHttpServer())
    .post('/products')
  
  
    .field('name', "prince")
    .field("type","Acceories")
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '1')
    .attach('images', filepath)
    .expect(201)
})

// })
describe("Throwiing error for Invalid informtion",()=>{
  it("should throw bad request if any feild is empty a ",async()=>{
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
it("Should throw bad request for the illegal value",async()=>{
  const filepath = join('test', 'testimg.jpg');
  const res=await request (app.getHttpServer())
    .post('/products')
  
  
    .field('name', "$#$#35")
    .field('description', 'Description')
    .field('highlight', 'Highlight')
    .field('status', 'ACTIVE')
    .field('categoryId', '1')
    .attach('images', filepath)
    .expect(201)
})




describe("Image file format", () => {
  it("should throw bad request if image type is pdf ",async()=>{
        const filepath = join('test', 'image.pdf');
      
   return await request (app.getHttpServer())
        .post('/products')
      
      
        .field('name', 'pp')
        .field('description', 'Description')
        .field('highlight', 'Highlight')
        .field('status', 'ACTIVE')
        .field('categoryId', '1')
        .attach('images', filepath)
        .expect(400)
        
    
    })
    })
  
})
})
})