// Original file: proto/bike.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BikeListResponse as _bike_BikeListResponse, BikeListResponse__Output as _bike_BikeListResponse__Output } from '../bike/BikeListResponse';
import type { BikeRequest as _bike_BikeRequest, BikeRequest__Output as _bike_BikeRequest__Output } from '../bike/BikeRequest';
import type { BikeResponse as _bike_BikeResponse, BikeResponse__Output as _bike_BikeResponse__Output } from '../bike/BikeResponse';
import type { CreateBikeRequest as _bike_CreateBikeRequest, CreateBikeRequest__Output as _bike_CreateBikeRequest__Output } from '../bike/CreateBikeRequest';
import type { Empty as _bike_Empty, Empty__Output as _bike_Empty__Output } from '../bike/Empty';

export interface BikeServiceClient extends grpc.Client {
  CreateBike(argument: _bike_CreateBikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  CreateBike(argument: _bike_CreateBikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  CreateBike(argument: _bike_CreateBikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  CreateBike(argument: _bike_CreateBikeRequest, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  createBike(argument: _bike_CreateBikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  createBike(argument: _bike_CreateBikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  createBike(argument: _bike_CreateBikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  createBike(argument: _bike_CreateBikeRequest, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  
  GetBike(argument: _bike_BikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  GetBike(argument: _bike_BikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  GetBike(argument: _bike_BikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  GetBike(argument: _bike_BikeRequest, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  getBike(argument: _bike_BikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  getBike(argument: _bike_BikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  getBike(argument: _bike_BikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  getBike(argument: _bike_BikeRequest, callback: grpc.requestCallback<_bike_BikeResponse__Output>): grpc.ClientUnaryCall;
  
  ListBikes(argument: _bike_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  ListBikes(argument: _bike_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  ListBikes(argument: _bike_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  ListBikes(argument: _bike_Empty, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  listBikes(argument: _bike_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  listBikes(argument: _bike_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  listBikes(argument: _bike_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  listBikes(argument: _bike_Empty, callback: grpc.requestCallback<_bike_BikeListResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface BikeServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateBike: grpc.handleUnaryCall<_bike_CreateBikeRequest__Output, _bike_BikeResponse>;
  
  GetBike: grpc.handleUnaryCall<_bike_BikeRequest__Output, _bike_BikeResponse>;
  
  ListBikes: grpc.handleUnaryCall<_bike_Empty__Output, _bike_BikeListResponse>;
  
}

export interface BikeServiceDefinition extends grpc.ServiceDefinition {
  CreateBike: MethodDefinition<_bike_CreateBikeRequest, _bike_BikeResponse, _bike_CreateBikeRequest__Output, _bike_BikeResponse__Output>
  GetBike: MethodDefinition<_bike_BikeRequest, _bike_BikeResponse, _bike_BikeRequest__Output, _bike_BikeResponse__Output>
  ListBikes: MethodDefinition<_bike_Empty, _bike_BikeListResponse, _bike_Empty__Output, _bike_BikeListResponse__Output>
}
