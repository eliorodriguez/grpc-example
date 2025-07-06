import * as protoLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import * as path from 'path';

// Load the user proto file
const USER_PROTO_PATH = path.resolve(__dirname, '../proto/user.proto');

const userPackageDefinition = protoLoader.loadSync(USER_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Load the bike proto file
const BIKE_PROTO_PATH = path.resolve(__dirname, '../proto/bike.proto');

const bikePackageDefinition = protoLoader.loadSync(BIKE_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Load the package definitions
const userProto = grpc.loadPackageDefinition(userPackageDefinition) as any;
const bikeProto = grpc.loadPackageDefinition(bikePackageDefinition) as any;

// Create clients
const userClient = new userProto.user.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

const bikeClient = new bikeProto.bike.BikeService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Example: Call ListUsers
userClient.ListUsers({}, (err: any, response: any) => {
  if (err) {
    console.error('Error calling ListUsers:', err);
    return;
  }
  console.log('Users:', response.users);
});

// Example: Call ListBikes
bikeClient.ListBikes({}, (err: any, response: any) => {
  if (err) {
    console.error('Error calling ListBikes:', err);
    return;
  }
  console.log('Bikes:', response.bikes);
});

// Example: Create a new bike
bikeClient.CreateBike({
  brand: 'Trek',
  model: 'Domane',
  color: 'Red',
  year: 2023
}, (err: any, response: any) => {
  if (err) {
    console.error('Error creating bike:', err);
    return;
  }
  console.log('Created bike:', response);
}); 