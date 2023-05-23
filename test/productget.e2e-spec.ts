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
  it.only('should return the status code 200', async () => {
  const res= await request(app.getHttpServer())
          .get('/products/3')
          // console.log(res.body)
         
        .expect({})
})

it("should return data for pageNumber and pageSize", async()=>{
   const res= await request(app.getHttpServer())
    .get('/products/paged/2/2')
    console.log(res.body)
    // .expect(200) 
})

    it("should get the product using id",async()=>{
       return await request(app.getHttpServer())
        .get('/products/3')
        // console.log(res.body)
    })

    it('should get the product with id 5',async()=>{
        const expected = {
            "id": 3,
            "categoryId": 1,
           
            "name": "PP",
            "description": "Description of Product 2",
            "status": "ACTIVE",
            "highlights": [
                {
                    "id": 3,
                    "description": "gfdsfghgfh"
                }
            ],
            "images": [
                "http://localhost:3333/api/images/products/1"
            ]
        }
      const res=  await request(app.getHttpServer())
        .get('/products/3')
        expect(res.body).toStrictEqual(expected)
        expect(res.statusCode).toBe(200)
    })
it('Should throw empty array for the id that does not exist',async()=>{
    const res=  await request(app.getHttpServer())
    .get('/products/1000')
    console.log(res.body)
        expect(res.body).toEqual( {})

})
});