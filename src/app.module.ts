import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';
// import dotenv from 'dotenv';

// dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'portfolio-api-98d97',
    clientEmail:
      'firebase-adminsdk-h7dqy@portfolio-api-98d97.iam.gserviceaccount.com',
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChiQingfA5pJRl\n/hZIVPdsK+HtSAT1FhZAhZGk9pRVPMQTxKYa5zrOCFmNkmnBnQnYGUFkCoWfvJXC\nzigGXq964iE4gboI4BCO4YJuIyW5LVcx0FflrMJIOUFsEdpI5PMVF7nw8Hc6hrfs\nFC21J58ik/MqF0GGX2DbQ7MxfvIuzVLh3y5/o8lcucQSibl9z2EqxYe/JS072Cjn\nYOAjDF1Foc9Ac6/kSYA5GbZzqn4Qd1fW7hEz4i/M0QeuAvN4K1tTqtqMsQH7Heor\n/tlo5q8Ltslx2b6auK4WfcDc7IVPyHyIL0GLw3UL20PmND76fahZoI6j4MlrxZzU\nZ7LdPc89AgMBAAECggEAAf7f5ZFNdKn+D6DLCUAneFxs/wjNhk3jMTPeX9PZcyKy\n+bawAcpdXos+StcYbhdDEczg7m5ARn/9boLjEGmnMFTzRR2oBhELt+S847K5UYLV\n0JM62HlTQx/fGUBVNfUv2QfKOOxJ4Dhv/fYlkiAlrzcsjs19dmLe1c/EqHXz0CJU\nWHNqZ8zOF4f1IowaWDFQj6kp3SKsiAvo3rrMpQbQejNXKXHmYpsbxx7flwLEWp82\n5jIP7ik+3260AbC/+VQub5bQEKE5DfIaVWgUBq4H8050FpVZdYqs91Ybu4fbgM8M\nOlmXQ6RRovEgLZ9ryfBHJ7EsSH94IrnOVwO/uzIWvwKBgQDYOD+PYO+2JdmmAMw2\nY8LmWsPR7KNmz+78WC2nN+Ph0BT4GNC+M9wm6ykPY2FzYNk7FZOIH9A2jCu2Tu5c\nrZwzfG4R2YXPXgYa9DaU2CZG1h9lK0m0HIIIZbXmn7XONnHu0Oqyf/BEbyZMaBzg\ngfzmQltdRAqw/MBrUG4oaUYwQwKBgQC/QTLaVk8E5vRS2UVCUzqEk7OgXMhM2FCA\n+58yBHdY96ENYZ1xIk1h/rWjsJ2erMXa5076NBAFR3cJvj1qbqJ47Oh4kG62qNUk\nCzpAqsBX4vvK2DuDySzjV/QHheig4/+/hn8boaZLHLP67+7baOAsIvS1QuphL41z\nNDjQU13KfwKBgA230+CG5+6IjDyKBGrW/YCb9ZyWBO/69VCxT4QyeZTUHOB4wpWu\nuKMHfH1rcr1dQasL/WY/jnhHgGZ6r4jVwvlJRbqAMIstjfmb0PK0nAkWgLtseaqh\nvGZH/bh6HZDNx4C9ZIaas2XEH4vtdxePZ7o8L4vFS2BbSOIGIlcSBs/9AoGBALSv\nSPbDEXYlJ2/Z+je135P+4nW/EjCfMDcbAQRE+efgUpQMw6xtZsQM2deidNbCjU3I\nt3FjnDsQkCJxSx5xFSe/UcUNVrtUd8DMpqUPbBXbyFuTu24+shy6LD6rQOI3ZJex\n3gXhyvQtUs/guz0oMJkiESPp6voT7cOH86DFEdfLAoGBAK1qyBMcmwkIfKigp0Lo\neFGzvwnWPh2+iq28v2AY0goSkAw6PEHMYXug0bGIOMI/eGc+fQHxkVKaoslmu4hk\naB07jBdVuS1W4Tr7ysDx6wx3ZDM1Rtl1449urE8Q9XvvIEnHKpcb81ajZotVCC86\nTPIBqTX+NK4RLH1rA612OFpk\n-----END PRIVATE KEY-----\n',
  }),
  databaseURL: 'https://portfolio-api-98d97.firebaseio.com',
});

const firestore = admin.firestore();

firestore
  .collection('collectionName')
  .get()
  .then((snapshot) => {
    console.log('Connected to Firestore');
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((error) => {
    console.error('Error connecting to Firestore: ', error);
  });

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
