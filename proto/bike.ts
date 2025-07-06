import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BikeServiceClient as _bike_BikeServiceClient, BikeServiceDefinition as _bike_BikeServiceDefinition } from './bike/BikeService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  bike: {
    BikeListResponse: MessageTypeDefinition
    BikeRequest: MessageTypeDefinition
    BikeResponse: MessageTypeDefinition
    BikeService: SubtypeConstructor<typeof grpc.Client, _bike_BikeServiceClient> & { service: _bike_BikeServiceDefinition }
    CreateBikeRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
  }
}

