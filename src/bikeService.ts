import { PrismaClient } from '@prisma/client';
import * as grpc from '@grpc/grpc-js';
import { BikeServiceHandlers } from '../proto/bike/BikeService';
import { Empty__Output } from '../proto/bike/Empty';
import { BikeListResponse__Output } from '../proto/bike/BikeListResponse';
import { BikeRequest__Output } from '../proto/bike/BikeRequest';
import { BikeResponse__Output } from '../proto/bike/BikeResponse';
import { CreateBikeRequest__Output } from '../proto/bike/CreateBikeRequest';

const prisma = new PrismaClient();

export const bikeService: BikeServiceHandlers = {
  async ListBikes(
    call: grpc.ServerUnaryCall<Empty__Output, BikeListResponse__Output>,
    callback: grpc.sendUnaryData<BikeListResponse__Output>
  ) {
    try {
      const bikes = await prisma.bike.findMany();
      
      // Transform database bikes to gRPC response format
      const bikeResponses: BikeResponse__Output[] = bikes.map(bike => ({
        'id': bike.id,
        'brand': bike.brand,
        'model': bike.model,
        'color': bike.color,
        'year': bike.year
      }));
      
      const response: BikeListResponse__Output = {
        'bikes': bikeResponses
      };
      
      callback(null, response);
    } catch (error) {
      console.error('Error fetching bikes:', error);
      callback(error as Error, null);
    }
  },

  async GetBike(
    call: grpc.ServerUnaryCall<BikeRequest__Output, BikeResponse__Output>,
    callback: grpc.sendUnaryData<BikeResponse__Output>
  ) {
    try {
      const { 'id': id } = call.request;
      if (!id) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          message: 'Bike ID is required'
        }, null);
        return;
      }
      const bike = await prisma.bike.findUnique({
        where: { id: parseInt(id.toString()) }
      });
      
      if (!bike) {
        callback({
          code: grpc.status.NOT_FOUND,
          message: 'Bike not found'
        }, null);
        return;
      }
      
      const response: BikeResponse__Output = {
        'id': bike.id,
        'brand': bike.brand,
        'model': bike.model,
        'color': bike.color,
        'year': bike.year
      };
      
      callback(null, response);
    } catch (error) {
      console.error('Error fetching bike:', error);
      callback(error as Error, null);
    }
  },

  async CreateBike(
    call: grpc.ServerUnaryCall<CreateBikeRequest__Output, BikeResponse__Output>,
    callback: grpc.sendUnaryData<BikeResponse__Output>
  ) {
    try {
      const { 'brand': brand, 'model': model, 'color': color, 'year': year } = call.request;
      const bike = await prisma.bike.create({
        data: {
          brand: brand || '',
          model: model || '',
          color: color || '',
          year: parseInt(year?.toString() || '0')
        }
      });
      
      const response: BikeResponse__Output = {
        'id': bike.id,
        'brand': bike.brand,
        'model': bike.model,
        'color': bike.color,
        'year': bike.year
      };
      
      callback(null, response);
    } catch (error) {
      console.error('Error creating bike:', error);
      callback(error as Error, null);
    }
  },
}; 