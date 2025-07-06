# gRPC Example with Proto Loader

This project demonstrates how to generate and use a proto loader for gRPC services in TypeScript.

## How Proto Loader Generation Works

The proto loader is generated using the `@grpc/proto-loader` package, which:

1. **Loads the .proto file**: Uses `protoLoader.loadSync()` to parse your Protocol Buffer definition
2. **Generates service definitions**: Creates TypeScript/JavaScript objects that represent your gRPC services
3. **Provides type-safe interfaces**: Enables you to call gRPC methods with proper typing

## Key Components

### 1. Proto File (`proto/user.proto`)
Defines your service interface:
```protobuf
service UserService {
  rpc ListUsers (Empty) returns (UserListResponse);
}
```

### 2. Proto Loader (`src/protoLoader.ts`)
Generates the service definitions:
```typescript
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition);
```

### 3. Server Implementation
Uses the generated proto to create the server:
```typescript
server.addService(userProto.user.UserService.service, userService);
```

## Usage

### Start the server:
```bash
npm run dev
```

### Run the client:
```bash
npx ts-node src/client.ts
```

## Proto Loader Options

The `protoLoader.loadSync()` function accepts these options:

- `keepCase`: Preserves field names as-is (default: false)
- `longs`: How to handle 64-bit integers (String, Number, Long)
- `enums`: How to handle enums (String, Number)
- `defaults`: Set default values for missing fields (default: true)
- `oneofs`: Set virtual oneof fields (default: true)

## Benefits of Using Proto Loader

1. **Dynamic loading**: No need to pre-generate TypeScript files
2. **Runtime flexibility**: Can load different proto files at runtime
3. **Type safety**: Provides proper typing for your gRPC calls
4. **Maintainability**: Changes to proto files are automatically reflected 