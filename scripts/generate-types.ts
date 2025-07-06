import { execSync } from 'child_process';
import * as path from 'path';

const PROTO_DIR = path.resolve(__dirname, '../proto');
const OUTPUT_DIR = path.resolve(__dirname, '../src/generated');
//"generate-types": "npx p  roto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/generated proto/*.proto"

// // Ensure output directory exists
// execSync(`mkdir -p ${OUTPUT_DIR}`);

// // Generate TypeScript for user.proto
// console.log('Generating TypeScript for user.proto...');
// execSync(`protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
//   --ts_proto_out=${OUTPUT_DIR} \
//   --ts_proto_opt=esModuleInterop=true \
//   --ts_proto_opt=forceLong=string \
//   --ts_proto_opt=useOptionals=messages \
//   --ts_proto_opt=exportCommonSymbols=false \
//   --ts_proto_opt=env=node \
//   --ts_proto_opt=useExactTypes=false \
//   --proto_path=${PROTO_DIR} \
//   ${PROTO_DIR}/user.proto`, { stdio: 'inherit' });

// // Generate TypeScript for bike.proto
// console.log('Generating TypeScript for bike.proto...');
// execSync(`protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
//   --ts_proto_out=${OUTPUT_DIR} \
//   --ts_proto_opt=esModuleInterop=true \
//   --ts_proto_opt=forceLong=string \
//   --ts_proto_opt=useOptionals=messages \
//   --ts_proto_opt=exportCommonSymbols=false \
//   --ts_proto_opt=env=node \
//   --ts_proto_opt=useExactTypes=false \
//   --proto_path=${PROTO_DIR} \
//   ${PROTO_DIR}/bike.proto`, { stdio: 'inherit' });

// console.log('✅ TypeScript files generated successfully!'); 