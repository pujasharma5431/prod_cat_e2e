import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('should return the status code 200', async () => {
  const res= await request(app.getHttpServer())
          .delete('/products/9')
        //   console.log(res.body)
         
        .expect(404)
})

it("should return the status code of 400 for invalid id",async()=>{
  const id=[1999,494994];
  const res= await request(app.getHttpServer())


  .delete(`/products/${id}`)
  .expect(400)
})
});