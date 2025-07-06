// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _user_Empty, Empty__Output as _user_Empty__Output } from '../user/Empty';
import type { UserListResponse as _user_UserListResponse, UserListResponse__Output as _user_UserListResponse__Output } from '../user/UserListResponse';

export interface UserServiceClient extends grpc.Client {
  ListUsers(argument: _user_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _user_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _user_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _user_Empty, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _user_Empty, callback: grpc.requestCallback<_user_UserListResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  ListUsers: grpc.handleUnaryCall<_user_Empty__Output, _user_UserListResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  ListUsers: MethodDefinition<_user_Empty, _user_UserListResponse, _user_Empty__Output, _user_UserListResponse__Output>
}
