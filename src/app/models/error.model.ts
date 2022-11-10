export interface msgError {
    timestamp: Date,
    message: string,
    path: string,
    httpCodeMessage: String,
    httpCode: number
}