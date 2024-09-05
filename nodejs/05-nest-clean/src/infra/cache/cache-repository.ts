export abstract class CacheRepository {
  abstract delete(key: string): Promise<void>
  abstract get(key: string): Promise<void>
  abstract set(key: string, value: string): Promise<void>
}
