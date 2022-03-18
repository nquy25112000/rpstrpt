export interface IRead<T> {
    delete(id: string): Promise<boolean>
    fillAll(): Promise<boolean>
    create(item: T[]): Promise<T[]>
    update(id: string, item: T[]): Promise<T[]>
    findOne(id: string): Promise<boolean>
    findItem(item: Partial<T>): Promise<T[]>
}