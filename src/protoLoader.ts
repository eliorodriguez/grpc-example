import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

// Import the generated types
import { ProtoGrpcType as UserProtoGrpcType } from '../proto/user';
import { ProtoGrpcType as BikeProtoGrpcType } from '../proto/bike';

// Load the user proto file for service definition
const USER_PROTO_PATH = path.resolve(__dirname, '../proto/user.proto');
const userPackageDefinition = protoLoader.loadSync(USER_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Load the bike proto file for service definition
const BIKE_PROTO_PATH = path.resolve(__dirname, '../proto/bike.proto');
const bikePackageDefinition = protoLoader.loadSync(BIKE_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Load the package definitions
export const userProto = grpc.loadPackageDefinition(userPackageDefinition) as any;
export const bikeProto = grpc.loadPackageDefinition(bikePackageDefinition) as any;

// Export the generated types for type safety
export type { UserProtoGrpcType, BikeProtoGrpcType }; 