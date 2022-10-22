export const PROJECT_NAME = "manpower-management";
export const PORT = process.env.PORT || 8000;
export const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/manpower-management";
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "JYr8oFjVyP8CRVvclo7sbVgOgoWyDqsj30n6dn53vTD3s+ZQCpYMmadlhTudlAVy";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30d";