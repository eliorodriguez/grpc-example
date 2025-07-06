import * as grpc from '@grpc/grpc-js';
import { userProto, bikeProto } from './protoLoader';
import { userService } from './userService';
import { bikeService } from './bikeService';
import dotenv from 'dotenv';

dotenv.config();

function main() {
  const server = new grpc.Server();
  
  // Add services using the generated service definitions
  server.addService(userProto.user.UserService.service, userService);
  server.addService(bikeProto.bike.BikeService.service, bikeService);

  const port = '0.0.0.0:50051';
  server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('gRPC error:', err);
      return;
    }
    console.log(`✅ gRPC server running on port ${port}`);
  });
}

main();