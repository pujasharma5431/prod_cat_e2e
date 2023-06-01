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

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
// Response of 200
it('Should have the following properties',async()=>{
  const res=  await request(app.getHttpServer())
  .get('/products')
  .expect(200)
  // Response that get the property
      expect(res.body[0]).toHaveProperty("id")
      expect(res.body[0]).toHaveProperty("categoryId")
      expect(res.body[0]).toHaveProperty("parentId")
      expect(res.body[0]).toHaveProperty("name")
      expect(res.body[0]).toHaveProperty("description")
      expect(res.body[0]).toHaveProperty("status")
      expect(res.body[0]).toHaveProperty("highlights")
      expect(res.body[0].highlights[0]).toHaveProperty("id")
})


// Response according to pageNumber and pageSize
it("should respond with the product using specific pageNumber and pageSize", async () => {

  const pageNumber = 1;
  const pageSize = 2;

  const res = await request(app.getHttpServer())
    .get(`/products/paged/${pageNumber}/${pageSize}`)
    .expect(200);
  expect(res.body).toHaveLength(pageSize);
 

})
it("should respond the invalid mesage when you send the string instead of number",async()=>{
  const pageNumber = "dd";
  const pageSize = 2;

  const res = await request(app.getHttpServer())
    .get(`/products/paged/${pageNumber}/${pageSize}`)
    .expect(400);
  // expect(res.body).toHaveLength(pageSize);

})
// GET response using id
it("should respond using id",  () => {

  
  const id =5;


return request(app.getHttpServer())
    .get(`/products/${id}`)
    .expect(200);

 
      
   
})


})