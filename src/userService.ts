import { PrismaClient } from '@prisma/client';
import * as grpc from '@grpc/grpc-js';
import { UserServiceHandlers } from '../proto/user/UserService';
import { Empty__Output } from '../proto/user/Empty';
import { UserListResponse__Output } from '../proto/user/UserListResponse';
import { UserResponse__Output } from '../proto/user/UserResponse';

const prisma = new PrismaClient();

export const userService: UserServiceHandlers = {
  async ListUsers(
    call: grpc.ServerUnaryCall<Empty__Output, UserListResponse__Output>,
    callback: grpc.sendUnaryData<UserListResponse__Output>
  ) {
    try {
      const users = await prisma.user.findMany();
      console.log(users);
      
      // Transform database users to gRPC response format
      const userResponses: UserResponse__Output[] = users.map(user => ({
        'id': user.id,
        'name': user.name,
        'email': user.email
      }));
      
      const response: UserListResponse__Output = {
        'users': userResponses
      };
      
      console.log('Response:', response);
      callback(null, response);
    } catch (error) {
      console.error('Error fetching users:', error);
      callback(error as Error, null);
    }
  },
};