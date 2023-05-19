import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { error } from 'console';

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
          .get('/products')
        //   console.log(res.body)
         
        .expect(200)
})

it("should return data for pageNumber and pageSize", async()=>{
   const res= await request(app.getHttpServer())
    .get('/products/paged/2/2')
    console.log(res.body)
    // .expect(200) 
})

    it("should get the product using id",async()=>{
        const res=await request(app.getHttpServer())
        .get('/products/1')
        console.log(res.body)
    })

    it('should get the product with id 1',async()=>{
        const expected = {
            "id": 1,
            "categoryId": 1,
            "parentId": 1,
            "name": "PP",
            "description": "Description of Product 2",
            "status": "ACTIVE",
            "highlights": [
                {
                    "id": 1,
                    "description": "gfdsfghgfh"
                }
            ],
            "images": [
                "http://localhost:3333/api/images/products/1"
            ]
        }
      const res=  await request(app.getHttpServer())
        .get('/products/1')
        expect(res.body).toStrictEqual(expected)
        expect(res.statusCode).toStrictEqual(200)
    })
it('Should throw error for the id that doesnot exist',async()=>{
    const res=  await request(app.getHttpServer())
    .get('/products/1000')
        expect(res.body).toEqual( {})

})
it('  ')





});